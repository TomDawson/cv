const trail = document.querySelector('.trail');
let mouseX = 0;
let mouseY = 0;
let colorIndex = 0;
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

document.addEventListener('mousemove', (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

const animate = () => {
  trail.style.left = `${mouseX - 5}px`;
  trail.style.top = `${mouseY - 5}px`;
  trail.style.backgroundColor = colors[colorIndex % colors.length];
  colorIndex++;

  requestAnimationFrame(animate);
};

animate();