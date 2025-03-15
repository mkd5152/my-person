document.addEventListener('DOMContentLoaded', function () {
    // Show the initial button and start the process on click
    document.getElementById("startButton").addEventListener("click", function () {
        this.style.display = "none";
        document.getElementById("letterContainer").classList.remove("hidden");
        revealLetter();
    });

    function revealLetter() {
        const lines = [
            "I know it’s been heavy lately. But so are the strongest things—like the love you pour into everything.",
            "You’ve spent so much time holding everyone together. Let me hold you for a bit.",
            "You are more than the comparisons. More than the expectations. You are you, and that is enough.",
            "Remember the way your heart felt lighter in Chennai? That’s the real you. You deserve to feel like that every day.",
            "You’ve built a home inside people’s hearts—mine especially. I hope you never forget that.",
            'If it feels too much, just <span id="pressThis" class="clickable">press this</span>. And I’ll remind you again. And again. And again.'
        ];

        let i = 0;

        function typeLine() {
            if (i < lines.length) {
                let lineElement = document.getElementById(`line${i + 1}`);
                lineElement.innerHTML = lines[i];
                lineElement.classList.add("fade-in");
                lineElement.style.display = "block";
                i++;

                setTimeout(typeLine, 1500);
            } else {
                document.getElementById("comfortButton").classList.remove("hidden");
            }
        }
        typeLine();
    }

    // ✅ Fixed: Event Delegation for "press this"
    document.addEventListener("click", function (event) {
        if (event.target && event.target.id === "pressThis") {
            console.log("Press This clicked!"); // Debugging
            document.getElementById("secretSpot").classList.remove("hidden");
            document.getElementById("secretSpot").style.display = "block"; // Ensure visibility
        }
    });

    document.getElementById("secretSpot").addEventListener("mouseenter", function () {
        console.log("mouseenter"); // Debugging
        
        document.getElementById("comfortButton").classList.add("hidden");
        let hiddenNote = document.getElementById("hiddenNote");
        hiddenNote.classList.remove("hidden");
        hiddenNote.style.display = "block";  // Ensure it's visible
        setTimeout(() => {
            hiddenNote.style.opacity = "1";  // Smooth transition
        }, 10);
    });
    
    document.getElementById("secretSpot").addEventListener("mouseleave", function () {
        document.getElementById("comfortButton").classList.remove("hidden");

        let hiddenNote = document.getElementById("hiddenNote");
        hiddenNote.style.opacity = "0"; // Fade out effect
        setTimeout(() => {
            hiddenNote.style.display = "none";
        }, 500);
    });

    document.getElementById("comfortButton").addEventListener("click", function () {
        let button = this;
        button.style.animation = "heartbeat 0.6s ease-in-out 2"; // Quick heart-pulse animation

        setTimeout(() => {
            if (confirm("Would you like to send this message? 💝")) {
                const phoneNumber = "971501567793";
                const message = encodeURIComponent("💝"); // Fixed emoji encoding

                const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
                window.open(whatsappLink, "_blank");
            }
        }, 1200); // Delays the WhatsApp opening by 1.2s
    });

    // Midnight Message Logic:
    function checkMidnight() {
        if (new Date().getHours() >= 0 && new Date().getHours() <= 4) {
            document.getElementById("midnightMessage").classList.remove("hidden");
        }
    }
    checkMidnight(); // Call the function to check on page load
});