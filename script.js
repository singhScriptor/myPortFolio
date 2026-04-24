var typed = new Typed(".text", {
    strings: ["Programmer . . .", "Back-end developer . . .","Aspiring Full-stack developer..."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})


//for footer
var typedFooter = new Typed(".footer-typed", {
    strings: [
        "<span class='f-white'>&copy; 2026 Dhiraj Kumar |</span> Open for Collaboration . . .",
        "<span class='f-white'>&copy; 2026 Dhiraj Kumar |</span> Available for Opportunity . . .",
        "<span class='f-white'>&copy; 2026 Dhiraj Kumar |</span> Let's build something together!"
    ],
    typeSpeed: 70,
    backSpeed: 50,
    smartBackspace: true, 
    backDelay: 1500,
    loop: true,
    contentType: 'html' // DO NOT FORGET THIS: It makes the colors work!
});

async function handleContactSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create an object to hold the data
    const data = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    try {
        // Send a POST request to the mock API
        const response = await axios.post('http://localhost:3000/contact', data);

        // Log the response to the console
        console.log("Response from server:", response.data);

        // Optionally, display a success message
        alert("Thank you for your message, " + name + "! We will get back to you soon.");

        // Clear the form fields
        document.getElementById('contactForm').reset();
    } catch (error) {
        console.error("There was an error sending the data:", error);
        alert("There was an error sending your message. Please try again later.");
    }
}

