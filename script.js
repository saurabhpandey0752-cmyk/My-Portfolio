```javascript
// Mobile Menu Functionality

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

// Close menu when a link is clicked

const links = document.querySelectorAll("#nav-links a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});
```