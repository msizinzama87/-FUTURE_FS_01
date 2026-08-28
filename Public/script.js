// Initialize EmailJS
emailjs.init("wnKZuI9LQ0L5jmlnh");

// Contact form
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "Sending message...";

    emailjs.sendForm(
        "service_a0itpd9",
        "template_pik39yh",
        contactForm
    )
    .then(function (response) {
        console.log("Email sent successfully:", response);

        formMessage.textContent =
            "Thank you! Your message has been sent successfully.";

        contactForm.reset();
    })
    .catch(function (error) {
        console.error("EmailJS Error:", error);

        formMessage.textContent =
            "Sorry, your message could not be sent. Please try again.";
    });
});