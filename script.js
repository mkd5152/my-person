// Show the initial button and start the process on click
document.getElementById("startButton").addEventListener("click", function() {
    this.style.display = "none"; // Hide the initial button
    document.getElementById("letterContainer").classList.remove("hidden"); // Show the letter container
    revealLetter(); // Start revealing the notes
});

// Function to reveal the letter lines one by one
function revealLetter() {
    const lines = [
        "Hey you, I know it’s been heavy lately.",
        "You don’t have to carry it all by yourself.",
        "Even on the nights you feel invisible, I see you.",
        "What if you stayed? Just for one more moment?",
        "Because even in your quietest days, you are not forgotten.",
        "I choose you. In all your light and all your storm.",
        "If it feels too much, just press this."
    ];

    let i = 0;
    function typeLine() {
        if (i < lines.length) {
            let lineElement = document.getElementById(`line${i + 1}`);
            lineElement.textContent = lines[i];
            lineElement.classList.add("fade-in"); // Smooth fade-in animation
            lineElement.style.display = "block"; // Show the text box
            i++;
            setTimeout(typeLine, 1500); // Show next box after 1.5 seconds
        } else {
            // Show the buttons after all notes have appeared
            document.getElementById("comfortButton").classList.remove("hidden");
            document.getElementById("readStruggles").classList.remove("hidden");
        }
    }

    typeLine(); // Call the function to start typing the lines
}

// Comfort Button Functionality
document.getElementById("comfortButton").addEventListener("click", function() {
    document.getElementById("hiddenMessage").classList.remove("hidden");
    document.querySelector(".breathing-container").classList.remove("hidden");
});

// Midnight Message
if (new Date().getHours() >= 0 && new Date().getHours() <= 4) {
    document.getElementById("midnightMessage").classList.remove("hidden");
}
