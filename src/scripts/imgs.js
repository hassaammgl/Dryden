import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const canvas = document.querySelector("#canvas");

const frames = {
    currentIndex: 0,
    maxIndex: 452,
}

let imagesLoaded = 0;
const images = [];

function loadImages(index) {
    const ctx = canvas.getContext("2d");
    if (index >= 0 && index <= frames.maxIndex) {
        const img = images[index];
        console.log(canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scaleX = canvas.width / img.width;
        const scaleY = canvas.height / img.height;

        const scale = Math.max(scaleX, scaleY)

        const newHeight = img.height * scale;
        const newWidth = img.width * scale;

        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

        frames.currentIndex = index;
        console.log(`Image ${index} loaded`);
    }
}

function preloadedImages() {
    for (let i = 1; i <= frames.maxIndex; i++) {
        const imgUrl = `/watch/black-watch-${i.toString().padStart(5, "0")}.png`;
        console.log(imgUrl);
        const img = new Image();
        img.src = imgUrl;
        img.onload = () => {
            imagesLoaded++;
            if (imagesLoaded === frames.maxIndex) {
                console.log("All images loaded successfully");
                loadImages(frames.currentIndex);
                startAnimation()
            }
        };
        images.push(img);
        img.onerror = () => {
            console.error(`Error loading image ${i}`);
        };
    }
}

function startAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page",
            start: "top top",
            scrub: 2,
            pin: true,
        },
        onComplete: () => {
            console.log("Animation completed");
        }
    });

    tl.to(frames, {
        currentIndex: frames.maxIndex,
        snap: "currentIndex",
        duration: 1,
        onUpdate: () => {
            loadImages(Math.floor(frames.currentIndex));

        },
    })

}
export const imgs = () => {
    preloadedImages()

}