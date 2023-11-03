document.addEventListener("DOMContentLoaded", function() {
    const chat = document.getElementById("chat");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
  
    sendButton.addEventListener("click", function() {
      const messageText = messageInput.value;
      if (messageText) {
        const message = createMessage(messageText);
        chat.appendChild(message);
        messageInput.value = "";
      }
    });
  
    chat.addEventListener("click", function(event) {
      if (event.target.classList.contains("message")) {
        event.target.remove();
      }
      if (event.target.classList.contains("comment")) {
        event.target.remove();
      }
    });
  
    function createMessage(text) {
      const message = document.createElement("div");
      message.className = "message sent";
      message.innerHTML = `<p>${text}</p>`;
      message.addEventListener("click", function() {
        message.classList.toggle("comment");
      });
      return message;
    }
  });
  