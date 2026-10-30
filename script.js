document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('nav.links');
  if (!toggle || !links) return;
  links.id = links.id || 'menu-principal';
  toggle.setAttribute('aria-controls', links.id);
  toggle.setAttribute('aria-expanded', 'false');

  function setOpen(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  }
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!links.classList.contains('open'));
  });
  document.addEventListener('click', function (e) {
    if (!links.contains(e.target) && e.target !== toggle) setOpen(false);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  links.addEventListener('click', function (e) { if (e.target.tagName === 'A') setOpen(false); });
});
