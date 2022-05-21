module.exports = {
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react','@babel/preset-env'],//preset react- support for react sintax//present-env es6+ transform to e5 for all browsers
                    plugins: ["@babel/plugin-transform-runtime"] //A plugin that enables the re-use of Babel's injected helper code to save on codesize.
                }
            }
        }]
    }
}