document.addEventListener("DOMContentLoaded", function () {
    // Anime.js Animations (Hero Section)
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

    // Anime.js Animations (About Section)
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

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Contact form handler with styled SweetAlert2
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
});
