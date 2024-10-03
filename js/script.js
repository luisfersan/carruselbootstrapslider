function setupCarouselControls(carouselId, prevBtnId, nextBtnId) {
  const carousel = document.getElementById(carouselId)
  const prevBtn = document.getElementById(prevBtnId)
  const nextBtn = document.getElementById(nextBtnId)

  // Verificar que los elementos existan
  if (!carousel || !prevBtn || !nextBtn) {
    console.error('Elementos no encontrados:', carouselId, prevBtnId, nextBtnId)
    return
  }

  // Evento cuando se cambia la imagen del carrusel
  carousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = carousel.querySelector('.carousel-item.active')
    const items = carousel.querySelectorAll('.carousel-item')
    const isLastItem = activeItem === items[items.length - 1]

    if (isLastItem) {
      // Si es la última imagen, detener el carrusel y mostrar los botones
      carousel.pause() // Detener el carrusel
      prevBtn.classList.remove('d-none')
      nextBtn.classList.add('d-none') // Ocultar el botón "siguiente"
    } else {
      // Si no es la última imagen, esconder el botón "anterior"
      prevBtn.classList.remove('d-none')
      nextBtn.classList.remove('d-none')
    }
  })
}

// Inicializar controles para los tres carruseles
function initCarousels() {
  setupCarouselControls('carouselDemo1', 'prevBtn1', 'nextBtn1')
  setupCarouselControls('carouselDemo2', 'prevBtn2', 'nextBtn2')
  setupCarouselControls('carouselDemo3', 'prevBtn3', 'nextBtn3')
}

// Ejecutar la función de inicialización
document.addEventListener('DOMContentLoaded', initCarousels)
