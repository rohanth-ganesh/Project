document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        // You can replace this with an actual API call to send the form data
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contact-form').reset(); // Clear the form
    } else {
        alert('Please fill in all the fields.');
    }
});
