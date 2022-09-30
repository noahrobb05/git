$(function() {
    $('#Try').click(function() {
        var calc1 = document.getElementById("calculator").value;
        var calc2 = document.getElementById("calculator2").value;
        var select = document.getElementById("options");
        var option = select.options[select.selectedIndex].text;

        if (calc1 <= 0 || calc2 <= 0){
            if (calc2 == 0 && option == '%' || calc2 == 0 && option == '/') {
                alert("It's Over 9000")
                console.log("It's Over 9000")
            } else {
                alert("Error :(")
                console.log("Error :(")
            }
        } 
        else {
            var calculated = eval(calc1 + option + calc2);
            console.log("The answer is " + calculated);
            alert("The answer is " + calculated);
        }
    });
    const doom = setInterval(UseMe, 30000);

    function UseMe() {
        let text = "Please, use me...";
        alert(text);
    }
});
    