//bot token
var telegram_bot_id = "7062046709:AAHl-8C4VYzSsjNUFK_KC3I7kX_sWFNUc286725384470:AAEx9ahz9kVA7BqDzWoBofEvEooLkAtLvf8";
//chat id
var chat_id =
    var u_name, email, message, tel;
var ready = function() {
    guruh = document.getElementById("guruh").value;
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    tel = document.getElementById("tel").value;
    ad = document.getElementById("adres").value;
    message = document.getElementById("message").value;
    yosh = document.getElementById("age").value;
    message = "Guruhi: " + guruh + "\nIsmi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message + "\nTelefon: " + tel + "\nManzili: " + ad + "\nYoshi " + yosh;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("adres").value = "";
    document.getElementById("message").value = "";
    return false;
};