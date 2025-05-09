document.addEventListener("DOMContentLoaded", function () {
    // Anime.js Animations

    // Animating the hero section title (h1)
    anime({
        targets: '.hero h1',
        translateY: [-100, 0],  // Moves up from -100px to 0px
        opacity: [0, 1],        // Fades in from opacity 0 to 1
        duration: 1500,         // Duration of the animation (in ms)
        easing: 'easeOutExpo'   // Easing function for smooth transition
    });

    // Animating the subtitle (h2)
    anime({
        targets: '.hero h2',
        translateY: [50, 0],    // Moves up from 50px to 0px
        opacity: [0, 1],        // Fades in from opacity 0 to 1
        duration: 1500,
        delay: 500,             // Starts after 500ms
        easing: 'easeOutExpo'
    });

    // Animating the "Get in Touch" button
    anime({
        targets: '.cta-button',
        translateY: [50, 0],    // Moves up from 50px to 0px
        opacity: [0, 1],        // Fades in from opacity 0 to 1
        duration: 1500,
        delay: 1000,            // Starts after 1000ms
        easing: 'easeOutExpo'
    });

    // Animating the image (optional)
    anime({
        targets: '.hero-image img',
        scale: [0.5, 1],         // Scales the image from 50% to 100%
        opacity: [0, 1],         // Fades in from opacity 0 to 1
        duration: 1500,
        delay: 1500,             // Starts after 1500ms
        easing: 'easeOutExpo'
    });

document.addEventListener("DOMContentLoaded", function () {
    // Anime.js Animations

    // Animating the "About Me" section header (h1)
    anime({
        targets: '.about h1',
        translateY: [-100, 0],  // Moves up from -100px to 0px
        opacity: [0, 1],        // Fades in from opacity 0 to 1
        duration: 1500,         // Duration of the animation (in ms)
        easing: 'easeOutExpo'   // Easing function for smooth transition
    });

    // Animating the paragraphs (p)
    anime({
        targets: '.about p',
        translateY: [50, 0],    // Moves up from 50px to 0px
        opacity: [0, 1],        // Fades in from opacity 0 to 1
        duration: 1500,
        delay: anime.stagger(300), // Adds a delay between each paragraph animation
        easing: 'easeOutExpo'
    });
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
                        imageUrl: "Photos/logo.png", // ✅ Use your actual logo path
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
                        // Animating the submit button after success message is closed
                        anime({
                            targets: '.cta-button',
                            scale: [1, 1.1], // Slight scale-up effect
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
