const formulario = document.querySelector("form");
const topicos = document.querySelector(".topicos");

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    console.log(topicos.value);
})