// Shared page behaviour: theme toggle and mobile menu.

const root = document.documentElement;

function effectiveTheme(): 'light' | 'dark' {
  const set = root.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return 'dark';
}

function initTheme() {
  const button = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
  if (!button) return;
  const label = () => {
    const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    button.setAttribute('aria-label', `Switch to ${next} theme`);
  };
  label();
  button.addEventListener('click', () => {
    const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
    label();
  });
}

function initMenu() {
  const button = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const list = document.getElementById('nav-list');
  if (!button || !list) return;
  const close = () => {
    button.setAttribute('aria-expanded', 'false');
    root.classList.remove('menu-is-open');
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    root.classList.toggle('menu-is-open', open);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('menu-is-open')) {
      close();
      button.focus();
    }
  });
  list.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) close();
  });
}

export function initChrome() {
  initTheme();
  initMenu();
}
