const {series, src, dest} = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');



function build() {
    return src('src/index.js')
        .pipe(rename({ basename: 'ajax' }))
        .pipe(dest('dist/'))
        .pipe(uglify())
        .pipe(rename({ basename: 'ajax', extname: '.min.js'}))
        .pipe(dest('dist/'))
}

exports.build = build;
exports.default = series(build);
