document.addEventListener("DOMContentLoaded", function() {
    const circle = document.getElementById("moving-circle");
    const container = document.getElementById("simulation-container");

    let positionX = 0;
    let positionY = 0;
    let directionX = 2;
    let directionY = 1;
    const speed = 7;

    function animate() {
        positionX += directionX * speed;
        positionY += directionY * speed;

        // Verifica colisiones con los bordes
        if (positionX + circle.offsetWidth > container.offsetWidth || positionX < 0) {
            directionX *= -1; // Cambia la dirección en X
        }
        if (positionY + circle.offsetHeight > container.offsetHeight || positionY < 0) {
            directionY *= -1; // Cambia la dirección en Y
        }

        // Actualiza la posición del círculo
        circle.style.left = positionX + "px";
        circle.style.top = positionY + "px";

        requestAnimationFrame(animate);
    }

    // Inicia la animación
    animate();
});
