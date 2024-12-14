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
            // Update text from the array
            noButton.textContent = phrases[phraseIndex];
            phraseIndex = (phraseIndex + 1) % phrases.length;

            // Random movement for "No" button
            const randomX = Math.random() * window.innerWidth * 0.8;
            const randomY = Math.random() * window.innerHeight * 0.6;
            noButton.style.position = "absolute";
            noButton.style.left = `${randomX}px`;
            noButton.style.top = `${randomY}px`;

            // Make "Yes" button bigger
            yesButtonSize *= 1.2;
            yesButton.style.fontSize = `${yesButtonSize}px`;
        });

        yesButton.addEventListener("click", () => {
            // Hide content and show video
            content.style.display = "none";
            video.removeAttribute("hidden");
            video.play();
            msg.removeAttribute("hidden");
    
            // Heart animations
            createHearts(); // Call the function to create floating hearts
        });
    
        function createHearts() {
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement("div");
                heart.classList.add("heart");
                heart.innerHTML = "❤️"; // Add heart symbol
                heart.style.left = Math.random() * window.innerWidth + "px";
                heart.style.bottom = "0"; // Start at the bottom of the screen
                heart.style.fontSize = Math.random() * 30 + 10 + "px"; // Random sizes
                heart.style.animationDelay = Math.random() * 2 + "s"; // Staggered animations
                document.body.appendChild(heart);
    
                // Remove the heart after animation completes
                setTimeout(() => heart.remove(), 2000*10);
            }
        }