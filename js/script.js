// script.js

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
        } else {
            header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
        }
    });
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
    console.log("Zomato hero section loaded!");
});
