module.exports = function() {
  $.gulp.task("img:dev", () => {
    return $.gulp
      .src("./app/resources/images/**/*.{png,jpg,gif,svg}")
      .pipe($.gulp.dest("./dist/assets/images/"));
  });

  $.gulp.task("img:build", () => {
    return $.gulp
      .src("./app/resources/imgs/**/*.{png,jpg,gif}")
      .pipe($.gp.tinypng(YOUR_API_KEY))
      .pipe($.gulp.dest("./dist/assets/imgs/"));
  });

  $.gulp.task("svg:copy", () => {
    return $.gulp
      .src("./app/resources/imgs/svg/**/*.svg")
      .pipe($.gulp.dest("./dist/assets/imgs/svg/"));
  });
};
