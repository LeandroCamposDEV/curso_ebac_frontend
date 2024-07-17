module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            develoment: {
                options: {
                compress: true,
            },
            files: {
                "dist/main.css": "src/styles/main.less"
            }
        }
    },

        uglify: {
            build: {
            files: {
                    'dist/main.min.js': ['src/scripts/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};