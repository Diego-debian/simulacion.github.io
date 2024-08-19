document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let index = 0;

    document.querySelector('.prev').addEventListener('click', function () {
        index = (index === 0) ? totalItems - 1 : index - 1;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });

    document.querySelector('.next').addEventListener('click', function () {
        index = (index === totalItems - 1) ? 0 : index + 1;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    });
});
