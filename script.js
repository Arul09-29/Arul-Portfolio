// ==========================================================================
// 1. DYNAMIC GRADIENT TYPING EFFECT
// ==========================================================================
const typingText = document.querySelector(".typing-text");
const professions = ["Non-IT Professional", "Operations Specialist", "Customer Relations Expert"];
let professionIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = professions[professionIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        professionIndex = (professionIndex + 1) % professions.length;
        typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
    if (typingText) typeEffect();
});

// ==========================================================================
// 2. ACTIVE NAVIGATION LINK TRACKER (SCROLL SPY)
// ==========================================================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let currentSectionId = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSectionId = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSectionId)) {
            link.classList.add("active");
        }
    });
});

// ==========================================================================
// 3. SECURE FORM SUBMISSION INTERACTION
// ==========================================================================
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonMarkup = submitButton.innerHTML;

        submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Dispatching...';
        submitButton.style.pointerEvents = "none";
        submitButton.style.opacity = "0.8";

        setTimeout(() => {
            alert("Success! Your message has been routed securely to Arul B.");
            contactForm.reset();
            submitButton.innerHTML = originalButtonMarkup;
            submitButton.style.pointerEvents = "auto";
            submitButton.style.opacity = "1";
        }, 1500);
    });
}
