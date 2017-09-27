<?php

$recepient = "jive-live@mail.ru";

$tell = trim($_POST["tell"]);
$message = "Телефон: $tell";

$pagetitle = "Запись с указанием телефона";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");