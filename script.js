// Simple console log for now - tu peux ajouter des fonctions ici plus tard
document.addEventListener('DOMContentLoaded', () => {
  console.log('Metal Gear Solid Delta: Snake Eater site chargé');

  const title = document.querySelector('.title');
  const subtitle = document.querySelector('.subtitle');
  const coverImage = document.querySelector('.cover-image');
  const trailerVideo = document.querySelector('.trailer-video');
  const ctaButton = document.querySelector('.cta-button');

  // Fonction d'animation initiale
  const animateElements = () => {
    if(title){
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }
    if(subtitle){
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateY(0)';
    }
    if(coverImage){
      coverImage.style.opacity = '1';
      coverImage.style.transform = 'scale(1)';
    }
    if(trailerVideo){
      trailerVideo.style.opacity = '1';
      trailerVideo.style.transform = 'scale(1)';
    }
    if(ctaButton){
      ctaButton.style.opacity = '1';
      ctaButton.style.transform = 'translateY(0)';
    }
  };

  // Animation au survol du titre
  if(title && subtitle){
    title.addEventListener('mouseenter', () => {
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateY(0)';
    });
    title.addEventListener('mouseleave', () => {
      subtitle.style.opacity = '0.8'; // un peu transparent quand pas survolé
      subtitle.style.transform = 'translateY(-5px)';
    });
  }

  // Animation au survol de l'image
  if(coverImage && trailerVideo){
    coverImage.addEventListener('mouseenter', () => {
      trailerVideo.style.opacity = '1';
      trailerVideo.style.transform = 'scale(1)';
    });
    coverImage.addEventListener('mouseleave', () => {
      trailerVideo.style.opacity = '0.7';
      trailerVideo.style.transform = 'scale(0.95)';
    });
  }

  // Animation au survol du bouton
  if(ctaButton){
    ctaButton.addEventListener('mouseenter', () => {
      ctaButton.style.backgroundColor = '#0056b3';
      ctaButton.style.transform = 'scale(1.05)';
    });
    ctaButton.addEventListener('mouseleave', () => {
      ctaButton.style.backgroundColor = '#007bff';
      ctaButton.style.transform = 'scale(1)';
    });
  }

  // Lancer les animations initiales avec un léger délai
  setTimeout(animateElements, 500);
});

// Tu peux ajouter des fonctionnalités supplémentaires ici
// Par exemple, des animations, des interactions, etc.

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

