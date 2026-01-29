async function init(){
    const memory = new WebAssembly.Memory({initial:1});

    const importObject = {
        js: {
            mem:memory
        },

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
        debugger
        const wasm = await WebAssembly.instantiate(buffer,importObject);
        debugger
        const sumFunction = wasm.instance.exports.sum;

        const uint8Array = new Uint8Array(memory.buffer,0,40);
        const hitext = new TextDecoder().decode(uint8Array);
        console.log("Contents of WASM Memory:", hitext);

        const result = sumFunction(9, 9);
        console.log("Result of sum(9, 9):", result);
    }

    init();