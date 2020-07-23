const path = require("path");
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
    stories: ['../src/**/*.stories.ts'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {loader: require.resolve('ts-loader')},
            ],
        }, {
            test: /\.s[ca]ss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        }, {
            test: /\.(png|jpe?g|gif|svg|ico)$/i,
            use: [
                {
                    loader: 'file-loader',
                }
            ],
        });
        config.plugins.push(new VuetifyLoaderPlugin())
        config.resolve.alias = {
            vue: "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "../src"),
            "~": path.resolve(__dirname, "../src"),
        };
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
