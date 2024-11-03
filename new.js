// Show the popup form
function showPopup(formId) {
    document.getElementById(formId).style.display = 'flex';
}

// Close the popup form
function closePopup(formId) {
    document.getElementById(formId).style.display = 'none';
}

// Attach event listeners to the buttons
document.getElementById("login-btn").addEventListener("click", () => showPopup('login-form'));