document.addEventListener("DOMContentLoaded", () => {
    const marca = document.querySelector(".marca");

    if (marca) {
        marca.addEventListener("mouseenter", () => {
            marca.classList.add("marca-activa");
        });

        marca.addEventListener("mouseleave", () => {
            marca.classList.remove("marca-activa");
        });
    }
});

// ===== CAMBIO AUTOMÁTICO DE PORTADA =====

document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(
        ".portada-carrusel img"
    );

    if (imagenes.length === 0) return;

    let actual = 0;

    setInterval(() => {
        imagenes[actual].classList.remove("activa");

        actual = (actual + 1) % imagenes.length;

        imagenes[actual].classList.add("activa");
    }, 3000);
});

// ===== CARGA INICIAL CBTIS 258 =====

window.addEventListener("load", () => {
    const pantalla = document.getElementById("pantalla-carga");

    if (pantalla) {
        setTimeout(() => {
            pantalla.classList.add("ocultar");

            setTimeout(() => {
                pantalla.remove();
            }, 850);

        }, 2000);
    }
});