let modal = document.getElementById("modal-login");
let btn = document.getElementById("btnlogin");
let span = document.getElementsByClassName("login__close")[0];

const openModal =() =>{
    console.log("open")
    modal.style.display = "block";
}
function closeModal(){
    modal.style.display = "none";
}
btn.addEventListener('click', openModal);
span.addEventListener('click', closeModal);