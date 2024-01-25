const open =document.querySelector(".open");
const close =document.querySelector('.close');
const nav = document.querySelector(".manu");

open.addEventListener('click',()=>{
    nav.style.display = 'block';
})
close.addEventListener('click',()=>{
    nav.style.display = 'none';
})