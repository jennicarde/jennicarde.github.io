module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
          width: 320,
          quality: 50
        }, {
          name: 'large',
          width: 640,
          quality: 50
        }, {
          name: "large",
          width: 1024,
          suffix: "_x2",
          quality: 60
        }]
      },
      files: [{
        expand: true,
        src: ['*.{gif,jpg,png}'],
        cwd: 'images-src/',
        dest: 'images/'
      }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
