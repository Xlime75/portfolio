document.addEventListener("DOMContentLoaded", function () {
    // === Hero Section Animation ===
    anime({
        targets: '.hero h1',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero h2',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: 500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.cta-button',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: 1000,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.hero-image img',
        scale: [0.5, 1],
        opacity: [0, 1],
        duration: 1500,
        delay: 1500,
        easing: 'easeOutExpo'
    });

    // === About Section Animation ===
    anime({
        targets: '.about h1',
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.about p',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(300),
        easing: 'easeOutExpo'
    });

    // === Tech Stack Page Animation ===
    if (document.querySelector('.techstack')) {
        anime({
            targets: '.techstack h1, .techstack h2, .techstack h3',
            translateY: [-40, 0],
            opacity: [0, 1],
            duration: 1200,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.skill-item',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(100, { start: 600 }),
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.experience p, .experience ul, .experience li',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(150, { start: 800 }),
            easing: 'easeOutExpo'
        });
    }

    // === Contact Page Animation ===
    if (document.querySelector('.contact')) {
        anime({
            targets: '.contact h1, .contact p:first-of-type',
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1200,
            delay: anime.stagger(200),
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.contact-form input, .contact-form textarea, .contact-form button',
            translateX: [-30, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(200, { start: 500 }),
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.contact-info p, .contact-info a',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 1000,
            easing: 'easeOutExpo'
        });
    }

    // === Mobile Navigation Toggle ===
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // === Contact Form Submission with SweetAlert2 ===
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const formData = new FormData(form);

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            })
            .then(response => {
                if (response.ok) {
                    Swal.fire({
                        title: "🎉 Thank you!",
                        text: "Your message has been sent successfully.",
                        imageUrl: "Photos/logo.png",
                        imageWidth: 80,
                        imageHeight: 80,
                        imageAlt: "Asher Logo",
                        icon: "success",
                        confirmButtonText: "Awesome!",
                        background: "#f0f8ff",
                        color: "#333",
                        confirmButtonColor: "#007bff",
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    }).then(() => {
                        anime({
                            targets: '.cta-button',
                            scale: [1, 1.1],
                            duration: 800,
                            easing: 'easeOutExpo',
                            loop: true,
                            direction: 'alternate'
                        });
                    });

                    form.reset();
                } else {
                    throw new Error("Form submission failed");
                }
            })
            .catch(error => {
                Swal.fire({
                    title: "⚠️ Oops!",
                    text: "Something went wrong. Please try again later.",
                    icon: "error",
                    confirmButtonText: "Retry",
                    background: "#fff0f0",
                    color: "#333",
                    confirmButtonColor: "#dc3545",
                    showClass: {
                        popup: 'animate__animated animate__shakeX'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOut'
                    }
                });
            });
        });
    }
    // === Certifications Section ===
const certificates = document.querySelectorAll(".certificate");
const nextBtn = document.getElementById("nextBtn");

if (certificates.length > 0 && nextBtn) {
    let currentCert = 0;
    let autoSlide;

    function showCertificate(index) {
        certificates.forEach((cert, i) => {
            cert.classList.remove("active", "enlarged");
            if (i === index) {
                cert.classList.add("active");
            }
        });
    }

    // Next button
    nextBtn.addEventListener("click", () => {
        currentCert = (currentCert + 1) % certificates.length;
        showCertificate(currentCert);
        resetAutoSlide();
    });

    // Click to enlarge certificate
    certificates.forEach(cert => {
        cert.addEventListener("click", () => {
            if (cert.classList.contains("enlarged")) {
                cert.classList.remove("enlarged");
            } else {
                certificates.forEach(c => c.classList.remove("enlarged"));
                cert.classList.add("enlarged");
            }
        });
    });

    // Auto slide every 5 seconds
    function startAutoSlide() {
        autoSlide = setInterval(() => {
            currentCert = (currentCert + 1) % certificates.length;
            showCertificate(currentCert);
        }, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    // Initialize
    showCertificate(currentCert);
    startAutoSlide();
}
    
});
