const numeros = document.querySelectorAll('#numero');
const pantalla = document.querySelector('.pantalla');

numeros.forEach(num => {
    num.addEventListener('click', (e) =>{
        pantalla.textContent += e.target.textContent;        
    });
});
