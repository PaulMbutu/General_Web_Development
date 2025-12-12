from PIL import Image
import pytesseract

# Set the Tesseract path (adjust this to your installation path)
pytesseract.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

# Create a simple test function
def test_tesseract():
    try:
        # Try to get Tesseract version
        version = pytesseract.get_tesseract_version()
        print(f"Tesseract is working! Version: {version}")
        return True
    except Exception as e:
        print(f"Error: {str(e)}")
        return False

test_tesseract()