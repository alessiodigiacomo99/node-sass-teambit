let mix = require('laravel-mix');

mix
.sass('src/style.scss', 'css')
    .options({
        processCssUrls: false
    })
.js('src/main.js', 'js')
.setPublicPath('dist');
   
