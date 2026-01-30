import init, { greet } from "web_snake"

init().then(() => {
    greet("Aaron Casildo");
    console.log("WASM Loaded");
});