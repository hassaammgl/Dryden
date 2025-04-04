const canvas = document.querySelector("#canvas");
const frames = {
    currentIndex: 0,
    maxIndex: 452,
}

let imagesLoaded = 0;
const images = [];

function loadImages(index) {
    if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];

    }
}

function preloadedImages() {
    for (let i = 1; i <= frames.maxIndex; i++) {
        const imgUrl = `/watch/watch-${i.toString().padStart(5, "0")}.png`;
        console.log(imgUrl);
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            imagesLoaded++;
            console.log(`Image ${i} loaded`);
            if (imagesLoaded === frames.maxIndex) {
                console.log("All images loaded successfully");
                console.log(images);

                loadImages(frames.currentIndex);
            }
        };
        images.push(img);
        img.onerror = () => {
            console.error(`Error loading image ${i}`);
        };
    }
}

export const imgs = () => {
    preloadedImages()
}