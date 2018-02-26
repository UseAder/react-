var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
 var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
/*
1.建立一个任务，控制台直接输出字符串
2.新建一个index.html文件，并复制一个文件到dist目录下
3.建立一个images目录，下面包含png/jpg/gif等不同的文件类型，
  1)把png类型复制到dist/images下
  2)把png,jpg类型复制到dist/images下
  3)把所有文件复制到dist/images下
4.建立一个data目录，里面创建xml及json文件夹，然后放置相应的文件
  1)把不同的目录文件xml/json下的文件，复制到dist/data目录下
  2)将json下的secret.json文件排除在复制的工作之外
5.设置本地服务器
6.sass转化
7.less转化
8.js的代码合并操作，丑化，压缩
9.添加监视器任务
10.设置默认任务
11.实时刷新reload的操作
*/
//1
gulp.task('hello',function(){
  console.log('hello');
});

//2
//复制单一文件
gulp.task('copy-index',function(){
  // 这是默认的操作
  return gulp.src('index.html').pipe(gulp.dest('dist'));
  // 这是设置connect服务以后进行的操作
  // return gulp.src('index.html').pipe(gulp.dest('dist')).pipe(connect.reload());
});

//3
//复制指定目录某一类文件类型、不同文件类型以及所有当前及子目录文件
gulp.task('images',function(){
  //return gulp.src('images/*.jpg').pipe(gulp.dest('dist/images'));
  //return gulp.src('images/*.{jpg,png}').pipe(gulp.dest('dist/images'));
  //return gulp.src('images/**/*').pipe(gulp.dest('dist/images'));

  //再加了imagemin以后操作
  return gulp.src('images/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'));
});

//4
gulp.task('copyDataFile',function(){
  return gulp.src(['xml/*.xml','json/*.json','!json/secret.json']).pipe(gulp.dest('dist/data'));
})
//5
//设置服务器
gulp.task('server',function(){
  connect.server({
    root:'dist',
    livereload:true
  });
});

gulp.task('sassToCss',function(){
	return gulp.src('style.scss')
	.pipe(sass())
	.pipe(minifyCss())
	.pipe(gulp.dest('dist/css'));
})

gulp.task('copyImages',function(){
	// return gulp.src('index.html').pipe(gulp.dest('dist'));
	return gulp.src('images/**/*').pipe(gulp.dest('dist/images'));
})

//将不同的目录文件复制到指定的同一目录
// 将不同的目录文件复制到指定的同一目录并排除指定文件内容
gulp.task('data',function(){
  // return gulp.src(['xml/*.xml','json/*.json']).pipe(gulp.dest('dist/data'));
  return gulp.src(['xml/*.xml','json/*.json','!json/secret.json'])
  .pipe(gulp.dest('dist/data'));
});

//将几个不同的任务内容放置在一个任务里进行处理
gulp.task('build',['copy-index','images','data'],function(){
  console.log('编译完成');
});

//添加监视器任务
gulp.task('watch',function(){
  //gulp.watch('监控对象',['执行任务的名称,在之前一定要先定义好的']);
  gulp.watch('stylesheet/**/*.scss',['sass']);
  gulp.watch('index.html',['copy-index']);
  gulp.watch('images/**/*.{jpg.png}',['images']);
  gulp.watch(['xml/*.xml','json/*.json','!json/secret.json'],['data']);
})

//添加sass操作
gulp.task('sass',function(){
  return gulp.src('stylesheet/**/*.scss')
  .pipe(sass())
  .pipe(minifyCss())
  .pipe(gulp.dest('dist/css'))
  .pipe(connect.reload())
})

//添加sass操作
gulp.task('less',function(){
  return gulp.src('stylesheet/**/*.less')
  .pipe(less())
  //再加了minifyCss以后操作
  .pipe(minifyCss())
  .pipe(gulp.dest('dist/css'));
})

//设置concat，js代码合并
gulp.task('scripts',function(){


  return gulp.src(['javascripts/index.js','javascripts/test.js'])
  .pipe(concat('vendor.js'))
  //再加了rename以后操作
  .pipe(gulp.dest('dist/js'))
  //再加了uglify以后操作
  .pipe(uglify())
  .pipe(rename('vendor.min.js'))
  .pipe(gulp.dest('dist/js'));
});


//默认模式操作
// gulp.task('default',['hello','copy-index','images']);

//设置了server以后的操作
gulp.task('default',['server','watch','images']);