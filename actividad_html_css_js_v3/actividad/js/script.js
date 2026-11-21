/* ==========================================================
   Script: eventos de la página "Estructura básica de HTML"
   Archivo: js/script.js

   Eventos usados (5 diferentes):
     1. click      -> botón "Cambiar tema"
     2. dblclick   -> título principal (h1)
     3. mouseover  -> imagen (con mouseout para restaurarla)
     4. keydown    -> teclado: tamaño de la letra
     5. resize     -> cambio de tamaño de la ventana
   ========================================================== */

// Esperamos a que todo el HTML esté cargado antes de usar sus elementos
document.addEventListener('DOMContentLoaded', function () {

  // ---------- Elementos de la página ----------
  const body = document.body;
  const titulo = document.querySelector('header h1');
  const imagen = document.querySelector('.foto img');
  const botonTema = document.getElementById('btnTema');
  const spanAncho = document.getElementById('ancho');

  /* ---------- EVENTO 1: click ----------
     Al hacer clic en el botón se alterna entre tema oscuro y claro. */
  botonTema.addEventListener('click', function () {
    body.classList.toggle('tema-claro');
  });

  /* ---------- EVENTO 2: dblclick ----------
     Al hacer doble clic en el título cambian su texto y su color. */
  const textoOriginal = titulo.textContent;

  titulo.addEventListener('dblclick', function () {
    const alterno = titulo.classList.toggle('titulo-alterno');
    titulo.textContent = alterno ? '¡Hiciste doble clic!' : textoOriginal;
  });

  /* ---------- EVENTO 3: mouseover (y mouseout) ----------
     Al pasar el mouse sobre la imagen se agranda y brilla;
     al retirarlo, vuelve a su estado normal. */
  imagen.addEventListener('mouseover', function () {
    imagen.classList.add('resaltada');
  });

  imagen.addEventListener('mouseout', function () {
    imagen.classList.remove('resaltada');
  });

  /* ---------- EVENTO 4: keydown ----------
     Con el teclado se cambia el tamaño de la letra de la página:
     "+" la aumenta, "-" la disminuye y "0" la restaura. */
  let tamano = 100; // porcentaje del tamaño de letra

  document.addEventListener('keydown', function (evento) {
    if (evento.key === '+') {
      tamano = Math.min(tamano + 10, 160);
    } else if (evento.key === '-') {
      tamano = Math.max(tamano - 10, 70);
    } else if (evento.key === '0') {
      tamano = 100;
    } else {
      return; // las demás teclas no hacen nada
    }
    body.style.fontSize = tamano + '%';
  });

  /* ---------- EVENTO 5: resize ----------
     Al cambiar el tamaño de la ventana se actualiza el ancho
     que se muestra en el pie de página. */
  function mostrarAncho() {
    spanAncho.textContent = window.innerWidth;
  }

  window.addEventListener('resize', mostrarAncho);
  mostrarAncho(); // valor inicial al cargar la página
});
