// Preloader
let preload = document.getElementById('preload')

function myFunction(){
    preload.style.display = 'none'
}

// Botón whatsapp

window.addEventListener('load', function () {
    // Obtiene el contenedor del botón de WhatsApp
    let whatsappContainer = document.getElementById('button-w');

    // Muestra el botón de whatsapp una vez que la página haya cargado completamente
    whatsappContainer.style.display = 'block';
    
});
