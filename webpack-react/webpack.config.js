const path = require('path')
// 引入 用于配置index.html
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')  //* 解析css为js


// 从头搭建一个Webpack-React项目,基本配置： https://juejin.cn/post/7027019457599897608

// 分享18个webpack插件：https://blog.51cto.com/u_15809510/5968219
// Webpack指导书：https://tsejx.github.io/webpack-guidebook/best-practice/practical-application/composing-webpack-configuration



// webpack配置模式 和 Node API方式
module.exports = {
    // entry: "./src/app.js",
    entry: "./src/main.jsx",
    mode: 'development',     
    // mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "app.js",
        publicPath: '/dist/'
    },
    
    devServer: {
        // open可以是布尔、数组、对象    配置要打开的页面和要打开的浏览器等等...
        open: false,  //* 编译好后是否自动打开浏览器
        port: 8788,   //* 运行的端口 
        hot: true,    //* 热模块替换
    },
    plugins: [ 
        // new webpack.ProgressPlugin(), // 用于自定义编译过程中的进度报告
        new HtmlWebpackPlugin({ template: "./public/index.html" }), //* 配置index映射路径
    ],
    module: {
        // 配置解析规则 
        rules: [
            // 解析ES6脚本
            {
                test: /\.js$/,                //* 配置解析的文件后缀名
                exclude: /(node_modules)/,    //* 排除编译的文件夹 不做处理的文件夹
                use: {                        //* 应用的解析模块，可以是一个数组，里面的值可以为模块名字符串，模块对象
                    loader: 'babel-loader',   //* 使用 babel-loader进行编译 */
                    options: {                //* 视具体来定，可以是一个字符串或者对象，值会传递到loader里面，为loader选项 */
                        presets: ['env']      //* 选择使用的编译器
                    } 
                }
            },
            // 配置jsx解析器
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,  //对这个不做处理
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']    //在react环境下,也可以进行打包
                    }
                }
            },
            // 解析CSS
            {
                test: /\.css$/,
                // use: [ 'style-loader', 'css-loader' ]
                use: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // 解析SCSS
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            },
            // 处理图片
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    // loader: 'file-loader',
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            },
            // 引入字体图标
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            } 
        ]
    }
    
}