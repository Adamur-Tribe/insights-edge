document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('waitlistModal');
  const openWaitlist = document.getElementById('openWaitlist');
  const closeModal = document.querySelector('.modal-close');

  if (openWaitlist) {
    openWaitlist.addEventListener('click', () => {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      modal.classList.add('modal-active');
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.classList.remove('modal-active');
      setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 300);
    });
  }
});
