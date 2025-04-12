import { setupMenuToggle } from './menu.js';
import { setupModal } from './modal.js';

// Initialize interactions after DOM loads
document.addEventListener('DOMContentLoaded', () => {
  setupMenuToggle();
  setupModal();
});