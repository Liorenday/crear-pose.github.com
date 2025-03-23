// Asegúrate de que las URLs sean correctas
const images = [
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/01%20-%2052b7cfe2d80a2531268e6fd543be9059.jpg',
    'https://github.com/Liorenday/liore-crear-pose.github.com/blob/main/02%20-%206752e14dcf9e1ac9f531eae0b23e0880.jpg?raw=true',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/01%20-%2052b7cfe2d80a2531268e6fd543be9059.jpg',
];

// Función para obtener imágenes aleatorias
function getRandomImages() {
    const randomIndexes = [];
    while (randomIndexes.length < 3) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }

    console.log('Imágenes seleccionadas:', randomIndexes); // Verifica las imágenes seleccionadas

    document.getElementById('image1').src = images[randomIndexes[0]];
    document.getElementById('image2').src = images[randomIndexes[1]];
    document.getElementById('image3').src = images[randomIndexes[2]];
}

// Cargar las imágenes al iniciar la página
window.onload = function() {
    console.log('Cargando imágenes aleatorias...');
    getRandomImages();
};
