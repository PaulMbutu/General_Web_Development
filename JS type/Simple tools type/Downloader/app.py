from flask import Flask, render_template, request, jsonify, send_file
import os
import os
import yt_dlp
import base64
import telebot
import threading

# Flask Setup
app = Flask(__name__)

# Telegram Setup
BOT_TOKEN = '8056598527:AAG2yQ358Z1PhGUtsm6F0IGUf5lhSpp0pJs' 
bot = telebot.TeleBot(BOT_TOKEN)

# Paths
save_path = 'tiktok_videos'
if not os.path.exists(save_path):
    os.makedirs(save_path)

# Helper functions
def encode_url(url):
    url_bytes = url.encode('utf-8')
    return base64.urlsafe_b64encode(url_bytes).decode('utf-8')

def decode_url(encoded_url):
    decoded_bytes = base64.urlsafe_b64decode(encoded_url)
    return decoded_bytes.decode('utf-8')

def process_download(video_url):
    """Handles video downloading and returns the file path if downloaded or exists."""
    file_path = os.path.join(save_path, f"{encode_url(video_url)}.mp4")

    # Check if video file already exists
    if os.path.exists(file_path):
        print("File exists.")
        return file_path

    # Download video if not already downloaded
    ydl_opts = {
        'outtmpl': os.path.join(save_path, f"{encode_url(video_url)}.%(ext)s"),
        'format': 'best',
    }
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.extract_info(video_url, download=True)
        return file_path
    except Exception as e:
        print(f"Error downloading video: {str(e)}")
        return None

# Flask Routes
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        data = request.get_json()
        url = data.get("url", None)

        # Process download here
        file_path = process_download(url)  # Replace with actual download logic
        
        if file_path:
            # If download successful, return JSON with file path
            file_url = f"/download/{os.path.basename(file_path)}"  # Dynamic URL for file
            return jsonify(success=True, file_url=file_url)
        else:
            # If download failed
            return jsonify(success=False, message="Failed to download video. Please try again.")

    return render_template("index.html")

# Route to serve downloaded files
@app.route("/download/<filename>")
def download_file(filename):
    file_path = os.path.join("tiktok_videos", filename)
    return send_file(file_path, as_attachment=True)

# Telegram Bot Handlers
@bot.message_handler(commands=['start', 'hello'])
def send_welcome(message):
    bot.reply_to(message, "Howdy, how are you doing? Send a TikTok video URL to download.")

@bot.message_handler(func=lambda msg: True)
def handle_message(message):
    url = message.text
    file_path = process_download(url)

    if file_path:
        with open(file_path, 'rb') as video:
            bot.send_video(message.chat.id, video, timeout=360000)
    else:
        bot.reply_to(message, "Failed to download video. Please try again.")

# Function to start Flask app in a separate thread
def start_flask():
    app.run(host="0.0.0.0", port=8080, debug=True, use_reloader=False)


# Function to start Telegram bot polling in a separate thread
def start_telegram_bot():
    bot.infinity_polling()

# Main execution
if __name__ == "__main__":
    # Create threads for Flask and Telegram bot
    flask_thread = threading.Thread(target=start_flask)
    telegram_thread = threading.Thread(target=start_telegram_bot)

    # Start both threads
    flask_thread.start()
    telegram_thread.start()

    # Join threads to keep the script running
    flask_thread.join()
    telegram_thread.join()


