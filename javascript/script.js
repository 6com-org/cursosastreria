// Espera a que el DOM esté completamente cargado antes de ejecutar scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- Funcionalidad del Menú de Hamburguesa ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Opcional: Cambiar el icono de hamburguesa a cruz
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                menuToggle.setAttribute('aria-label', 'Cerrar menú');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                menuToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });

        // Cerrar el menú si se hace clic en un enlace (útil en móviles)
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                // Solo cerrar si la pantalla es pequeña (menú de hamburguesa visible)
                if (window.innerWidth <= 768) { // Coincide con la media query en CSS
                    mainNav.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    menuToggle.setAttribute('aria-label', 'Abrir menú');
                }
            });
        });
    }

    // --- Opcional: Implementación básica de Scroll Reveal (descomentar si se usa la clase .scroll-reveal en CSS) ---
    /*
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('is-visible');
    };

    const hideScrollElement = (element) => {
      element.classList.remove('is-visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) { // Ajusta el 'dividend' para cuándo se activa
          displayScrollElement(el);
        } else {
          // Opcional: Descomenta la línea de abajo si quieres que desaparezca al hacer scroll hacia arriba
          // hideScrollElement(el);
        }
      });
    };

    // Añadir la clase 'scroll-reveal' a los elementos que quieres animar en el HTML
    // Añadir listener para el scroll y resize
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('resize', handleScrollAnimation);

    // Ejecutar al cargar para mostrar elementos visibles inicialmente
    handleScrollAnimation();
    */

    // --- Puedes añadir más interactividad aquí ---
    // Por ejemplo:
    // - Validaciones de formulario si no usas Tally.so (o validación extra)
    // - Carruseles/Sliders (requeriría una librería o más código JS)
    // - Efectos parallax
    // - Lógica para las FAQs (expandir/colapsar respuestas)

}); // Fin DOMContentLoaded
