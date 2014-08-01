module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: ['lib/qr-code.js'],
        tasks: ['uglify']
      },
    },
    uglify: {
      build: {
        src: 'lib/qr-code.js',
        dest: 'build/qr-code.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify']);
}