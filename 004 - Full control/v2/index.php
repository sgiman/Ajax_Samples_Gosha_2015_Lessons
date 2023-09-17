<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Тестовая страница">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Ajax</title>
</head>
<body>

<div class="center">
    <h1>004 - Полный контроль</h1>
    <!-- TEST (jQuery + PHP) -->
    <div class="button" id="test" onclick="$('#test').hide()">TEST JQUERY & PHP</div>
    <?php
        echo "<p class='t_blue'><b>All this working</b></p>";
        echo '<p>PHP VERSION: <b>' . phpversion() . '</b></p>';
        echo '<p>ZEND VERSION: <b>' . zend_version()  . '</b></p>';
    ?>

    <!-- FOR AJAX -->
    <br>
    <p class="button" id="load" style="cursor: pointer">Загрузить данные</p>
    <div id="information"></div>

    <br><br>
    <img id="i_load" src="img/loading.gif" style="display: none" width="200" height="200" alt="Load" title="Loading" />

    <br><br>
    <img id="SGI" class="no-select" src="img/SGI_002.png" alt="SGI" title="SGI-SCS" />

</div>

<script src="js/main.js"></script>
</body>
</html>
