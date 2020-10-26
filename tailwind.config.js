// tailwind.config.js
const production = !process.env.ROLLUP_WATCH; // or some other env var like NODE_ENV
module.exports = {
    future: { // for tailwind 2.0 compat
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    plugins: [
        // other plugins here
    ],
    purge: {
        content: [
            "./src/**/*.svelte",
            // may also want to include base index.html
        ],
        enabled: production // disable purge in dev
    },
    theme: {
        extend: {
            colors: {
                primary: "#fdd835"
            }
        }
    }
};
