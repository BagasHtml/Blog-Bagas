document.addEventListener('DOMContentLoaded', () => {
      const themeToggle = document.getElementById('theme-toggle');
      const body = document.body;

      if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
      } else {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
      }

      themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark');
          themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        } else {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
          localStorage.setItem('theme', 'light');
          themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
        }
      });
    });