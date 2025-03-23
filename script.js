// Aquí puedes reemplazar estos enlaces con los enlaces a tus imágenes en GitHub
const images = [
   'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/01%20-%2052b7cfe2d80a2531268e6fd543be9059.jpg',
   'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/01%20-%2052b7cfe2d80a2531268e6fd543be9059.jpg',
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

    document.getElementById('image1').src = images[randomIndexes[0]];
    document.getElementById('image2').src = images[randomIndexes[1]];
    document.getElementById('image3').src = images[randomIndexes[2]];
}

// Cargar las imágenes al iniciar la página
window.onload = getRandomImages;
