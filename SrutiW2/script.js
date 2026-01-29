// --- Variables & State ---
let clickCount = 0;
let userName = "";

// Element References
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const checkBtn = document.getElementById("checkButton");
const resultBox = document.getElementById("resultBox");
const resultText = document.getElementById("resultText");
const counterDisplay = document.getElementById("counter");

// --- Event Listener: Button Click ---
checkBtn.addEventListener("click", function () {
    // 1. Increment Counter
    clickCount++;
    counterDisplay.textContent = clickCount;

    // 2. Get Input Values
    userName = nameInput.value.trim();
    let age = Number(ageInput.value);

    // 3. Validation
    if (userName === "") {
        displayMessage("⚠️ Please enter your name first!");
        return;
    }

    // 4. Logic Process
    let ageMessage = "";

    // If/Else for Basic Age Categories
    if (age <= 0) {
        displayMessage("❌ Please enter a valid age greater than 0.");
        return;
    } else if (age < 18) {
        ageMessage = "You are a <strong>minor</strong>.";
    } else {
        ageMessage = "You are an <strong>adult</strong>.";
    }

    // Switch Case for Specific Voting Rights
    let rightsMessage = "";
    // Note: 'switch(true)' pattern lets us match boolean conditions against the cases
    switch (true) {
        case (age >= 60):
            rightsMessage = "You are a senior citizen and eligible to vote.";
            break;
        case (age >= 18):
            rightsMessage = "You are eligible to vote.";
            break;
        default:
            rightsMessage = "You are <strong>not</strong> eligible to vote yet.";
    }

    // 5. Final Output Construction
    const finalMessage = `Hello <strong>${userName}</strong>! <br> ${ageMessage} <br> ${rightsMessage}`;

    displayMessage(finalMessage);
});

// --- Event Listener: Keyboard Access ---
nameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // Just a fun little interaction key
        alert(`Hi ${nameInput.value}! Press the 'Analyze Details' button to continue.`);
    }
});

// --- Helper Function ---
function displayMessage(htmlContent) {
    resultText.innerHTML = htmlContent;
    resultBox.classList.add("show");
}
