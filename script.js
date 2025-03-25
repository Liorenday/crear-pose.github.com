const images = [
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/01.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/02.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/03.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/04.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/05.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/06.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/07.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/08.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/09.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/10.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/11.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/12.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/13.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/14.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/15.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/16.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/17.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/18.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/19.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/20.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/21.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/22.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/23.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/24.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/25.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/26.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/27.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/28.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/29.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/30.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/31.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/32.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/33.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/34.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/35.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/36.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/37.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/38.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/39.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/40.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/41.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/42.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/43.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/44.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/45.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/46.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/47.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/48.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/49.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/50.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/51.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/52.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/53.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/54.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/55.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/56.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/57.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/58.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/59.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/60.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/61.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/62.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/63.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/64.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/65.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/66.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/67.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/68.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/69.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/70.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/71.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/72.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/73.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/74.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/75.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/76.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/77.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/78.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/79.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/80.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/81.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/82.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/83.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/84.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/85.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/86.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/87.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/refs/heads/main/88.jpg',

    
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
