<?php

$recepient = "jive-live@mail.ru";

$name = trim($_POST["name"]);
$email = trim($_POST["mail"]);
$tell = trim($_POST["tell"]);
$acc = trim($_POST["acc"]);
$text = trim($_POST["text"]);
$message = "Имя: $name \nПочта: $email \nТелефон: $tell \Профиль: $acc \nСообщение: $text";

$pagetitle = "Отзыв с сайта";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");