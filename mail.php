<?php
if($_POST) {
  $firstname = $_POST['firstname'];  
  $email = $_POST ['email'];
  $name = $_POST ['nom'];
  $message = $_POST ['message'];
  $headers = "Version MIME: 1.0\r\n";
  $headers .= "Content-type: text / plain; charset=iso-8859-1\r\n";
  $headers .= "From: $name <$email>\r\nRéponse-à: $name <$email>\nX-Mailer:PHP";
  $subject="FHJDKFSJVDEHGYGF";
  $destinataire="contact.wazox.e.sport@gmail.com";
  $body="$message";
  if(mail($destinataire,$subject,$body,$headers)) {
    $response['status'] = 'succès';
    $response['msg'] = 'votre mail est envoyé';
  } else {
    $response['status'] = 'erreur' ;
    $response['msg'] = 'Un problème est survenu' ;
  }
  echo  json_encode($réponse);
}
?>