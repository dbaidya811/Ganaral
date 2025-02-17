import os
import google.generativeai as genai
from aiogram import Bot, Dispatcher, types
from aiogram.types import Message
from aiogram.utils import executor

# Set your API keys
TELEGRAM_BOT_TOKEN = "7638372544:AAHPtVI48uiiCPxGwxxjlgBKk8ctRnflaUw"
GEMINI_API_KEY = "AIzaSyCffkAMn4uPgNU-CtKUYLMIA_d4G3zMjAM"

# Initialize Gemini API
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-pro")

# Initialize Telegram bot
bot = Bot(token=TELEGRAM_BOT_TOKEN)
dp = Dispatcher(bot)

@dp.message_handler(commands=['start'])
async def start(message: Message):
    await message.reply("Hello! I am ChatSync, powered by Gemini AI. Ask me anything!")

@dp.message_handler()
async def chat_with_gemini(message: Message):
    try:
        response = model.generate_content(message.text)
        await message.reply(response.text)
    except Exception as e:
        await message.reply("Error processing your request. Please try again later.")

if __name__ == "__main__":
    print("Bot is running...")
    executor.start_polling(dp, skip_updates=True)
