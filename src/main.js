const navbar = document.getElementById('navbar');
let px;
window.onscroll = nav;
function nav(){
    px = Math.floor(window.pageYOffset);
    if(px > 500){
        navbar.classList.add('p-block');
    }else if(px < 500){
        navbar.classList.remove('p-block');
    }  
}
