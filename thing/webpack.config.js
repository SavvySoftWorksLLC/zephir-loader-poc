var ZephirWatcherPlugin = require('zephir-watcher-plugin');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: { loaders: [] },
    plugins: [new ZephirWatcherPlugin({basePath: __dirname + '/thing'})]
};
