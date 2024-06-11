/* function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_ygfnegn", "template_oyis65a", params).then(function (res) {
        alert("Enviado com succeso! " + res.status);
    })
} */

var params = document.getElementById("input#button")
params.addEventListener ("click", SendMail)
function SendMail() {
    alert("Enviado com succeso!")
}