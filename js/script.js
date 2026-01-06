const navbartoggler = document.querySelector(".navbar-toggler");
const navlinks = document.getElementById("nav-links");

let nav = false;

function myfunction(){
if(nav == false){
navlinks.style.display = "block";
nav = true;
}
else{
    navlinks.style.display = "none";
    nav = false;
}
console.log(nav)
}

navbartoggler.addEventListener("click" , myfunction);