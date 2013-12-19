module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'app/stylesheets/style.css': 'scss/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
    },
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: 'localhost',
          base: 'app'
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%= connect.server.options.port%>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('server', [
    'open',
    'connect',
    'watch'
  ]);
}
