document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});



const form = document.getElementById("contactForm");
const result = document.getElementById("formResult");

if (form) {
form.addEventListener("submit", async function (e) {
e.preventDefault();


    const hCaptcha =
        form.querySelector('[name="h-captcha-response"]')?.value;

    if (!hCaptcha) {
        result.innerHTML = "Please complete the captcha.";
        return;
    }

    result.innerHTML = "Sending...";

    const formData = new FormData(form);

    try {
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (data.success) {
            result.innerHTML = "Message sent successfully!";
            form.reset();

            if (window.hcaptcha) {
                hcaptcha.reset();
            }
        } else {
            result.innerHTML =
                data.message || "Failed to send message.";
        }
    } catch (error) {
        console.error(error);
        result.innerHTML = "Network error.";
    }
});

}
