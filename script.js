function toggleMode() {
    document.body.classList.toggle("dark-mode");

    const modeToggleButton = document.getElementById("mode-toggle");
    if (document.body.classList.contains("dark-mode")) {
        modeToggleButton.textContent = "Switch to Light Mode";
    } else {
        modeToggleButton.textContent = "Switch to Dark Mode";
    }
}
