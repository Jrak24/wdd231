export function setupModal() {
    const modal = document.getElementById('special-modal');
    const openBtn = document.getElementById('special-btn');
    const closeBtn = document.getElementById('close-modal');
  
    openBtn.addEventListener('click', () => {
      modal.showModal();
    });
  
    closeBtn.addEventListener('click', () => {
      modal.close();
    });
  }

  const image = e.target.getAttribute('data-image');

modalContent.innerHTML = `
  <img src="${image}" alt="${name}" class="modal-img" />
  <h2>${name}</h2>
  <p>${description}</p>
  <p><strong>Price:</strong> $${price}</p>
`;
