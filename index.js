const routes = {
  home: `
    <h2>Home</h2>
    <div class="card">
      <p>Welcome to my Website.</p>
    </div>
  `,
sertifikat: `
<h2>Certificates</h2>
<div class="card p-3">
  <p><strong>Learn Basic JavaScript</strong> — Dicoding Academy</p>
  <p>Issued on: 06 August 2025</p>
  <a href="https://www.dicoding.com/dicodingassets/coursecertificate/284b1a2a62105e6b2bd3b79a4ed0ec972a2f9eaa/view" target="_blank" class="btn btn-primary mb-2">Verify Certificate</a>
  <p>In learning the JavaScript material, I already had at least a basic understanding of the fundamental topics. However, my foundation is not evenly distributed, especially in Object-Oriented Programming (OOP), which I am still continuing to study.</p>
</div>
`,
kontak: `
<h2 class="mb-4">Contact</h2>
<div class="card p-3 bg-dark text-white">
  <p>Contact Me! :</p>
  <div class="list-group">
    <a href="https://github.com/BagasHtml" target="_blank" 
       class="list-group-item list-group-item-action d-flex align-items-center bg-dark text-white border-0">
      <i class="bi bi-github me-2" style="font-size:1.5rem;"></i> GitHub
    </a>
    <a href="https://instagram.com/bagas_tresnaa_" target="_blank" 
       class="list-group-item list-group-item-action d-flex align-items-center bg-dark text-white border-0">
      <i class="bi bi-instagram me-2" style="font-size:1.5rem; color:#E4405F;"></i> Instagram
    </a>
    <p "bagashtml369@gmail.com" 
       class="list-group-item list-group-item-action d-flex align-items-center bg-dark text-white border-0">
      <i class="bi bi-envelope-fill me-2" style="font-size:1.5rem; color:#D44638;"></i> bagashtml369@gmail.com
    </p>
  </div>
</div>
`,

  about: `
    <h2>About Me:</h2>
    <div class="card">
      <p>I’m a student at SMK Taruna Bangsa in Bekasi, and I love learning new things especially in the world of technology and programming.</p>
    </div>
    <div class="card">
      <h3>Education</h3>
      <ul>
        <li>MIT ATTAQWA 01 Ujung Harapan, Bekasi (2015–2021)</li>
        <li>MTS ATTAQWA 03 Babelan, Bekasi (2021–2024)</li>
        <li>SMK Taruna Bangsa, Bekasi (2024–present)</li>
      </ul>
    </div>
    <div class="card">
      <h3>Extracurricular Activities</h3>
      <ul>
        <li>Paskibra (Flag-Raising Team)</li>
        <li>Hadroh (Traditional Islamic Music)</li>
        <li>Programming Club || Computer Technician Division</li>
        <li>Tahfiz (Qur’an Memorization)</li>
      </ul>
    </div>
    <div class="card">
      <h3>Front-End Skills Progress</h3>
      <p>HTML (Expert) — 90%</p>
      <p>CSS (Beginner) — 70%</p>
      <p>JavaScript (NEW) — 20%</p>
    </div>
  `
};

function navigate() {
  const hash = location.hash.replace('#', '') || 'home';
  const contentEl = document.getElementById('content');

  contentEl.classList.add('fade-enter');
  contentEl.innerHTML = routes[hash] || routes.home;

  requestAnimationFrame(() => {
    contentEl.classList.add('fade-enter-active');
  });

  setTimeout(() => {
    contentEl.classList.remove('fade-enter', 'fade-enter-active');
  }, 300);

  document.querySelectorAll('.menu a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${hash}`);
  });
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', () => {
  navigate();
  loadDiscordStatus();
});

function loadDiscordStatus() {
  const discordId = '769440727309746177';
  fetch(`https://api.lanyard.rest/v1/users/${discordId}`)
    .then(res => res.json())
    .then(data => {
      const status = data.data.discord_status;
      const dot = document.getElementById('discord-dot');
      const statusEl = document.getElementById('discord-status');

      dot.style.background =
        status === 'online' ? '#43b581' :
        status === 'idle' ? '#faa61a' :
        status === 'dnd' ? '#f04747' :
        '#747f8d';

      statusEl.textContent = status.charAt(0).toUpperCase() + status.slice(1);
    })
    .catch(() => {
      document.getElementById('discord-status').textContent = 'Error';
    });
}
