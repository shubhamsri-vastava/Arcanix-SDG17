(() => {
  const notify = message => { const toast = document.querySelector('#toast'); toast.textContent = message; toast.classList.add('show'); clearTimeout(window.finalToastTimer); window.finalToastTimer = setTimeout(() => toast.classList.remove('show'), 3200); };
  const iconButtons = document.querySelectorAll('.dashboard-actions .icon-button');
  iconButtons[0].addEventListener('click', () => notify('Messaging is ready for new connections in this prototype.'));
  iconButtons[1].addEventListener('click', () => notify('You have 3 new opportunity updates.'));
  document.querySelector('#allPeople').addEventListener('click', () => notify('Use the search box to discover players and team managers worldwide.'));
  document.querySelector('#allRecruitment').addEventListener('click', () => { const rail = document.querySelector('.opportunity-rail'); rail.classList.add('is-focus'); setTimeout(() => rail.classList.remove('is-focus'), 1100); });
  document.querySelector('#sortFeed').addEventListener('click', event => { const latest = event.currentTarget.dataset.latest !== 'true'; event.currentTarget.dataset.latest = latest; event.currentTarget.textContent = latest ? 'Latest first ▾' : 'Top updates ▾'; notify(latest ? 'Showing the newest community updates.' : 'Showing the most discussed community updates.'); });
  document.querySelector('#networkSearch').addEventListener('keydown', event => {
    if (event.key !== 'Enter') return;
    const term = event.currentTarget.value.trim().toLowerCase();
    const choices = [...document.querySelectorAll('.recruitment-list article, .people-list article')];
    choices.forEach(item => { const match = !term || item.textContent.toLowerCase().includes(term); item.hidden = !match; item.classList.toggle('search-match', match && Boolean(term)); });
    const count = choices.filter(item => !item.hidden).length;
    notify(term ? `${count} people or teams match “${event.currentTarget.value}”.` : 'Showing all recommended people and teams.');
  });
})();
