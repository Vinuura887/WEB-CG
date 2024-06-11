function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_ygfnegn", "template_oyis65a", params)
        .then(function (res) {
            alert("Enviado com sucesso! " + res.status);
        }, function (error) {
            alert("Erro ao enviar o e-mail: " + JSON.stringify(error));
        });

    // Retorna false para evitar o envio do formulário padrão
    return false;
}
