// footer.js
function cargarFooter() {
    fetch('/html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerDefault').innerHTML = data;
        })
        .catch(error => console.error('Error cargando el footer:', error));
}

cargarFooter();
