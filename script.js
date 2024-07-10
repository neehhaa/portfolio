document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.project a');
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeModalBtn = document.querySelector('.close');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            modalTitle.textContent = link.parentElement.querySelector('h3').textContent;
            modalDescription.textContent = link.parentElement.querySelector('p').textContent;
            modal.style.display = 'block';
        });
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
