<?php
if($_GET["country"] == 1)
    echo json_encode (["1" => "Вашингтон", "2" => "Сиэтл", "3" => "New-York", "4" => "Boston", "5" => "Atlanta"]);
elseif ($_GET["country"] == 2)
    echo json_encode (["1" => "Париж", "2" => "Марсель", "3" => "Бордо", "4" => "Тулуза", "5" => "Ницца"]);
