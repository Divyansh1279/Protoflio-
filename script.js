
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close mobile navigation
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    menuBtn.textContent = navLinks.classList.contains("active")
        ? "✕"
        : "☰";
});

// Close navigation after clicking a link
document.querySelectorAll("#navLinks a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});
