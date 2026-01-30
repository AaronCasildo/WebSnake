import path from 'path';
import { fileURLToPath } from 'url';
import CopyWebpackPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: "./bootstrap.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bootstrap.js"
    },
    mode: "development",
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {from: "./index.html", to: "./"}
            ]
        })
    ]
}