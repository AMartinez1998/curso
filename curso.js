// --- ABRIR/CERRAR MÓDULOS ---
  document.querySelectorAll('.modulo-header').forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('active');
    });
  });

  // --- ABRIR/CERRAR CLASES ---
  document.querySelectorAll('.clase').forEach(clase => {
    clase.addEventListener('click', () => {
      clase.classList.toggle('active');
    });
  });