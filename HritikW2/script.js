// --- 1. Global Counter Variable ---
let totalVotes = 0;

function castVote() {
    // 2. Getting inputs from HTML
    const name = document.getElementById('voterName').value;
    const age = parseInt(document.getElementById('voterAge').value); // Convert string to number
    const party = document.getElementById('partySelect').value;

    // Getting the display elements
    const messageDisplay = document.getElementById('statusMessage');
    const statusBox = document.getElementById('statusBox');
    const counterDisplay = document.getElementById('voteCounter');

    // Reset styles initially
    statusBox.style.color = "#333";
    statusBox.style.backgroundColor = "#f9f9f9";
    statusBox.classList.remove("hidden");

    // --- 3. IF-ELSE Logic (Validation) ---
    // Check if name is empty
    if (name === "") {
        messageDisplay.innerText = "❌ Please enter your name!";
        statusBox.style.borderLeftColor = "red";
        return; // Stop function
    }

    // Check availability for voting (Age Check)
    if (isNaN(age) || age < 18) {
        messageDisplay.innerText = `⛔ Sorry ${name}, you are too young to vote. Must be 18+.`;
        statusBox.style.borderLeftColor = "red";
        statusBox.style.backgroundColor = "#ffe6e6"; // Light red bg
        return; // Stop function
    }

    // Check if a party is selected
    if (party === "none") {
        messageDisplay.innerText = "⚠️ Please select a party to vote for!";
        statusBox.style.borderLeftColor = "orange";
        return;
    }

    // --- 4. Switch Case Logic (Party Selection) ---
    // Update the UI based on the party selected
    switch (party) {
        case "techno":
            messageDisplay.innerText = `✅ Vote Accepted! ${name} voted for the Techno Party.`;
            statusBox.style.backgroundColor = "#d4e6f1"; // Light Blue
            statusBox.style.borderLeftColor = "#3498db"; // Blue
            break;

        case "green":
            messageDisplay.innerText = `✅ Vote Accepted! ${name} voted for Green Earth.`;
            statusBox.style.backgroundColor = "#d5f5e3"; // Light Green
            statusBox.style.borderLeftColor = "#2ecc71"; // Green
            break;

        case "royal":
            messageDisplay.innerText = `✅ Vote Accepted! ${name} voted for Royalists.`;
            statusBox.style.backgroundColor = "#e8daef"; // Light Purple
            statusBox.style.borderLeftColor = "#9b59b6"; // Purple
            break;

        case "sun":
            messageDisplay.innerText = `✅ Vote Accepted! ${name} voted for Sun Alliance.`;
            statusBox.style.backgroundColor = "#fcf3cf"; // Light Yellow
            statusBox.style.borderLeftColor = "#f1c40f"; // Yellow
            break;

        default:
            messageDisplay.innerText = "Error: Unknown Party.";
    }

    // --- 5. Counter Logic ---
    // Increment total votes since the vote was successful (we didn't return early)
    totalVotes = totalVotes + 1;
    counterDisplay.innerText = totalVotes;
}