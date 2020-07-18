const path = require("path");

module.exports = {
    stories: ['../src/**/*.stories.ts'],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {loader: require.resolve('ts-loader')}
            ],
        }, {
            test: /\.s[ca]ss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
        });
        config.resolve.alias = {
            vue: "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "../src"),
            "~": path.resolve(__dirname, "../src"),
        };
        config.resolve.extensions.push('.ts', '.tsx');
        return config;
    },
};
