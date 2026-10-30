(() => {
  // Add official URLs here when the association provides them; keep null until verified.
  const socialNetworks = [
    {
      name: 'Facebook',
      url: null,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.3H7.7V13h2.7v8z"/></svg>'
    },
    {
      name: 'Instagram',
      url: null,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.7" cy="6.7" r="1.2"/></svg>'
    },
    {
      name: 'TikTok',
      url: null,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 3h-3v12.2a2.8 2.8 0 1 1-2-2.7v-3a5.8 5.8 0 1 0 5 5.7V9a8.1 8.1 0 0 0 4.5 1.4v-3a5.1 5.1 0 0 1-4.5-4.4Z"/></svg>'
    },
    {
      name: 'YouTube',
      url: null,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.1a3 3 0 0 0-2.1-2.2C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.2c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.2 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9ZM9.7 15.6V8.4l6.2 3.6-6.2 3.6Z"/></svg>'
    },
    {
      name: 'WhatsApp',
      url: null,
      icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.5-4.9a8.4 8.4 0 1 1 16-3.9Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.2 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.4.7 1.1 1.4 1.9 1.8.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.2.3.4 0 .3-.2 1.1-.7 1.5-.5.5-1.2.7-2 .5-1-.2-2.1-.8-3.3-1.9-1.3-1.2-2.2-2.6-2.4-3.7-.2-.9.2-1.6.6-2Z"/></svg>'
    }
  ];

  function renderSocialLinks(container, variant) {
    const cards = variant === 'cards';
    container.classList.toggle('social-links-cards', cards);
    const links = socialNetworks.map(({ name, url, icon }) => {
      const label = cards
        ? `<span class="social-name">${name}</span><span class="social-status">${url ? 'Visiter notre page' : 'Lien officiel à ajouter'}</span>`
        : `<span class="social-name">${name}</span>`;
      const content = `<span class="social-icon">${icon}</span>${label}`;
      if (url) {
        return `<a class="social-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${name} ANV">${content}</a>`;
      }
      return `<span class="social-link is-unavailable" aria-disabled="true" title="Lien officiel à ajouter">${content}</span>`;
    }).join('');
    container.innerHTML = cards
      ? links
      : `<span class="footer-social-label">Suivez-nous</span><div class="social-links">${links}</div>`;
  }

  document.querySelectorAll('[data-social-links]').forEach((container) => {
    renderSocialLinks(container, container.dataset.socialLinks);
  });
})();
