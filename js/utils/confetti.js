// ==========================================================================
// NYOTA LIGHTWEIGHT CANVAS CONFETTI
// Zero external dependencies celebration particle emitter
// ==========================================================================

export function triggerConfetti(options = {}) {
  const count = options.particleCount || 70;
  const colors = options.colors || ['#D4AF37', '#FAF5ED', '#F5D38B', '#F472B6', '#38BDF8'];
  
  let canvas = document.getElementById('nyota-confetti-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'nyota-confetti-canvas';
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const startX = options.origin?.x ? options.origin.x * canvas.width : canvas.width / 2;
  const startY = options.origin?.y ? options.origin.y * canvas.height : canvas.height * 0.6;

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5);
    const speed = 4 + Math.random() * 8;
    particles.push({
      x: startX,
      y: startY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 6,
      size: 5 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      alpha: 1,
      gravity: 0.25,
    });
  }

  let animationFrameId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeParticles = 0;

    particles.forEach((p) => {
      if (p.alpha <= 0) return;
      activeParticles++;

      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rotationSpeed;
      p.alpha -= 0.012;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      ctx.restore();
    });

    if (activeParticles > 0) {
      animationFrameId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrameId);
    }
  }

  animate();
}
