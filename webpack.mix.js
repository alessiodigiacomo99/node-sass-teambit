let mix = require('laravel-mix');

mix
.sass('src/style.scss', 'css')
.js('src/main.js', 'js')
.setPublicPath('dist');