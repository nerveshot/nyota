// ==========================================================================
// NYOTA GENERAL UTILITIES & HELPERS
// ==========================================================================

export function showToast(message, type = 'default') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✨' : type === 'error' ? '⚠️' : '🔔'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

export function copyToClipboard(text, successMessage = 'Link copied to clipboard!') {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage, 'success');
    }).catch(() => {
      fallbackCopyText(text, successMessage);
    });
  } else {
    fallbackCopyText(text, successMessage);
  }
}

function fallbackCopyText(text, successMessage) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage, 'success');
  } catch (err) {
    showToast('Failed to copy', 'error');
  }
  document.body.removeChild(textArea);
}

export function getCoupleInitials(names) {
  if (!names) return 'N & Y';
  const parts = names.split('&').map(s => s.trim());
  if (parts.length >= 2) {
    const first = parts[0].charAt(0).toUpperCase() || 'A';
    const second = parts[1].charAt(0).toUpperCase() || 'B';
    return `${first} & ${second}`;
  }
  const words = names.trim().split(/\s+/);
  if (words.length >= 2) {
    return `${words[0].charAt(0).toUpperCase()} & ${words[words.length - 1].charAt(0).toUpperCase()}`;
  }
  return names.slice(0, 2).toUpperCase();
}

export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

export function formatStackedNames(names, options = {}) {
  if (!names) return '';
  const parts = names.split('&').map(s => s.trim());
  const size = options.size || 'normal'; // 'normal' | 'lg' | 'sm'
  const fontClass = options.fontClass || 'font-cinzel';

  if (parts.length >= 2) {
    const groom = parts[0];
    const bride = parts[1];
    const ampersandSize = size === 'lg' ? '2.2rem' : size === 'sm' ? '1.2rem' : '1.5rem';
    const nameSize = size === 'lg' ? '2.75rem' : size === 'sm' ? '1.3rem' : '1.65rem';

    return `
      <div class="names-stacked-wrapper ${fontClass}" style="display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.15; margin: 0.5rem 0;">
        <span class="gold-gradient-text" style="font-size: ${nameSize}; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">${groom}</span>
        <span class="font-script gold-gradient-text" style="font-size: ${ampersandSize}; margin: 0.15rem 0; opacity: 0.95; line-height: 1;">&</span>
        <span class="gold-gradient-text" style="font-size: ${nameSize}; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;">${bride}</span>
      </div>
    `;
  }

  return `<h2 class="${fontClass} gold-gradient-text" style="font-size: 1.8rem; font-weight: 700;">${names}</h2>`;
}

