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


// --- Email Copy Functionality ---
    const emailToCopy = "bernaz10.1997golden@gmail.com"; // <--- PUT YOUR EMAIL HERE
    const copyBtn = document.getElementById('copyEmailBtn');
    const feedback = document.getElementById('copyFeedback');
    const btnTextSpan = copyBtn.querySelector('span'); // Target the text span specifically

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(emailToCopy).then(() => {
                // 1. Show the "Copied!" tooltip
                feedback.classList.add('show');
                
                // 2. Change button style slightly to indicate success
                btnTextSpan.textContent = "Email Copied";
                copyBtn.style.borderColor = "#22d3ee"; // Brighter cyan
                
                // 3. Reset after 2 seconds
                setTimeout(() => {
                    feedback.classList.remove('show');
                    btnTextSpan.textContent = "Copy Email";
                    copyBtn.style.borderColor = ""; // Reset border
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }