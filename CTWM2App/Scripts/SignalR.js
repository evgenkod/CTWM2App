$.connection.hub.start()
    .done(function () {
        console.log("It's work");
        $.connection.mHub.server.announce("Connected!");
    })
    .fail(function () { alert("ERROR") });

$.connection.mHub.client.announce = function (message) {

    $("#welcome-messages").append(message +"<br/>");
};

var x = 5;
var myFunktion = function () {
    var x = 10;
};

console.log(x);