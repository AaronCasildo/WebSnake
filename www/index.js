async function init(){

    const importObject = {
        console: {
            log:() => {
                console.log("Just logging stuff");
            },
            error: () => {
                console.log("Error");
            }
        }

    }
        const response = await fetch("sum.wasm");
        const buffer = await response.arrayBuffer();
        // debugger
        const wasm = await WebAssembly.instantiate(buffer,importObject);

        const sumFunction = wasm.instance.exports.sum;
        const wasmMemory = wasm.instance.exports.memory;

        const uint8Array = new Uint8Array(wasmMemory.buffer,0,40);
        const hitext = new TextDecoder().decode(uint8Array);
        console.log("Contents of WASM Memory:", hitext);

        const result = sumFunction(9, 9);
        console.log("Result of sum(9, 9):", result);
    }

    init();