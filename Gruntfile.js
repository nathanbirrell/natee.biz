module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/style.css': '_scss/style.scss'
        }        
      }
    },

    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, src: ['bower_components/modernizr/modernizr.js'], dest: 'js/vendor/modernizr.js', filter: 'isFile'},
          {expand: true, src: ['bower_components/foundation/js/foundation.min.js'], dest: 'js/foundation.min.js', filter: 'isFile'},
          {expand: true, src: ['bower_components/jquery/jquery.js'], dest: 'js/jquery.js', filter: 'isFile'}
        ],
      },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: '_scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass','copy']);
  grunt.registerTask('default', ['build','watch']);
}