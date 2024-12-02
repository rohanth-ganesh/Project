// Get modal element
const modal = document.getElementById("chatModal");

// Get open modal button (image)
const chatIcon = document.getElementById("chatIcon");

// Get close button
const closeButton = document.getElementsByClassName("close")[0];

// Open modal (slide-in and fade-in) when image is clicked
chatIcon.onclick = function() {
    modal.style.display = "block"; // Ensure modal is visible
    setTimeout(() => modal.classList.add("show"), 10); // Add 'show' class with a slight delay
}

// Close modal when the close button is clicked
closeButton.onclick = function() {
    closeModal();
}

// Close modal when user clicks outside the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Function to close the modal
function closeModal() {
    modal.classList.remove("show"); // Remove 'show' class to slide it out
    setTimeout(() => modal.style.display = "none", 500); // Hide modal after transition
}

// Chatbot logic
const chatbox = document.getElementById('chatbox');


// Function to send a predefined phrase
function sendPhrase(phrase) {
    appendMessage("User", phrase);
    setTimeout(() => {
        const botResponse = getBotResponse(phrase);
        appendMessage("Chatbot", botResponse);
    }, 1000);
}
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        appendMessage("User", userInput);
        document.getElementById('userInput').value = "";

        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            appendMessage("Chatbot", botResponse);
        }, 1000);
    }
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}
// Chatbot logic with responses
function getBotResponse(userMessage) {
    const messageLower = userMessage.toLowerCase();
    if (messageLower.includes("hello") || messageLower.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (messageLower.includes("services")) {
        return "We offer a variety of services including resume building, career counseling, and job search assistance. Check out our services <a href='services.html' onclick='closeModal()'>here</a>.";
    } else if (messageLower.includes("support")) {
        return "You can contact our support team <a href='contact.html'>here</a> or call us at +91 9876543210.";
    } else if (messageLower.includes("thank you") || messageLower.includes("thanks")) {
        return "You're welcome! If you have more questions, feel free to ask.";
    } else if (messageLower.includes("bye") || messageLower.includes("goodbye")) {
        return "Goodbye! Have a great day!";
    } else if (messageLower.includes("practice")) {
        return "You can practice your interview with live AI <a href='https://yoodli.ai/' onclick='closeModal()'>here</a>.";
    } else if (messageLower.includes("create")) {
        return "You can create your resume <a href='res_gen.html' onclick='closeModal()'>here</a>.";
    } else if (messageLower.includes("quiz")) {
        return "You can create your resume <a href='quiz.html' onclick='closeModal()'>here</a>.";
    } else {
        return "I'm sorry, I don't understand that. Can you please rephrase?";
    }
    
}

