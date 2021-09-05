function sendForm(contactForm) {
    emailjs.send('Gmail', 'Contact', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.comments.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}