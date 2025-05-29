const horizon = document.getElementById("horizon");
const horizontalWrapper = horizon.querySelector(".horizon-wrap");
const panelCount = horizontalWrapper.querySelectorAll(".panel").length;
const scrollArea = window.innerHeight * panelCount;

horizon.style.height = `${scrollArea}px`;

window.addEventListener("scroll", () => {
    const sectionTop = horizon.offsetTop;
    const scrollY = window.scrollY;

    if (scrollY >= sectionTop && scrollY <= sectionTop + scrollArea - window.innerHeight) {
        const relativeY = scrollY - sectionTop;
        horizontalWrapper.style.transform = `translateX(-${relativeY}px)`;
    }
});