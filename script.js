// Aquí puedes reemplazar estos enlaces con los enlaces a tus imágenes en GitHub
const images = [
    'https://github.com/Liorenday/liore-crear-pose.github.com/blob/main/01%20-%2052b7cfe2d80a2531268e6fd543be9059.jpg',
    'https://github.com/Liorenday/liore-crear-pose.github.com/blob/main/02%20-%206752e14dcf9e1ac9f531eae0b23e0880.jpg',
    'https://github.com/Liorenday/liore-crear-pose.github.com/blob/main/03%20-%203d668fb9341c6e0f6c53624354b5e038.jpg?',
    'https://github.com/Liorenday/liore-crear-pose.github.com/blob/main/04%20-%2003367b78b70e87443ca589d6e7858fe5.jpg',
    'https://github.com/Liorenday/liore-crear-pose.github.com/blob/main/05%20-%205f1b20824abad9b98f5e6d05c3760100.jpg?'
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
