document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  let activePanel = document.querySelector('.tab-panel.active');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      const targetPanel = document.getElementById(targetId);

      if (targetPanel === activePanel) return;

      
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      
      activePanel.classList.remove('active');

      
      setTimeout(() => {
        panels.forEach(p => {
          if (p !== targetPanel) {
            p.style.opacity = 0;
            p.style.visibility = 'hidden';
          }
        });

        targetPanel.classList.add('active');
        targetPanel.style.opacity = 1;
        targetPanel.style.visibility = 'visible';

        activePanel = targetPanel;
      }, 300);
    });
  });
});
