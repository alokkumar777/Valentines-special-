const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const content = document.getElementById("content");
const video = document.getElementById("dancing");
const msg = document.getElementById("msg");
const backgroundAudio = document.getElementById("backgroundAudio");

let yesButtonSize = 13;

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
  "I like you more than anyone",
];

let phraseIndex = 0;

// Pre-load media
window.addEventListener("load", () => {
  // Pre-load video
  video.load();
  video.addEventListener("error", (e) => {
    console.error("Video Error:", video.error);
  });

  // Pre-load audio
  backgroundAudio.load();
  backgroundAudio.addEventListener("error", (e) => {
    console.error("Audio Error:", backgroundAudio.error);
  });
});

noButton.addEventListener("click", () => {
  noButton.textContent = phrases[phraseIndex];
  phraseIndex = (phraseIndex + 1) % phrases.length;

  const randomX = Math.random() * window.innerWidth * 0.8;
  const randomY = Math.random() * window.innerHeight * 0.6;
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;

  yesButtonSize *= 1.2;
  yesButton.style.fontSize = `${yesButtonSize}px`;
});

yesButton.addEventListener("click", async () => {
  try {
    content.style.display = "none";

    // Show video first
    video.removeAttribute("hidden");
    video.style.display = "block";

    // Play both media with proper error handling
    await Promise.all([
      video.play().catch((error) => {
        console.error("Video playback failed:", error);
        // Try playing again after user interaction
        video.addEventListener("click", () => video.play());
      }),
      backgroundAudio.play().catch((error) => {
        console.error("Audio playback failed:", error);
        // Try playing again after user interaction
        backgroundAudio.addEventListener("click", () => backgroundAudio.play());
      }),
    ]);

    msg.style.display = "block";
    createHearts();
  } catch (error) {
    console.error("Media playback error:", error);
  }
});

function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0";
    heart.style.fontSize = Math.random() * 30 + 10 + "px";
    heart.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(heart);
  }
}

// Add these helper functions to check media status
function checkMediaStatus() {
  console.log("Video ready state:", video.readyState);
  console.log("Audio ready state:", backgroundAudio.readyState);
  console.log("Video network state:", video.networkState);
  console.log("Audio network state:", backgroundAudio.networkState);
}

// Check media status periodically
setInterval(checkMediaStatus, 2000);
