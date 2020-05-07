import webpack from 'webpack';
import * as paths from './path.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import CleanWebpackPlugin from 'clean-webpack-plugin';
const isDev = process.argv.includes('--dev');

const webpackConfig: webpack.Configuration = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-eval-source-map',
    entry: {
        main: './src/entries/index.tsx',
    },

    output: {
        path: paths.BUILD_DIR,
        publicPath: '',
        filename: 'scripts/[name].js',
        chunkFilename: 'scripts/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'style-loader',
                    {
                        loader:'cache-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDev ? true : false,
                            modules:{
                                localIdentName: isDev ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]'
                            },
                            importLoaders: 1
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap: isDev ? true : false,
                        },
                    }
                ],
                include: paths.SRC_DIR,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/entries/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
            },
            hash: true
        })
    ],
    devServer: {
        port: 8090,
        host: 'localhost',
        contentBase: paths.BUILD_DIR,
    }
};
export default webpackConfig;