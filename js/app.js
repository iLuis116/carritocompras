//Variables para referenciar objetos   
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const BTNvaciarCarrito = document.querySelector("#vaciar-carrito");

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
   
/*    console.log("Curso a agregar")
    console.log(curso.id)
    console.log("listado de cursos")
    listadoCarrito.forEach(curso => console.log(curso.id));
    */
   if(listadoCarrito.some(cursoInCarrito => cursoInCarrito.id === curso.id)){
   let carrito = listadoCarrito.map(cursoInCarrito =>{
    if(cursoInCarrito.id === curso.id){
        cursoInCarrito.cantidad++;
        return cursoInCarrito;
    } else {
        return cursoInCarrito;
    }
   })
        listadoCarrito = [...carrito];
    } else {
        listadoCarrito = [...listadoCarrito, curso];
    }
        //listadoCarrito = [...listadoCarrito, curso]
        
    console.log(listadoCarrito);
    generarHTML();
}

const generarHTML = () =>{
    vaciarCarrito();
    listadoCarrito.forEach(curso => {
        const row = document.createElement('tr');
        const cursoHTML = `
        <td>
           <img src="${curso.imagen}"width=100>
        </td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        `;
        row.innerHTML = cursoHTML;
        contenedorCarrito.appendChild(row);
    });
}

const vaciarCarrito = () => {
    contenedorCarrito.innerHTML = '';
}

const cargarEventListiner = () => {
    //funciones
    listaCursos.addEventListener("click", agregarCurso);
}
cargarEventListiner();