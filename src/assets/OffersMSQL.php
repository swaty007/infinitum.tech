<?php
//header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");


$data = file_get_contents("php://input");


    $conn = new mysqli("swaty.mysql.tools", "swaty_infinitum", "cptxkhzt", "swaty_infinitum");
    $conn->set_charset('utf8');
    $result = $conn->query("SELECT `id`, `title`, `img`, `text`, `desc` FROM `swaty_infinitum`.`offers` ");

    $conn->close();

    echo json_encode($result->fetch_all(MYSQLI_ASSOC) );

?>
