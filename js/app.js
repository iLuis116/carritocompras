//Variables para referenciar objetos   
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarrito = document.querySelector("#vaciar-carrito");

let listadoCarrito = [];

const agregarCurso = (e) => {
    e.preventDefault();
    if( e.target.classList.contains("agregar-carrito")){
        const curso = e.target.parentElement.parentElement;
        const infoCurso = {
            imagen: curso.querySelector('img').src,
            nombre: curso.querySelector('h4').textContent,
            precio: curso.querySelector('p.precio').textContent,
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),
            cantidad: 1
        }
        console.log(infoCurso);
        agregarCarrito(infoCurso);
    }
}

const agregarCarrito = curso => {
    listadoCarrito = [...listadoCarrito, curso]
    console.log(listadoCarrito);
}
const cargarEventListiner = () => {
    //funciones
    listaCursos.addEventListener("click", agregarCurso);
}
cargarEventListiner();