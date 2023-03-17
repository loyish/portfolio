function sendMail(){
    var params = {
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value,
    };

const serviceID = "service_pklkq0p";
const templateID = "template_gsxe6ng";

emailjs.send(serviceID, templateID, params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("Your Message Sent Successfully!")
    })
    .catch((err) => console.log(err));
}

