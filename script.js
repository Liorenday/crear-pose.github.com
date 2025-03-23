const images = [
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/01%20-%2052b7cfe2d80a2531268e6fd543be9059.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/02%20-%206752e14dcf9e1ac9f531eae0b23e0880.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/03%20-%203d668fb9341c6e0f6c53624354b5e038.jpg',
];

// Función para obtener imágenes aleatorias
function getRandomImages() {
    const randomIndexes = new Set();

    while (randomIndexes.size < 3) {
        const randomIndex = Math.floor(Math.random() * images.length);
        randomIndexes.add(randomIndex);
    }

    const randomArray = [...randomIndexes];

    // Validar imágenes antes de asignarlas
    randomArray.forEach((index, i) => {
        const imgElement = document.getElementById(`image${i + 1}`);
        const imgUrl = images[index];

        // Verificar si la URL es válida antes de asignarla
        fetch(imgUrl)
            .then(response => {
                if (response.ok) {
                    imgElement.src = imgUrl;
                } else {
                    imgElement.alt = 'Imagen no disponible';
                }
            })
            .catch(() => {
                imgElement.alt = 'Error al cargar la imagen';
            });
    });
}

// Cargar las imágenes al iniciar la página
window.onload = getRandomImages;
