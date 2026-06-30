// Añadir un botón flotante para cambiar preferencias después de aceptar
const floatingBtn = document.createElement('button');
floatingBtn.innerHTML = `
    <img
        src="assets/premium_photo-1722696650718-65e6a7692402.avif"
        alt="Configuración"
        style="width:30px;height:30px;border-radius:50%;">
`;
floatingBtn.style.cssText = `
    position: fixed;
    bottom: 25px;
    left: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    border: none;
    padding: 0;
    color: white;
    cursor: pointer;
    z-index: 1000;
    display: none;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: transform 0.2s ease;
`;

floatingBtn.onmouseenter = () => {
    floatingBtn.style.transform = 'scale(1.1)';
};
floatingBtn.onmouseleave = () => {
    floatingBtn.style.transform = 'scale(1)';
};

floatingBtn.onclick = () => {
    if (window.cookieManager) {
        window.cookieManager.showModal();
    }
};
document.body.appendChild(floatingBtn);

// Mostrar el botón flotante después de aceptar cookies
function showFloatingButton() {
    floatingBtn.style.display = 'flex';
}

// Observar cuando se aceptan cookies
document.addEventListener('DOMContentLoaded', () => {
    // Comprobar si ya hay consentimiento
    const consent = document.cookie.split('; ').find(row => row.startsWith('cookie_consent='));
    if (consent) {
        showFloatingButton();
    }
});

