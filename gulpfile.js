const gulp = require('gulp'); //usar as funcionalidades do gulp
const sass = require('gulp-sass')(require('sass')); //configura o gulp para processar arquivos Sass

function styles(){
    return gulp.src('./src/styles/*.scss') //mostra ao gulp os arquivos Sass a serem processados
    .pipe(sass({outputSytle: 'compressed'})) //comprime arquivos
    .pipe(gulp.dest('./dist/css')); //envia arquivos css comprimidos para pasta dist
}

exports.default = styles //adciona função como padrão ao rodar o gulp
exports.watch = function (){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
} //observar alterações gulp
