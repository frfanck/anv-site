document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.choice[data-fiche]');
  const hint = document.getElementById('fiche-hint');

  function show(key, scroll) {
    const panel = document.getElementById('fiche-' + key);
    if (!panel) return;
    tabs.forEach(function (tab) {
      const active = tab.dataset.fiche === key;
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
      document.getElementById('fiche-' + tab.dataset.fiche).hidden = !active;
    });
    if (hint) hint.hidden = true;
    if (scroll) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      history.replaceState(null, '', '#' + tab.dataset.fiche);
      show(tab.dataset.fiche, true);
    });
  });

  const initial = location.hash.replace('#', '');
  if (initial) show(initial, true);
});
