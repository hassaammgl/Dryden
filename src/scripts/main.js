// styles
import '../styles/style.scss'

// scripts
import gsap from "gsap";
import { menuButton } from './menu'
import { imgs } from './imgs';

function valueSetters() {
    gsap.set("#menu", {
        clipPath: "circle(0.3% at 100% 0)",
        display: "none",
        opacity: 0,
    })
    gsap.set("#link .parent .child", {
        y: "100%",
        opacity: 0,
        color: "black",
    })
    gsap.set("#page1", {
        opacity: 0,
        y: "100%",
    })
}

function revealToSpan() {
    const h1Elems = document.getElementsByClassName("reveal");

    for (let i = 0; i < h1Elems.length; i++) {
        const e = h1Elems[i];

        const orignalContent = e.innerHTML;
        console.log(orignalContent);

        e.innerHTML = "";

        const spanP = document.createElement("span");
        spanP.classList.add("parent")
        const spanC = document.createElement("span");
        spanC.classList.add("child")

        spanC.innerHTML = orignalContent;

        spanP.appendChild(spanC);
        e.appendChild(spanP);
    }

}

revealToSpan()
valueSetters()
menuButton()
imgs()


