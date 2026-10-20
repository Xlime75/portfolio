document.addEventListener("DOMContentLoaded", function () {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (typeof anime !== "undefined" && !prefersReducedMotion) {
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
        }

        if (document.querySelector('.contact')) {
            anime({
                targets: '.contact h1, .contact > p',
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
    }

    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const submitButton = form.querySelector('button[type="submit"]');
            const status = document.getElementById("contactStatus");
            const formData = new FormData(form);

            if (!submitButton || !status) {
                throw new Error("Contact form status elements are missing.");
            }

            submitButton.disabled = true;
            submitButton.textContent = "Sending…";
            status.textContent = "Sending your message securely…";
            status.className = "contact-status";

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" }
                });

                if (!response.ok) {
                    throw new Error(`Contact form request failed with status ${response.status}.`);
                }

                form.reset();
                status.textContent = "Thank you for reaching out. Your message has been received, and I’ll respond as soon as I can.";
                status.classList.add("is-success");
            } catch (error) {
                console.error("Unable to submit the contact form.", error);
                status.textContent = "I’m sorry, but your message could not be sent. Please try again in a moment.";
                status.classList.add("is-error");
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = "Send Message";
            }
        });
    }
});
