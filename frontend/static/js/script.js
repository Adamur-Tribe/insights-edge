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

  const form = document.getElementById('waitlistForm');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.classList.add('loading');

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        showNotification('Successfully joined the waitlist!', 'success');
        form.reset();
        setTimeout(() => {
          modal.classList.remove('modal-active');
          modal.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 1000);
      } catch (error) {
        showNotification('Something went wrong. Please try again.', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
      }
    });
  }

  function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
          <i class="fas fa-${
            type === 'success' ? 'check-circle' : 'exclamation-circle'
          }"></i>
          <span>${message}</span>
        </div>
      `;
    document.body.appendChild(notification);

    requestAnimationFrame(() => {
      notification.classList.add('show');
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
      }, 3000);
    });
  }
});
