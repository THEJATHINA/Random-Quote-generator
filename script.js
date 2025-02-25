const quotes = [
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts"},
  { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown Jr." },
  { text: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const listenBtn = document.getElementById('listen-btn');
const shareBtn = document.getElementById('share-btn');
const shareMenu = document.getElementById('share-menu');

// Generate a random quote
generateBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = `"${quotes[randomIndex].text}"`;
  authorElement.textContent = `- ${quotes[randomIndex].author}`;
  quoteElement.style.animation = 'slideIn 0.5s ease-in-out';
  authorElement.style.animation = 'fadeIn 1s ease-in-out';
});

// Listen to the quote (Text-to-Speech)
listenBtn.addEventListener('click', () => {
  const speech = new SpeechSynthesisUtterance(`${quoteElement.textContent} by ${authorElement.textContent}`);
  window.speechSynthesis.speak(speech);
});

// Toggle share menu
shareBtn.addEventListener('click', () => {
  shareMenu.style.display = shareMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Share on Twitter
document.getElementById('share-twitter-btn').addEventListener('click', () => {
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quoteElement.textContent} - ${authorElement.textContent}`)}`;
  window.open(tweetUrl, '_blank');
});

// Share on WhatsApp
document.getElementById('share-whatsapp-btn').addEventListener('click', () => {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${quoteElement.textContent} - ${authorElement.textContent}`)}`;
  window.open(whatsappUrl, '_blank');
});

// Share on Instagram (Note: Instagram doesn't support direct sharing via URL)
document.getElementById('share-instagram-btn').addEventListener('click', () => {
  alert("Copy the quote and share it on Instagram manually!");
});
