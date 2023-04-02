const switchDarkMode = document.querySelector('#switch-dark-mode');

switchDarkMode.addEventListener('change', () => {
  if (switchDarkMode.checked) {
    // Altera para o modo escuro
    document.body.classList.add('dark');
  } else {
    // Altera para o modo claro
    document.body.classList.remove('dark');
  }
});

  
