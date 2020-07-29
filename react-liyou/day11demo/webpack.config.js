const path = require('path');
module.exports={
    entry:'./src/js/index.js',
    output:{
        path: path.join(__dirname, 'dist/js'),
        filename:'bundle.js',
        publicPath:'/js/'
    },
    devServer:{
        contentBase:'./dist',

        inline:true,
        open:true,
        port:9322
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
                test:/\.js$/,
                use:['react-hot-loader','babel-loader'],
                exclude:/node_modules/
        }]
    }

}
