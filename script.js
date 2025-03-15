document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("startButton").style.display = "none";
    revealLetter();
});

function revealLetter() {
    const lines = [
        "I know nights feel impossible.",
        "I know your body is tired of fighting.",
        "But can I ask you something?",
        "What if you stay? Just for one more hour.",
        "Stay, because you are not invisible to me.",
        "I see you. I choose you. Always.",
        "If it feels too heavy, just press this."
    ];

    let i = 0;
    function typeLine() {
        if (i < lines.length) {
            document.getElementById(`line${i + 1}`).textContent = lines[i];
            document.getElementById(`line${i + 1}`).classList.add("fade-in");
            i++;
            setTimeout(typeLine, 2000);
        } else {
            document.getElementById("comfortButton").classList.remove("hidden");
            document.getElementById("readStruggles").classList.remove("hidden");
        }
    }

    typeLine();
}

document.getElementById("comfortButton").addEventListener("click", function() {
    document.getElementById("hiddenMessage").classList.remove("hidden");
    document.querySelector(".breathing-container").classList.remove("hidden");
});

// ** Late Night Mode **
const hour = new Date().getHours();
if (hour >= 0 && hour <= 4) {
    document.getElementById("midnightMessage").classList.remove("hidden");
}

// ** Personal Struggles Page **
if (window.location.pathname.includes("letter.html")) {
    const struggles = [
        "You started Ramadan with a fever, exhausted and unwell.",
        "Hasan fell sick too, and no one really cared for either of you.",
        "Your headaches never stopped. You went 15 days with constant pain.",
        "They forced you to fast, but your body rejected it. You threw up.",
        "Even when you were starving at night, no one brought you food.",
        "70 days of missed periods, and they made you take endless tests."
    ];

    struggles.forEach((struggle, index) => {
        setTimeout(() => {
            document.getElementById(`struggle${index + 1}`).textContent = struggle;
        }, index * 2000);
    });
}