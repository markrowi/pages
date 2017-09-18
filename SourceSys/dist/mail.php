<?php $name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$comp = $_POST['comp'];
$message = $_POST['message'];
$formcontent="From: $name \n Phone Nunber: $phone \n Company Name: $comp \n  Message: $message";
$recipient = "aarons1ngs@yahoo.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header( 'Location: https://sourceinfosystems.com/' ) ;
?>