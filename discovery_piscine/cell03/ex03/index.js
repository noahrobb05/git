function addToDo() {
    let newToDo = prompt("Enter new item name");
    if (newToDo) {
        var tag = document.createElement("div");
        var text = document.createTextNode(newToDo);
        tag.appendChild(text);
        var element = document.getElementById("ft_list");
        element.prepend(tag);
        tag.classList.add("p")
        tag.onclick = function() {if (confirm("Do you want to delete this To Do?")) {
                                        this.remove()
                                        }
                                    };
    }
    document.cookie += newToDo + ",";
}

var theCookies = document.cookie.split(',');
for (var i = 1 ; i <= theCookies.length; i++) {
    if (theCookies[i-1] != "") {
        var tag = document.createElement("div");
        var text = document.createTextNode(theCookies[i-1]);
        tag.appendChild(text);
        var element = document.getElementById("ft_list");
        element.prepend(tag);
        tag.classList.add("p")
        tag.onclick = function() {if (confirm("Do you really want to delete this?")) {
            this.remove();
            let index = theCookies.indexOf(this.textContent);
            theCookies[index] = "";
            document.cookie = theCookies;
        }};
    }
}
