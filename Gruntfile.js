module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: '396638509@qq.com',
                token: 'de3844b8-dd31-4424-a1ef-f0bea919ad46',
                branch: 'default',
                // server: 'season'
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.{js,wasm}'],
                        flatten: true
                    }
                ]
            }
        }
    });
}