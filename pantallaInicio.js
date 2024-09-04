let deferredPrompt;
    
// Detectar si la aplicación puede ser añadida a la pantalla de inicio
window.addEventListener('beforeinstallprompt', (e) => {
    // Evitar que el navegador muestre el aviso de instalación automáticamente
    e.preventDefault();
    // Guardar el evento para usarlo más tarde
    deferredPrompt = e;
    // Mostrar el botón de "Añadir a la pantalla de inicio"
    document.getElementById('addToHomeScreen').style.display = 'inline-block';
});

// Manejar el clic en el botón para añadir a la pantalla de inicio
document.getElementById('addToHomeScreen').addEventListener('click', (e) => {
    // Esconder el botón ya que el usuario ha mostrado interés en instalar
    document.getElementById('addToHomeScreen').style.display = 'none';
    // Mostrar el aviso de instalación
    deferredPrompt.prompt();
    // Esperar a que el usuario responda al aviso
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('Usuario aceptó la instalación');
        } else {
            console.log('Usuario rechazó la instalación');
        }
        deferredPrompt = null;
    });
});