const themeButton = document.getElementById('theme');
function applyTheme(night) {
  document.body.classList.toggle('night', night);
  themeButton.setAttribute('aria-label', night ? '切换浅色背景' : '切换深色背景');
  themeButton.setAttribute('aria-pressed', String(night));
}
try { applyTheme(localStorage.getItem('bohuang78-theme-v2') === 'night'); } catch (_) {}
themeButton.addEventListener('click', () => {
  const night = !document.body.classList.contains('night');
  applyTheme(night);
  try { localStorage.setItem('bohuang78-theme-v2', night ? 'night' : 'day'); } catch (_) {}
});
const wire = document.getElementById('wire-object');
for (let i = 0; i < 76; i++) {
  const angle = i * Math.PI * 2 / 76;
  const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  ellipse.setAttribute('cx', String(300 + Math.cos(angle) * 101));
  ellipse.setAttribute('cy', String(305 + Math.sin(angle) * 143));
  ellipse.setAttribute('rx', '99');
  ellipse.setAttribute('ry', '160');
  ellipse.setAttribute('transform', `rotate(${i * 360 / 76}, ${300 + Math.cos(angle) * 101}, ${305 + Math.sin(angle) * 143})`);
  ellipse.setAttribute('stroke', 'currentColor');
  ellipse.setAttribute('stroke-width', '.65');
  ellipse.setAttribute('opacity', String(.25 + .65 * (1 + Math.sin(angle)) / 2));
  wire.appendChild(ellipse);
}
document.getElementById('year').textContent = new Date().getFullYear();
