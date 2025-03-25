const images = [
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/01.jpg',
  'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/01.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/01.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/01.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/01.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/01.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/01.jpg',
    
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

    document.getElementById('image1').src = `${images[randomIndexes[0]]}?t=${new Date().getTime()}`;
    document.getElementById('image2').src = `${images[randomIndexes[1]]}?t=${new Date().getTime()}`;
    document.getElementById('image3').src = `${images[randomIndexes[2]]}?t=${new Date().getTime()}`;
}

// 💡 Lightbox para abrir la imagen en grande
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

// ❌ Cerrar el lightbox
function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// 🚀 Cargar imágenes iniciales
window.onload = () => {
    getRandomImages();
};
