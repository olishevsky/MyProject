<!-- http://купи-лендинг.рф -->

<!DOCTYPE html>
<html>
    <head>
        <title>Спасибо</title>
        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            </head>
            <body>
	<div class="success">
                            <p>Спасибо за заявку! </p>
                            <span>Наш менеджер свяжется с Вами!</span>
                        </div>
            </body>

</html>

<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="evgeniy.platinum@yandex.ru";  // e-mail админа 
 
$header="From: \"Заявка с сайта\" <admin@pppoe.ml>\n"; // от кого
$header.="Content-type: text/html; charset=\"utf-8\""; // кодировка
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="/";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
  
$phone=$_POST['phone']; 
 
$message=$_POST['mess']; 
 $email=$_POST['email']; 
 $gorod=$_POST['gorod']; 

$url=$_SERVER['REQUEST_URI'];
 $ip = $_SERVER['HTTP_REFERER'];
$msg=" 
<p>Имя: $name </p>
<p>Телефон: $phone </p>
<p>Email: $email </p>



<p>URL: $ip$url</p>
"; 
 
 // Отправляем письмо админу  
 
mail("$adminemail", "$to $date $time Сообщение 
от $name", "$msg", "$header"); 
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Сообщение от $name"); 
 
fwrite($f,"\n $msg "); 
 
fwrite($f,"\n ---------------"); 
 
fclose($f); 
 
 
// Выводим сообщение пользователю 
 
 
 

exit; 
 
?>
<!-- http://купи-лендинг.рф -->