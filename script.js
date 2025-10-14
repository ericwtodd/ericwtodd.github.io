document.addEventListener('DOMContentLoaded', function() {
  const lastUpdated = "October 14, 2025";
  document.querySelectorAll('.last-updated').forEach(el => {
    el.textContent = lastUpdated;
  });

  document.querySelectorAll('.abstract-toggle').forEach(button => {
    button.addEventListener('click', function() {
      const abstractContainer = this.closest('.citation').querySelector('.abstract-container');
      abstractContainer.classList.toggle('show');
      this.textContent = abstractContainer.classList.contains('show') ? 'Hide Abstract' : 'Abstract';
    });
  });
  
  // New code for collapsible news sections
  document.querySelectorAll('.year-header').forEach(header => {
    // Add click event to toggle collapse
    header.addEventListener('click', function() {
      this.classList.toggle('collapsed');
      const content = this.nextElementSibling;
      content.classList.toggle('collapsed');
    });
    
    // Optional: Collapse older sections by default
    // If you want sections from previous years collapsed by default:
    const year = parseInt(header.textContent.trim());
    const currentYear = new Date().getFullYear();
    if (year < currentYear) {
      header.classList.add('collapsed');
      header.nextElementSibling.classList.add('collapsed');
    }
  });
});