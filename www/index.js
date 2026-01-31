import init, { World } from "web_snake"

init().then(() => {
    const world = World.new();
    const canvas = document.getElementById("snake-canvas");
    const context = canvas.getContext("2d");
});