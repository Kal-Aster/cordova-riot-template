const riot = require("rollup-plugin-riot");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const nodeResolve = require("@rollup/plugin-node-resolve").default;
const postcss = require("rollup-plugin-postcss");
const postcssurl = require("postcss-url");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const cordovaPlatforms = fs.existsSync("platforms") ? fs.readdirSync("platforms").filter(f => {
    return fs.lstatSync(path.join("platforms", f)).isDirectory();
}) : [];

export default [
    {
        input: "src/index.ts",
        plugins: [
            nodeResolve(),
            postcss({
                plugins: [ postcssurl({ url: "inline" })/* , autoprefixer() */],
                sourceMap: false,
                extract: false,
                minimize: true
            }),
            commonjs(),
            typescript(),
            riot()
        ],
        output: {
            file: "www/scripts/index.js",
            format: "umd",
            plugins: [
                {
                    name: "cordova-build",
                    writeBundle() {
                        if (cordovaPlatforms.length <= 0) {
                            return;
                        }
                        cordovaPlatforms.forEach(pltf => {
                            console.log("> cordova build " + pltf);
                            execSync("cordova build " + pltf);
                        });
                    }
                }
            ]
        }
    }
];