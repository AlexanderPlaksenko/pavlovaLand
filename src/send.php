<?
  if((isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
          $to = 'alexanderplx256@gmail.com,plaxon@mail.ru,7728484@mail.ru,tatuajorders@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
          $subject = 'Москва - новый ленд'; //Загаловок сообщения
          $message = '
                  <html>
                      <head>
                          <title>'.$subject.'</title>
                      </head>
                      <body>
                          <p>'.$subject.'</p>
                          <p>Телефон: '.$_POST['phone'].'</p>
                      </body>
                  </html>'; //Текст нащего сообщения можно использовать HTML теги
          $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
          $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
          mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
  }
?>
