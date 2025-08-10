document.addEventListener('DOMContentLoaded', () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('aria-hidden', 'true');
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" aria-label="Fermer la fenêtre modale">&times;</button>
      <img src="" alt="" />
    </div>
  `;
  document.body.appendChild(modal);

  const modalImage = modal.querySelector('img');
  const closeButton = modal.querySelector('.modal-close');

  // Ouvrir modale en cliquant sur une image
  document.querySelectorAll('.image-card img').forEach(img => {
    img.addEventListener('click', () => {
      modalImage.src = img.src;
      modalImage.alt = img.alt;
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      closeButton.focus();
      document.body.style.overflow = 'hidden'; // Bloquer scroll arrière-plan
    });

    // Optionnel : ouvrir aussi au clavier (Enter ou Espace)
    img.parentElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        img.click();
      }
    });
  });

  // Fermer modale
  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeButton.addEventListener('click', closeModal);

  // Fermer avec Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Fermer si clic hors image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});
