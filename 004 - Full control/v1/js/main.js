/****************************************************************************************
 * 004 - Полный контроль
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

// --- Выполнить "до" (обычно загрузочный GIF) ---
function funcBefore () {
    $("#information").text("Ожидание данных...")
    $("#i_load").show()
}

// --- Выполнить "после" ---
function funcSuccess (data) {
    $("#information").text(data)
    $("#i_load").hide()
}

// --- Ajax Request ---
$(document).ready (function () {
    $("#load").bind("click", function (){
        let admin = "Admin"
        $.ajax({
            url: "content.php",     // server
            type: "POST",           // post/get
            data: ({                // data block (не обязательно)
                name: admin,
                number: 5
            }),
            dataType: "html",       // text/html
            beforeSend: funcBefore, // выполнить до завершения запроса к серверу (не обязательно)
            success: funcSuccess    // выполнить после ответа сервера
        })
    }) // --- $().bind ---
}) //--- document.read ---


