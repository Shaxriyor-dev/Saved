const input = document.querySelector('.input');
const btn = document.getElementById('btn');
const spam = document.querySelector('.spam');


btn.addEventListener('click' , ()=>{
     spam.textContent = input.value;  
});