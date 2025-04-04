import gsap from "gsap";

export const menuButton = () => {
    const tl = gsap.timeline({
        paused: true,
        reversed: true
    });
    const menuBtn = document.getElementById("menubtn");
    const menuIcon = document.getElementById("menuicon");

    menuBtn.addEventListener('click', () => {
        const currentSrc = menuIcon.src;

        const filename = currentSrc.substring(currentSrc.lastIndexOf('/') + 1);

        if (filename === "menu.svg") {
            menuIcon.src = "/icons/close.svg";
            menuIcon.alt = "close";
            tl.play();
        } else {
            menuIcon.src = "/icons/menu.svg";
            menuIcon.alt = "menu";
            tl.reverse();
        }
    });
    tl.to("#menu", {
        clipPath: "circle(70.7% at 50% 50%)",
        duration: 1,
        ease: "power2.inOut",
        backgroundColor: "white",
        opacity: 1,
        display: "block",
    }).to("#link .parent .child", {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 1,
        ease: "power2.inOut"
    })

}
