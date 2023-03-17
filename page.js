let sendButton = document.getElementById("send-button");
const form = document.getElementById("form");

sendButton.addEventListener('click', function sendMail(){
    var params = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value,
    };
    sendButton.value = 'Send...';
    const serviceID = 'default_service';
    const templateID = 'template_gsxe6ng';

   emailjs.sendForm(serviceID, templateID, params)
    .then(() => {
        sendButton.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
        sendButton.value = 'Send Email';
      alert(JSON.stringify(err));
    });

});