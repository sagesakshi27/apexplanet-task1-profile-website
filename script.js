function showMessage() {
    const message = document.getElementById("message");
    message.innerText = "Thanks for reaching out! I’ll get back to you soon 😊";
}

function toggleTheme() {
    document.body.classList.toggle("dark");
    const btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark")) {
        btn.innerText = "Light Mode";
    } else {
        btn.innerText = "Dark Mode";
    }
}

document.getElementById("themeBtn").addEventListener("click", toggleTheme);
document.getElementById("contactBtn").addEventListener("click", showMessage);
