document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate__animated');

    elements.forEach(el => {
        el.classList.add('animate__fadeInUp');
    });
});
