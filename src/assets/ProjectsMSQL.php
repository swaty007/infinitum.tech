<?php
//header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");


$data = file_get_contents("php://input");
$post = (!empty($data)) ? true : false; //если массивы данных не пустой go if
//$post = (!empty($_POST)) ? true : false; //если массивы данных не пустой go if
if($post){
    $id = (int)$data;

    $conn = new mysqli("swaty.mysql.tools", "swaty_infinitum", "cptxkhzt", "swaty_infinitum");
    $conn->set_charset('utf8');
    $result = $conn->query("SELECT  `parent_id`, `do_works` FROM `swaty_infinitum`.`site_info` WHERE  `parent_id`=$id");
    $conn->close();

    echo json_encode($result->fetch_object() );
}

if(!$post){
    $conn = new mysqli("swaty.mysql.tools", "swaty_infinitum", "cptxkhzt", "swaty_infinitum");
    $conn->set_charset('utf8');
    $result = $conn->query("SELECT `id`, `name`, `link`, `img`, `design` , `title` FROM `swaty_infinitum`.`projects` ");

    $conn->close();

    echo json_encode($result->fetch_all(MYSQLI_ASSOC) );
}
?>
