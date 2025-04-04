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
        console.log(canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;

        const scale = Math.max(scaleX, scaleY)

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

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