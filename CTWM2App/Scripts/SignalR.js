(function () {

    var mHub = $.connection.chat;
    $.connection.hub.start()
        .done(function () {
            $.connection.hub.logging = true;
            writeToPage("It's work");
            mHub.server.announce("Connected!");
            mHub.server.getServerDateTime()
                .done(function (data) { writeToPage(data); })
                .fail(function (e) { writeToPage(e); });
        })
        .fail(function () { writeToPage("ERROR") });

    mHub.client.announce = function (message) {

        writeToPage(message);
    };

    var writeToPage = function (message) {
        $("#welcome-messages").append(message + "<br/>");
        console.log(message);
    };

    $("#clickme").on("click", function () {
        mHub.server.getServerDateTime()
            .done(function (data) { writeToPage(data); })
            .fail(function (e) { writeToPage(e); });
   })
})();

