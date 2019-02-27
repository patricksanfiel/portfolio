document.addEventListener("DOMContentLoaded", ()=>{
    const navToggle = document.getElementById("nav-toggle")
    const navUl = document.getElementById("nav-ul")
    const nav = document.getElementById("nav")

    function applyNavClass(){
        var navClass = navUl.getAttribute("class")
        switch(navClass){
            case("show-nav"):
                navToggle.textContent = "Show Nav"
                navUl.className = "transition-out"
                break;
            case("hide-nav"):
                navToggle.textContent = "Hide Nav"
                navUl.className = "transition-in"
                break;
            default:
                break;
        }
    }

    function transitionClass(){
        var navClass = navUl.getAttribute("class")
        switch(navClass){
            case("transition-out"):
                navUl.className = "hide-nav"
                break;
            case("transition-in"):
                navUl.className = "show-nav"
                break;
        }
    }
    
    
    nav.addEventListener("animationend", transitionClass)
    navToggle.addEventListener("click", applyNavClass)
    console.log(navUl)    
}) 