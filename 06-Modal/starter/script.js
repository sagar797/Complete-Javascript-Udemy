'use strict';

//document.querySelector('.modal').classList.remove('hidden');
let modal=document.querySelector('.modal');
console.log(modal);
let showModalBtn=document.querySelectorAll('.show-modal');
console.log(showModalBtn);
let overlay=document.querySelector('.overlay');

for(let i=0;i<showModalBtn.length;i++){
    document.querySelector(showModalBtn[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }));
}

let closeModal=document.querySelector('.close-modal');
if(!closeModal.classList.contains('hidden')){
    closeModal.addEventListener('click',function(){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    });
}