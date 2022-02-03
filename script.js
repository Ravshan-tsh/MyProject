    const navbar = document.getElementById("navbar");
    const open = document.getElementById('menu-open');
    const close = document.getElementById('menu-close');
    const menu_ul = document.getElementById('menu-ul') ;   

function menu_open()
{
    navbar.classList.add("icon-click");
    open.classList.add("d-none");
    close.classList.add("d-block");
    menu_ul.classList.add("d-flex")
}

function menu_close()
{
    navbar.classList.remove("icon-click");
    open.classList.remove("d-none");
    close.classList.remove("d-block");
}

// $(document).ready(function(){
//     var top = $(window).scrollTop();
//     if(top = 0){
//         navbar.classList.remove("navbar-scroll");
//     }
//     else{
//         navbar.classList.add("navbar-scroll");
//     }
// })

// window.addEventListener("scroll", function(){
//     navbar.classList.toggle("navbar-scroll", window.scrollY > 500);
//     menu_scroll.classList.add("menu-scroll", window.scrollY > 500);
// })