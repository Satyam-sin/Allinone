
  // ── Starfield Canvas ──
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function initStars() {
    stars = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        o: Math.random() * 0.6 + 0.1,
        speed: Math.random() * 0.015 + 0.005
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.o += Math.sin(Date.now() * s.speed * 0.01) * 0.003;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(196,181,253,${Math.max(0.05, s.o)})`;
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }

  resize();
  initStars();
  drawStars();
  window.addEventListener('resize', () => { resize(); initStars(); });

  // ── Scroll Reveal ──
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // ── Search Filter ──
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.subject-card');

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? 'block' : 'none';
    });
  });

  // ── Smooth scroll for anchor ──
  document.querySelector('a[href="#subjects"]').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('subjects').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
