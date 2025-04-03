import gsap from "gsap";

export const menuButton = () => {
    const tl = gsap.timeline();
    const menuBtn = document.getElementById("menubtn");
    const menuIcon = document.getElementById("menuicon");
    // tl.to("#menu", { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" })

    menuBtn.addEventListener('click', () => {
        // Get the current source of the image
        const currentSrc = menuIcon.src;

        // Extract the filename from the src
        const filename = currentSrc.substring(currentSrc.lastIndexOf('/') + 1);

        // Check if the current icon is the menu icon
        if (filename === "menu.svg") {
            menuIcon.src = "/icons/close.svg";
            menuIcon.alt = "close";
            tl.to("#menu", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.5,
                ease: "power2.inOut"
            })
        } else {
            menuIcon.src = "/icons/menu.svg";
            menuIcon.alt = "menu";
            tl.reverse();
        }
    });

    tl.to("#link .parent .child", {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.inOut"
    }, "<")

}
