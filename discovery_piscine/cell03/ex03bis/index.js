$(function() {
    $('.btn').click(function() {
        let newToDo = prompt("Enter new item name");
        if (newToDo) {
            var text = document.createTextNode(newToDo);
            div = $("<div>").html(text);
            $("#ft_list").prepend(div);
            div.addClass('task');
            $('.task').click(function() {
                if (confirm("Do you want to delete this To Do?")) {
                    this.remove();
                    }
            });
        }
        document.cookie += newToDo + ",";
    });
});

var theCookies = document.cookie.split(',');
for (var i = 1 ; i <= theCookies.length; i++) {
    if (theCookies[i-1] != "") {
        var text = document.createTextNode(theCookies[i-1]);
        div = $("<div>").html(text);
        $("#ft_list").prepend(div);
        div.addClass('task');
        $('.task').click(function() {
            if (confirm("Do you want to delete this To Do?")) {
                this.remove();
                let index = theCookies.indexOf(this.textContent);
                theCookies[index] = "";
                document.cookie = theCookies;
                }
            });

    }
}
