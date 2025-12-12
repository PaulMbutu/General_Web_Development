import streamlit as st
import fitz
import pytesseract
from pdf2image import convert_from_bytes
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from io import BytesIO
from PIL import Image

def extract_images_from_pdf(pdf_file):
    doc = fitz.open(stream=pdf_file.read(), filetype="pdf")
    images = []
    for page_index in range(len(doc)):
        page = doc[page_index]
        image_list = page.get_images()
        for image_index, img in enumerate(image_list):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image = Image.open(BytesIO(image_bytes))
            images.append(image)
    return images

def extract_text_from_image(image):
    if image.mode != 'RGB':
        image = image.convert('RGB')
    return pytesseract.image_to_string(image)

def create_new_pdf(text_entries):
    buffer = BytesIO()
    pdf = canvas.Canvas(buffer, pagesize=letter)
    y = 750
    
    for text in text_entries:
        lines = text.split('\n')
        for line in lines:
            if y < 50:
                pdf.showPage()
                y = 750
            
            if line.strip():
                if len(line) > 100:
                    chunks = [line[i:i+100] for i in range(0, len(line), 100)]
                    for chunk in chunks:
                        pdf.drawString(50, y, chunk)
                        y -= 15
                else:
                    pdf.drawString(50, y, line)
                    y -= 15
    
    pdf.save()
    buffer.seek(0)
    return buffer

def main():
    st.title("PDF to Text Converter")
    
    if 'images' not in st.session_state:
        st.session_state.images = []
        st.session_state.extracted_texts = []
        st.session_state.verified_texts = []
        st.session_state.current_index = 0
        st.session_state.processing_complete = False
    
    st.write("""
    This app extracts images from a PDF file, performs OCR to extract text from those images,
    and creates a new PDF with the extracted text. Edit and verify each page's text before moving to the next.
    """)
    
    uploaded_file = st.file_uploader("Choose a PDF file", type="pdf")
    
    if uploaded_file is not None and not st.session_state.processing_complete:
        with st.spinner("Extracting images from PDF..."):
            try:
                st.session_state.images = extract_images_from_pdf(uploaded_file)
                if st.session_state.images:
                    st.success(f"Successfully extracted {len(st.session_state.images)} images")
                    st.session_state.extracted_texts = [""] * len(st.session_state.images)
                    st.session_state.verified_texts = [""] * len(st.session_state.images)
                    st.session_state.processing_complete = True
                else:
                    st.warning("No images found in the PDF")
                    return
            except Exception as e:
                st.error(f"Error extracting images: {str(e)}")
                return
    
    if st.session_state.processing_complete:
        st.info(f"Processing Page {st.session_state.current_index + 1} of {len(st.session_state.images)}")
        
        progress = (len([t for t in st.session_state.verified_texts if t.strip()]) / 
                   len(st.session_state.images))
        st.progress(progress)
        
        current_image = st.session_state.images[st.session_state.current_index]
        st.image(current_image, caption=f"Image {st.session_state.current_index + 1}", use_column_width=True)
        
        if st.button("Extract text from this image"):
            with st.spinner("Extracting text..."):
                extracted_text = extract_text_from_image(current_image)
                st.session_state.extracted_texts[st.session_state.current_index] = extracted_text
                st.rerun()  # Updated here
        
        current_text = st.session_state.extracted_texts[st.session_state.current_index]
        new_text = st.text_area("Edit extracted text:", value=current_text, height=200, key=f"text_{st.session_state.current_index}")
        
        col1, col2 = st.columns([1, 4])
        with col1:
            if st.button("Verify & Save"):
                st.session_state.verified_texts[st.session_state.current_index] = new_text
                st.success("Text verified and saved!")
        
        col1, col2, col3 = st.columns([1, 1, 2])
        
        with col1:
            if st.button("Previous", disabled=st.session_state.current_index == 0):
                st.session_state.current_index -= 1
                st.rerun()  # Updated here
                
        with col2:
            if st.button("Next", disabled=(not any(st.session_state.verified_texts)) or 
                                           (st.session_state.current_index == len(st.session_state.images) - 1)):
                st.session_state.current_index += 1
                st.rerun()  # Updated here
        
        with st.expander("View All Verified Texts"):
            for idx, text in enumerate(st.session_state.verified_texts):
                if text.strip():
                    st.write(f"Page {idx + 1}:")
                    st.text(text)
        
        all_verified = all(text.strip() for text in st.session_state.verified_texts)
        if st.button("Create Final PDF", disabled=not all_verified):
            with st.spinner("Creating PDF..."):
                try:
                    pdf_buffer = create_new_pdf(st.session_state.verified_texts)
                    st.success("PDF created successfully!")
                    
                    # Create download button
                    st.download_button(
                        label="Download PDF",
                        data=pdf_buffer,
                        file_name="output.pdf",
                        mime="application/pdf"
                    )
                except Exception as e:
                    st.error(f"Error creating PDF: {str(e)}")
        
        if st.button("Process new PDF"):
            for key in list(st.session_state.keys()):
                del st.session_state[key]
            # Resetting session state to start fresh

if __name__ == "__main__":
    main()