const chatbotBox = document.getElementById("chatbot-box");
const messages = document.getElementById("chatbot-messages");
const input = document.getElementById("chatbot-input");

function toggleChat() {
  chatbotBox.style.display = chatbotBox.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    let reply;
    if (text.toLowerCase().includes("sad"))
      reply = "I'm here for you 💜 Let's take a deep breath together — would you like a relaxation tip?";
    else if (text.toLowerCase().includes("happy"))
      reply = "That's amazing! Keep that positivity flowing 🌈";
    else if (text.toLowerCase().includes("stress"))
      reply = "Try this: inhale 4s, hold 4s, exhale 4s 🌬️ You got this.";
    else
      reply = "I'm listening 👂 Tell me more, I'm here for you.";

    addMessage(reply, "bot");
  }, 600);
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
