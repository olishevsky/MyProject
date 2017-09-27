<?php

$recepient = "jive-live@mail.ru";

$name = trim($_POST["name"]);
$tell = trim($_POST["tell"]);
$email = trim($_POST["mail"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nТелефон: $tell \nПочта: $email \nСообщение: $text";

$pagetitle = "Письмо к директору";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");