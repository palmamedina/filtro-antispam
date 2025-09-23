const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value.trim() === "") {
    alert("Please enter a message.");
    return; 
  }

});

function isSpam(message) {
  return false;
}