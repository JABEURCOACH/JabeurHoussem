gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach((sec) => {
  gsap.to(sec, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    },
  });
});

// particles
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let dots = [];
for (let i = 0; i < 100; i++) {
  dots.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 2,
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#22d3ee";

  dots.forEach((d) => {
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fill();

    d.y += 0.4;
    if (d.y > canvas.height) d.y = 0;
  });

  requestAnimationFrame(animate);
}

animate();
