document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("inscricaoForm");
    const mensagemSucesso = document.getElementById("mensagemSucesso");

    // Envio do formulário via AJAX
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o recarregamento da página

        let formData = new FormData(form);

        fetch("processa.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            mensagemSucesso.style.display = "block";
            mensagemSucesso.textContent = "Inscrição enviada com sucesso!";
            
            // Esconder a mensagem após 5 segundos
            setTimeout(() => {
                mensagemSucesso.style.display = "none";
            }, 5000);

            // Resetar o formulário após o envio
            form.reset();
        })
        .catch(error => {
            console.error("Erro ao enviar o formulário:", error);
        });
    });

    // Função para formatar o campo de WhatsApp automaticamente
    window.formatarWhatsapp = function (input) {
        let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

        if (valor.length > 2) {
            valor = '(' + valor.slice(0, 2) + ') ' + valor.slice(2, 7); // Adiciona parênteses e espaço após o DDD
        }
        if (valor.length > 7) {
            valor = valor.slice(0, 9) + '-' + valor.slice(9, 13); // Adiciona o traço após os 9 primeiros números
        }

        input.value = valor;
    };
});


