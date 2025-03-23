const images = [
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/01%20-%2052b7cfe2d80a2531268e6fd543be9059.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/02%20-%206752e14dcf9e1ac9f531eae0b23e0880.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/03%20-%203d668fb9341c6e0f6c53624354b5e038.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/04%20-%20imagen4.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/05%20-%20imagen5.jpg'
];

// 🔥 Función para obtener imágenes aleatorias y evitar caché
function getRandomImages() {
    const randomIndexes = [];

    while (randomIndexes.length < 3) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
        }
    }

    console.log('Imágenes seleccionadas:', randomIndexes);

    // Evitar la caché agregando un parámetro único con la fecha actual
    document.getElementById('image1').src = `${images[randomIndexes[0]]}?t=${new Date().getTime()}`;
    document.getElementById('image2').src = `${images[randomIndexes[1]]}?t=${new Date().getTime()}`;
    document.getElementById('image3').src = `${images[randomIndexes[2]]}?t=${new Date().getTime()}`;
}

// 🚀 Cargar imágenes iniciales
window.onload = () => {
    getRandomImages();
};
