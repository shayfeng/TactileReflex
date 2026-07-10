const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => menu.classList.remove('open')));
document.querySelector('[data-copy]').addEventListener('click', async event => {
  await navigator.clipboard.writeText(document.querySelector('#bibtex').innerText);
  event.currentTarget.textContent = 'Copied!';
  setTimeout(() => event.currentTarget.textContent = 'Copy', 1600);
});
