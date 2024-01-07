let showmenu = document.getElementById("menu")



showmenu.addEventListener("click", function(){
console.log(showmenu);

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }

})