const input = document.querySelector('.input');
const btn = document.getElementById('btn');
const spam = document.querySelector('.spam');
const btn4 = document.querySelector('.btn-4');


btn.addEventListener('click' , (event)=>{
     const date = input.value.trim();
    if(date){
     const listen = document.createElement('ul');
     listen.textContent = date;
     spam.appendChild(listen);


     input.value = ' ';
    }else{
       alert('Iltimos malumot kiriting!!')
    }
 });

 