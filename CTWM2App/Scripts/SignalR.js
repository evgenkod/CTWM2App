$.connection.hub.start()
    .done(function () {
        console.log("It's work");
        $.connection.mHub.server.announce("Connected!");
    })
    .fail(function () { alert("ERROR") });

$.connection.mHub.client.announce = function (message) {

    fAppend(message);
};

var fAppend = function (message) {
    $("#welcome-messages").append(message + "<br/>");
    console.log(message);
};

