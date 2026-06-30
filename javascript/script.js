//  EL BOTÓN DONACION DE SECTION HERO

 
 
 
 // Obtener el botón
        const scrollBtn = document.getElementById('scrollTopBtn');

        // Función para verificar la posición del scroll y mostrar/ocultar la flecha
        function toggleScrollButton() {
            if (!scrollBtn) return;
            // Si el scroll vertical es mayor a 300px se muestra la flecha.
            if (window.scrollY > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            };
        };

        // Escuchar evento scroll
        window.addEventListener('scroll', toggleScrollButton);

        // Escuchar evento load para verificar estado inicial (por si la página ya tiene scroll al cargar)
        window.addEventListener('load', toggleScrollButton);

        // Comportamiento de clic: desplazamiento suave hacia arriba
        if (scrollBtn) {
            scrollBtn.addEventListener('click', function (e) {
                e.preventDefault();  // Evita el salto abrupto con #
                // Smooth scroll hacia el principio del documento
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        };


// ======================================

        
const detalles = {
    detalle1: {
        titulo: "Proyecto 1:Reforestación de Bambú",
        imagen: "./assets1/minphoto_carousel1jpg.webp",
        subtitle: "  Restaurar 50 hectáres de bosque de Bambú en el Himalaya oriental",
        textList1Title: "Acciones: ",
        textList1: "Plantación de 10,000 brotes de Bambú nativo",
        textList2Title: "Beneficio: ",
        textList2: "Asegura la fuente de alimentación de Panda Rojo",
        textList3Title: "Impacto: ",
        textList3: "Beneficia a más de 30 especies de fauna local",
        meta: "Meta 2026: 30% de la superficie reforestada"
    },
    detalle2: {
        titulo: "Proecto 2: Monitoreo con GPC",
        imagen: "./assets1/minphoto_carousel2.webp",
        subtitle: "Monitoreo con gps",
        textList1Title: "Acciones: ",
        textList1: "Seguimiento satelital y cámaras trampa para estudiar los patrones de movimiento y comportamiento del Panda Rojo",
        textList2Title: "Beneficio: ",
        textList2: "tra tra tra tra   ..",
        textList3Title: "Impacto: ",
        textList3: "tra tra tra tra...",
        meta: "Meta 2026: 30% de la superficie reforestada"

    },
    detalle3: {
        titulo: "Proyecto 3. Educación Ambiental",
        imagen: "./assets1/minphoto_carousel4.webp",
        subtitle: "Monitoreo con gps",
        textList1Title: "Acciones: ",
        textList1: "Seguimiento satelital y cámaras trampa para estudiar los patrones de movimiento y comportamiento del Panda Rojo",
        textList2Title: "Beneficio: ",
        textList2: "tra tra tra tra   ..",
        textList3Title: "Impacto: ",
        textList3: "tra tra tra tra...",
        meta: "Meta 2026: 30% de la superficie reforestada"
    }
};
// Seleccionar todos los botones con la clase 'view-details'
const botones = document.querySelectorAll('.view-details');

// Transforma el contenedor estático a un objeto interactivo
const modal = new bootstrap.Modal(document.getElementById('descriptionModal'), {
    backdrop: 'static',
    keyboard: false
});

const modalTitle = document.getElementById('modalProductLabel');
const descriptionContainer = document.getElementById('descriptionProduct');

// const modalImagen = document.getElementById('imagenProduct');
// const modalPrecio = document.getElementById('precioProduct');

document.addEventListener ("DOMContentLoaded", function() {
    // FUNCIÓN paramostrar la descripción en el modal
    function mostrarDescripcion(productId) {
        const producto = detalles[productId];
        if (producto) {
            // Actualizar título del modal
            modalTitle.textContent = producto.titulo;

            // Actualizar contenido de la descripción con formato HTML
            descriptionContainer.innerHTML = `
            <div class="mb-3">
                <img
                src="${producto.imagen}"
                alt="${producto.titulo}"
                class="img-fluid rounded mb-3>
                <span class="badge bg-info text-dark mb-2 py-1"><strong>Objetivo:</strong>${producto.subtitle}</span>
                <hr>
                <ul>
                          <li class="textList1"><strong class="textList1Title">${producto.textList1Title}</strong>${producto.textList1}</li>
                          <li class="textList2"><strong class="textList2Title">${producto.textList2Title}</strong>${producto.textList2}</li>
                          <li class="textList1"><strong class="textList1Title">${producto.textList3Title}</strong>${producto.textList3}</li>
                        </ul>
                 <h5 class="text-success p-3 bg-light">${producto.meta}</h5>
            </div>
            `;
            // MOSTRAR EL MODAL
            modal.show();
        } else {
            descriptionContainer.innerHTML = `<p class="text-danger">Detalle no disponible temporalmente.</p>`;
            modal.show();
        };
    };
    // Agregar evento click a cada bóton
    botones.forEach(boton => {
        boton.addEventListener('click', function(e) {
            e.preventDefault();
            const productId = this.getAttribute('data-product');
            mostrarDescripcion(productId);
        });
    });
});

