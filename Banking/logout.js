document.getElementById("logout").addEventListener("click", function() {
    if (confirm("Are you sure you want to log out?")) {
        // Redirect to login page
        window.location.href = "online-banking.html";
    }
});
