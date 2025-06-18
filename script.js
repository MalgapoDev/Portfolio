document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate skill bars on scroll
const skillSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.progress');

function showProgress() {
    progressBars.forEach(progress => {
        const value = progress.getAttribute('data-value');
        progress.style.opacity = 1;
        progress.style.width = `${value}%`;
    });
}