/****************************************************************************************
 * 005 - Проверка логина
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

// --- Ajax Request ---
$(document).ready (function () {
    $("#done").bind("click", function (){
        $.ajax({
            url: "check.php",           // server
            type: "POST",               // post-get
            data: ({                    // data block (не обязательно)
                name: $("#name").val()
            }),
            dataType: "html",
            beforeSend: function (){
                $("#information").text("Ожидание данных...")
                $("#i_load").show()
            },
            success: function (data) {
                if (data === "Fail") {
                    //alert("Имя занято")
                    $("#information").text("Имя занято!!!")
                    $("#i_load").hide()
                }
                else {
                    $("#information").text(data)
                    $("#i_load").hide()
                }
            }
        })
    }) // --- $().bind ---
}) //--- document.read ---
