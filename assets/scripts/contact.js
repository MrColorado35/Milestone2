// ---The idea for the contact form comes from our project "Rosie" on Front-End interactive development part of the course at Code Institute

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
        })
        .then(
            function redirect(){
             location.replace("index.html")
            });

    return false;  // To block from loading a new page
}

