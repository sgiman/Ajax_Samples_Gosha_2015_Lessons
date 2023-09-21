/****************************************************************************************
 * 006 - Формат JSON
 * --------------------------------------------------------------------------------------
 * PhpStorm 2023.1, XAMPP, PHP8
 * jQuery 3.7
 * HTML, CSS, JavaScript
 * --------------------------------------------------------------------------------------
 * Изучение технологий Ajax
 * Gosha Dudar (2015)
 * https://www.youtube.com/playlist?list=PL0lO_mIqDDFUgBqIpiaES9vhZLJbucdUa
 *
 ****************************************************************************************
 * Writing by sgiman @ 2023-09
 */

// Выполнится, когда загрузится весь документ - "get" ("ajax")
/*
$(document).ready(function () {
    $("select[name='country']").bind ("change", function () {
        $.get ("countryCheck.php",
            {country: $("select[name='country']").val()},
            function (data) {
                data = JSON.parse(data);
                $("select[name='city']").empty();
                    for (let id in data) {
                        $("select[name='city']").append($("<option value='" + id + "'>" + data[id] + "<\option>"));
                 }
        });
    });
});
*/

$(document).ready(function () {
    $("select[name='country']").bind ("change", function () {
        $("select[name='city']").empty();
        $.get ("countryCheck.php",
            {
                //country: $("select[name='country']").val()},
                country: $("#country").val()},

                function (data) {
                //console.log(data)
                data = JSON.parse(data);
                console.log(data);

                //$("select[name='city']").empty();
                for (let id in data) {
                    console.log("id = " + id)
                    $("select[name='city']").append("<option value='" + id + "'>" + data[id])
                    //$("select[name='city']").append("<option value='" + id + "'>" + data[id] + "<\option>")
                    //$("#city").append("<option value='" + id + "'>" + data[id])
                    console.log("<option value='" + id + "'>" + data[id] + "<\option>")
                }
            });
    });
});
