document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.ripple');

  buttons.forEach(button => {
    button.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');

      ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
      ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
      ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 1000);
    });
  });
});
