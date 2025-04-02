export const menuButton = () => {
    const menuBtn = document.getElementById("menubtn");
    const menuIcon = document.getElementById("menuicon");

    menuBtn.addEventListener('click', () => {
        // Get the current source of the image
        const currentSrc = menuIcon.src;

        // Extract the filename from the src
        const filename = currentSrc.substring(currentSrc.lastIndexOf('/') + 1);

        // Check if the current icon is the menu icon
        if (filename === "menu.svg") {
            menuIcon.src = "/icons/close.svg";
            menuIcon.alt = "close";
        } else {
            menuIcon.src = "/icons/menu.svg";
            menuIcon.alt = "menu";
        }
    });
}