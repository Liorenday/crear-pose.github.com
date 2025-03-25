const images = [
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/01%20-%2052b7cfe2d80a2531268e6fd543be9059.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/02%20-%206752e14dcf9e1ac9f531eae0b23e0880.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/03%20-%203d668fb9341c6e0f6c53624354b5e038.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/04%20-%2003367b78b70e87443ca589d6e7858fe5.jpg',
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/05%20-%205f1b20824abad9b98f5e6d05c3760100.jpg',
  
    'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/06%20-%20b643b7d7881840da53a00c9fedd1f5b5.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/07%20-%20b2b0d1ece2fa15103b5b0d9fb22e4ed3.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/08%20-%204f56a9ec3574a35f482d1fd92641cb30.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/09%20-%20284bb2908155c550c944f3fcf166f155.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/10%20-%200a84b2c4f6cec1e393ebf049a0d58fde.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/11%20-%20b9e9290148964004a0d51d33c1d0faac.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/12%20-%20b181be89b86825a491989ff2cc5dc85f.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/13%20-%20c394b90dcd2ef5abb402f664f951a7a5.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/14%20-%20a1ea0c95ffd7b887623b95744b0017d0.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/15%20-%200c48a39cecb8a724db2f7a38c6c1cdb9.jpg',
'https://raw.githubusercontent.com/Liorenday/liore-crear-pose.github.com/main/16%20-%2023af6b55f666ccd849b81fccb631e1a5.jpg',
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
