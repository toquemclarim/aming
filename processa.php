<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Receber os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $metodo = $_POST["metodo"];
    $dias = $_POST["dias"];
    $horario = $_POST["horario"];
    $whatsapp = $_POST["whatsapp"];
    $mensagem = $_POST["mensagem"];

    // Configurações do e-mail
    $para = "profamandarm@gmail.com";
    $assunto = "Nova inscrição de aula";
    
    // Corpo do e-mail com os novos campos
    $corpo = "Nome: $nome\nE-mail: $email\nMétodo: $metodo\nDias: $dias\nHorário: $horario\nWhatsApp: $whatsapp\nMensagem:\n$mensagem";
    
    // Cabeçalho
    $cabecalho = "From: $email";

    // Enviar o e-mail
    if (mail($para, $assunto, $corpo, $cabecalho)) {
        echo "Sucesso";
    } else {
        echo "Erro";
    }
}
?>

