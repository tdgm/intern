module.exports = function(grunt) {
 
   // Configuração
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      uglify: {
         options: {
            mangle: false
         },
         my_target: {
            files: [{
               expand: true,
               cwd: 'src/js',
               src: '**/*.js',
               dest: 'build/js/',
               ext: '.min.js'
            }]
         }
      },
      
      less: {
         'build/css/style.css': 'src/css/*.less'
      },
      
      cssmin: {
         minify: {
            expand: true,
            cwd: 'src/css',
            src: ['*.css'],
            dest: 'build/css',
            ext: '.min.css'
         }
      },
  
      concat: {
         basic: {
            src: ['build/css/*.min.css'],
            dest: 'build/css/concat/style.css'
         }
      },
  
      imagemin: {
         png: {
            options: {
               optimizationLevel: 1
            },
            files: [{
               expand: true,
               cwd: 'src/img/',
               src: ['**/*.png'],
               dest: 'build/img/'
            }]
         },
         jpg: {
            options: {
               progressive: true
            },
            files: [{
               expand: true,
               cwd: 'src/img/',
               src: ['**/*.jpg'],
               dest: 'build/img/'
            }]
         }
      }
   });
 
   // Plugins
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-imagemin');
 
   // Tarefas
   grunt.registerTask( 'default', [ 'uglify', 'less', 'cssmin', 'concat', 'imagemin' ] );
 
};