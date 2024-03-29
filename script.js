const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const content = document.getElementById("content");
const video = document.getElementById("kissing");
const msg = document.getElementById("msg");

let yesButtonSize = 13; // Initial size yes button

const phrases = [
    "Are you sure?",
    "I like you so much",
    "Really sure?",
    "Please",
    "Don't do this to me",
    "I'm gonna cry",
    "Please don't break my heart :(",
    "Tume rani bna ke rakhuga",
    "You deserve a man like me",
    "I can make you smile",
    "I like you more than anyone"
];

let phraseIndex = 0;

noButton.addEventListener("click", () => {
    noButton.textContent = phrases[phraseIndex]; // Update text from the array

    phraseIndex = (phraseIndex + 1) % phrases.length; // Cycle through the phrases

    yesButtonSize *= 1.2; // Double the size
    yesButton.style.fontSize = `${yesButtonSize}px`; // Apply new size
});


yesButton.addEventListener("click", () => {
    content.style.display = "none"; // Hide all content
  
    video.removeAttribute("hidden"); // Or video.style.display = "block";
    video.play(); // Ensure video plays

    msg.removeAttribute("hidden");
});
