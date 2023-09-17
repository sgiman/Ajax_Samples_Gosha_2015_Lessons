<?php
    sleep(2);
    //echo "Данные: строка - ".$_POST['name'].", цифра - ".$_POST['number'];
    if (trim (strtolower ($_POST['name'])) == 'admin')
        echo 'Fail';
    else
        echo $_POST['name'];

