// Show the popup form
function showPopup(formId) {
    document.getElementById(formId).style.display = 'flex';
}

// Close the popup form
function closePopup(formId) {
    document.getElementById(formId).style.display = 'none';
}

// Redirect to user-specific page
function loginUser() {
    const username = document.querySelector('#login-form input[type="text"]').value;
    const password = document.querySelector('#login-form input[type="password"]').value;

    // Check if the password has at least 8 characters
    if (password.length < 8) {
        alert("Password must be at least 8 characters.");
        return; // Stop the function if password is too short
    }

    if (username) {
        localStorage.setItem('username', username); // Store username
        window.location.href = "dashboard.html"; // Redirect to personalized page
    }
}

// Attach event listeners to the buttons
document.getElementById("login-btn").addEventListener("click", () => showPopup('login-form'));
document.querySelector('#login-form button[type="submit"]').addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission
    loginUser(); // Call login function
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");

  if (sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
    content.style.marginLeft = "0";
  } else {
    sidebar.classList.add("active");
    content.style.marginLeft = "250px";
  }
}