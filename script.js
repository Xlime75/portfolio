document.addEventListener("DOMContentLoaded", function () {
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
