<?php
$recepient = "olishevskyalex@yandex.ru";
$info1 = trim($_POST["info-1"]);
$info2 = trim($_POST["info-2"]);
$info3 = trim($_POST["info-3"]);
$info4 = trim($_POST["info-4"]);
$info5 = trim($_POST["info-5"]);
$info6 = trim($_POST["info-6"]);
$info7 = trim($_POST["info-7"]);
$info8 = trim($_POST["info-8"]);
$info9 = trim($_POST["info-9"]);
$info10 = trim($_POST["info-10"]);
$tell = trim($_POST["phone"]);
$message = "Размеры и площадь: $info1\n
Каркас дома под обрешёткой: $info2\n
Фундамент: $info3\n
Утепление: $info4\n
Кровля: $info5\n
Внутреняя отделка потолков: $info6\n
Внутреняя отделка стен: $info7\n
Внешняя облицовка: $info8\n
Двери межкомнатные: $info9\n
Дверь входная: $info10\n
Телефон: $tell";
$pagetitle = "Рассчет стоимости";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>