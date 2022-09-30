var ballonSize
$(function() {
    $('.balloon').click(function() {
        colorchanging1()
        if ($('.balloon').width() < 420) {
            $('.balloon').width($('.balloon').width() + 10);
            $('.balloon').height($('.balloon').height() + 10);
        } else {
            $('.balloon').width(200);
            $('.balloon').height(200);
        }
    }); 
    $('.balloon').mouseleave(function() {
        colorchanging2()
        if ($('.balloon').width() > 200) {
            $('.balloon').width($('.balloon').width() - 10);
            $('.balloon').height($('.balloon').height() - 10);
        }
    });
});

function colorchanging1() {
    if ($('.balloon').css("background-color") == "rgb(255, 0, 0)") {
        $('.balloon').css("background-color", "green")
    } else if ($('.balloon').css("background-color") == "rgb(0, 128, 0)") {
        $('.balloon').css("background-color", "blue")
    } else {
        $('.balloon').css("background-color", "red")
    }
}
function colorchanging2() {
    if ($('.balloon').css("background-color") == "rgb(0, 0, 255)") {
        $('.balloon').css("background-color", "green")
    } else if ($('.balloon').css("background-color") == "rgb(0, 128, 0)") {
        $('.balloon').css("background-color", "red")
    } else {
        $('.balloon').css("background-color", "blue")
    }
}