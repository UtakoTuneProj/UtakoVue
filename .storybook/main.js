const path = require("path");
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
    stories: ['../src/**/*.stories.ts'],
    addons: [
        '@storybook/addon-actions/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('ts-loader'),
                    options: {
                        transpileOnly: true,
                        appendTsSuffixTo: [
                            '\\.vue$'
                        ],
                    },
                },
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
