let productos = [];

fetch("../products.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargar_productos(productos);
    })

const contenedor_productos = document.querySelector("#row");
const botones_categorias = document.querySelectorAll('.boton-categoria');
const titulo_principal = document.querySelector('#titulo-principal');



/*---Función para inyectar productos en el HTML--- */
/*---Parámetro para que carguen solo los productos de la categoría elegida--- */
function cargar_productos(productos_elegidos) {

    contenedor_productos.innerHTML = "";/*---Vaciar el contenedor_productos antes de realizar el forEach del array, sino c/ vez que cliqueemos los productos se duplican--- */

    productos_elegidos.forEach(producto => {
        const div = document.createElement("div");/*---Creamos un div con la class producto--- */
        div.classList.add("col-12");
        div.classList.add("col-md-6");
        div.classList.add("col-lg-4");
        div.classList.add("py-3");
        div.innerHTML = `
                <div class="card h-100">
                    <img class="card-img-top" style="height:12rem"  src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="card-body">
                        <h5 class="text-center py-3">${producto.titulo}</h5>
                        <div class="text-center">
                            <a href="https://api.whatsapp.com/send?&text=Hola%21%20Quisiera%20saber%20 el precio de torta de %20${producto.titulo}" target="_blank">Consultar</a>
                        </div>
                    </div>
                </div>
            `;

        contenedor_productos.append(div);

    })

}

/*---Llamado a la función--- */
cargar_productos(productos);/*---Parámetro para que al cargar por primera vez la página se cargue el array completo--- */


/*---Evento click para activar el botón seleccionado--- */
botones_categorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botones_categorias.forEach(boton => boton.classList.remove("active"));/*---Le saca la clase active al botón que la tiene por defecto--- */
        e.currentTarget.classList.add("active"); /*---Le agrega la clase active al botón clickeado--- */

        /*---Condicional para que cuando hagamos click en Todos los productos, vuelvan a aparecer--- */
        /*---Entonces el filtro se ejecuta cuando se selecciona una categoría diferente a "Todos los productos"--- */
        if (e.currentTarget.id != "todos") {

            const producto_categoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            titulo_principal.innerText = producto_categoria.categoria.nombre;/*---Para que cambie el Título y aparezca el nombre correspondiente a la categoría seleccionada--- */

            const productos_boton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)/*---Hacemos un filtro en el array para que solo carguen los productos de la categoría clickeada--- */
            cargar_productos(productos_boton);/*---Parámetro para que carguen solo los productos de la categoría seleccionada--- */
        } else {
            titulo_principal.innerText = "Productos";
            cargar_productos(productos);
        }
    })
});
