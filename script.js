const messageInput = document.getElementById("message-input");
const result = document.getElementById("result-message");
const checkMessageButton = document.getElementById("check-message-btn");

checkMessageButton.addEventListener("click", () => {
  if (messageInput.value.trim() === "") {
    alert("Please enter a message.");
    return; 
  }
    result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";

    messageInput.value = "";
});

function isSpam(message) {
    const helpRegex = /please help/i;
  return false;
}