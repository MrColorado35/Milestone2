
function sendMail(contactForm) {
    emailjs.send("gmail","aikido", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.contact.value
    })
    .then(
        function(response) {
            alert("Success! :)", response);
        },
        function(error) {
            alert("Error! sending failed!", error);
        });
    return false;  // To block from loading a new page
}

