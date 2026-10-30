(function () {
  const intro = document.getElementById('intro');
  if (!intro) return;
  if (document.documentElement.classList.contains('intro-seen')) { intro.remove(); return; }

  document.body.classList.add('intro-lock');
  var enterBtn = document.getElementById('intro-enter');
  if (enterBtn && enterBtn.focus) { try { enterBtn.focus({ preventScroll: true }); } catch (e) {} }
  let closed = false;

  function close() {
    if (closed) return;
    closed = true;
    try { sessionStorage.setItem('anv-intro', '1'); } catch (e) {}
    intro.classList.add('intro-out');
    document.body.classList.remove('intro-lock');
    setTimeout(function () { intro.remove(); }, 900);
  }

  document.getElementById('intro-enter').addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  setTimeout(close, 4500);
})();
