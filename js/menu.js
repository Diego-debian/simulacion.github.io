function crearMenu(){
    fetch('../html/menu.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('cabeceraDefault').innerHTML = data;
            });
}

crearMenu();