document.addEventListener("DOMContentLoaded", function() {
    const planet = document.getElementById("planet");
    const sun = document.getElementById("sun");
    const distanceSlider = document.getElementById("distance");
    const distanceValue = document.getElementById("distance-value");

    const sunPosition = { x: 250, y: 250 }; // Centro del contenedor
    const G = 1; // Constante gravitacional ficticia para simplificar
    const M = 1; // Masa ficticia del sol para simplificar
    const eccentricity = 0.6; // Excentricidad de la órbita (0 es circular, valores mayores son más elípticos)

    let angle = 0;
    let semiMajorAxis = parseInt(distanceSlider.value, 10); // Eje semimayor de la órbita

    function updatePosition() {
        const a = semiMajorAxis;
        const b = a * Math.sqrt(1 - Math.pow(eccentricity, 2)); // Eje semimenor
        const r = a * (1 - Math.pow(eccentricity, 2)) / (1 + eccentricity * Math.cos(angle)); // Distancia actual al sol

        // Calcular posición del planeta usando coordenadas polares
        const x = sunPosition.x + r * Math.cos(angle);
        const y = sunPosition.y + r * Math.sin(angle);

        // Establecer la posición del planeta en el DOM
        planet.style.left = x + "px";
        planet.style.top = y + "px";

        // Aumentar el ángulo dependiendo de la velocidad orbital
        const orbitalSpeed = Math.sqrt(G * M * (2 / r - 1 / a)); // Velocidad orbital
        angle += orbitalSpeed / r; // Ajuste del ángulo según la velocidad

        requestAnimationFrame(updatePosition);
    }

    function animate() {
        semiMajorAxis = parseInt(distanceSlider.value, 10);
        distanceValue.textContent = semiMajorAxis;
        angle = 0; // Reiniciar el ángulo para que la órbita comience de nuevo

        updatePosition();
    }

    distanceSlider.addEventListener("input", function() {
        animate();
    });

    animate(); // Comienza la animación al cargar la página
});
