<?php
define("CONTACT_FORM", 'swaty0007@gmail.com'); //куда отправлять

        function ValidateEmail($value){
    $regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

    if($value == '') {
        return false;
    } else {
        $string = preg_replace($regex, '', $value);
    }

    return empty($string) ? true : false;
}
        function ValidateNumber($value) {
                $pattern = "#^\+[0-9]{1,2}?[0-9]{3}?[0-9]+[0-9]+[0-9]+$#";
                $pattern2 = "#^[0-9]{1,2}?[0-9]{3}?[0-9]+[0-9]+[0-9]+$#";

                if($value == '') {
                    return false;
                }else {
                    if(preg_match($pattern, $value, $out) or preg_match($pattern2, $value, $out)){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            };
            $post = (!empty($_POST)) ? true : false; //если массивы данных не пустой go if
            if($post){
                $sitemail = 'info@infinitum.tech';
                $name = stripslashes($_POST['name']);
                $name = strip_tags($name);
                $name = htmlspecialchars($name);
                $number = stripslashes($_POST['number']);
                $number = strip_tags($number);
                $number = htmlspecialchars($number);
                $msg = stripslashes($_POST['message']);
                $msg = strip_tags($msg);
                $msg = htmlspecialchars($msg);
                $email = stripslashes($_POST['email']);
                $email = strip_tags($email);
                $email = htmlspecialchars($email);
                $subject = 'Заявка';
                $error = '';
                $error1 = '';
                $message = '
			<html>
					<head>
							<title>Заявка</title>
					</head>
					<body>
							<p>Имя: '.$name.'</p>
							<p>Email: '.$email.'</p>
							<p>Номер : '.$number.'</p>
							<p>Сообщение : '.$msg.'</p>
					</body>
			</html>';

    if (!ValidateEmail($email)){
        $error1 = '11';
    }
                if (!ValidateNumber($number)){
                    $error = '1';
                }
                if(!$error && !$error1){
                    $mail = mail(CONTACT_FORM, $subject, $message,
                        "From:".$name." <".$sitemail.">\r\n"
                        ."Reply-To: ".$email."\r\n"
                        ."Content-type: text/html; charset=utf-8 \r\n"
                        ."X-Mailer: PHP/" . phpversion());

                    if($mail){
                        echo '0';
                    }
                }else{
                    echo $error;
                    echo $error1;
                }

            }
			?>
