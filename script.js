const scene = document.querySelector(".scene");
const pullSwitch = document.getElementById("pullSwitch");

let lightOn = false;

pullSwitch.addEventListener("click", () => {
    pullSwitch.classList.remove("pull");
    void pullSwitch.offsetWidth;
    pullSwitch.classList.add("pull");

    setTimeout(() => {
        lightOn = !lightOn;
        scene.classList.toggle("light-on", lightOn);
    }, 180);
});

pullSwitch.addEventListener("animationend", () => {
    pullSwitch.classList.remove("pull");
});

const form = document.querySelector(".contact-card form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = form.querySelector(".send-button");
    const original = button.innerHTML;

    button.innerHTML = `Nachricht gesendet <span>✓</span>`;

    setTimeout(() => {
        button.innerHTML = original;
        form.reset();
    }, 2500);
});
