const themeButton = document.getElementById('theme');
let savedTheme;
try { savedTheme = localStorage.getItem('bohuang78-theme'); } catch (_) { /* Storage is optional. */ }
function applyTheme(acid) {
  document.body.classList.toggle('acid', acid);
  themeButton.setAttribute('aria-label', acid ? '切换到紫色主题' : '切换到酸性绿主题');
  themeButton.setAttribute('aria-pressed', String(acid));
}
applyTheme(savedTheme === 'acid');
themeButton.addEventListener('click', () => {
  const acid = !document.body.classList.contains('acid');
  applyTheme(acid);
  try { localStorage.setItem('bohuang78-theme', acid ? 'acid' : 'purple'); } catch (_) { /* Keep working without storage. */ }
});
document.getElementById('year').textContent = new Date().getFullYear();
