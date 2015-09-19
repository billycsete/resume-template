Resume Template
=====

Simple template for awesome resumes

### Demo
http://billy.codes/that/resume-template/

### Instructions
1. clone repo
2. npm install
3. gulp
4. add your resume sections
5. replace the profile image
6. skin template in [_colors.scss](https://github.com/wcsete/resume-template/blob/master/src/scss/settings/_colors.scss)
7. ball so hard because you just got a new job


### Build
`gulp` - default build:

1. sass
2. autoprefixer
3. minify css
4. jshint
5. browserify
6. uglify
7. optimize images
8. copy all the things to /dist/

`gulp watch` - sets up Live Reload connection and watches for changes
