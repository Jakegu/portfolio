document.getElementById("emailForm").addEventListener("submit", function(event){
    event.preventDefault();

    const form = event.target;


    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    emailjs.init("YSht3fOkqMy6VAG0c");


    const params = {
        from_email: email,
        from_name: name,
        subject: subject,
        message: message
    };

    if (!subject){
        const result = confirm("Subject is empty. Are you sure you want to send the email?");

        if(result === true){
            sendEmail();
        }else {

        }
    } else {
        sendEmail();
    }


    function sendEmail(){
        console.log("here");
        emailjs.send("service_wusea69", "template_f7xhlsg", params).then(function(response){
            alert("Email was successfully sent");
            form.reset();
        }, function(error){
            alert("Error sending email");
            console.log(error);
        });
    }
});