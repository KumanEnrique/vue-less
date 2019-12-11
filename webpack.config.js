const path = require('path')
const HTMLWebpackPlgin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry:"./src/index.js",
    output:{
        path:path.resolve(__dirname,"build"),
        filename:"index.bundle.js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:"/node_modules/",
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test:/\.vue$/,
                use:{
                    loader:"vue-loader"
                }
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlgin({
            template:"./src/index.html"
        }),
        new VueLoaderPlugin()
    ]
}