document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.abstract-toggle').forEach(button => {
      button.addEventListener('click', function() {
        const abstractContainer = this.closest('.citation').querySelector('.abstract-container');
        abstractContainer.classList.toggle('show');
        this.textContent = abstractContainer.classList.contains('show') ? 'Hide Abstract' : 'Abstract';
        // this.textContent = abstractContainer.classList.contains('show') ? 'Abstract' : 'Abstract';
      });
    });
  });