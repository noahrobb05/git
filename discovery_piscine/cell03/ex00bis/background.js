$(function() {
    $("button").click(function() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        $("body").css("background-color", "rgb(" + x + "," + y + "," + z + ")");
    });

});
