document.addEventListener('DOMContentLoaded', function() {
    const topBtn = document.querySelector('.topbtn');

    if (topBtn) {
        topBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});