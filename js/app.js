//Variables para referenciar objetos   
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");


const agregarCurso = (e) => {
    e.preventDefault();
    if( e.target.classList.contains("agregar-carrito")){
        console.log("Presionaste el botón.");
    }
}


const cargarEventListiner = () => {
    //funciones
    listaCursos.addEventListener("click", agregarCurso);
}
cargarEventListiner();