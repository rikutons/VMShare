// gulpプラグインの読み込み
const {task, watch, src, dest} = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");

const compileSass = () => {
    // title.sassファイルを取得
    return (
        src("src/sass/style.sass")
        .pipe(sassGlob())
        // Sassのコンパイルを実行
        .pipe(sass({
            outputStyle: "expanded"
        })
            .on("error", sass.logError)
        )
        // cssフォルダー以下に保存
        .pipe(dest("public/stylesheets"))
    );
}

const watchSassFiles = () => watch("src/sass/**", compileSass);

exports.default = watchSassFiles;