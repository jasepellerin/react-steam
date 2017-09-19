const webpackConfig = require('./webpack.config.js')
const webpackProdConfig = require('./webpack.prod.config.js')

/* eslint global-require: "off" */
module.exports = function exports(grunt) {
  // Project configuration.
  grunt.initConfig({
    clean: {
      dist: 'dist',
      temp: 'temp'
    },
    copy: {
      css: {
        files: [
          {
            expand: true,
            cwd: 'source/static/css',
            src: ['**'],
            dest: 'temp/css'
          }
        ]
      },
      content: {
        files: [
          {
            expand: true,
            cwd: 'source/static/content',
            src: ['**'],
            dest: 'dist/content'
          }
        ]
      },
      html: {
        files: [
          {
            expand: true,
            cwd: 'source/static/html',
            src: ['**'],
            dest: 'dist/html'
          }
        ]
      },
      images: {
        files: [
          {
            expand: true,
            cwd: 'source/static/images',
            src: ['**'],
            dest: 'dist/images'
          }
        ]
      }
    },
    cssmin: {
      target: {
        files: [{
          src: 'temp/css/*.css',
          dest: 'dist/css/main.min.css'
        }]
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')
        ]
      },
      dist: {
        src: 'temp/css/*.css'
      }
    },
    sass: {
      dist: {
        options: {
          loadPath: [
            require('node-bourbon').includePaths,
            require('node-neat').includePaths
          ]
        },
        files: {
          'temp/css/main.css': 'source/sass/main.scss'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dist/scripts/bundle.min.js': ['temp/scripts/bundle.js']
        }
      }
    },
    webpack: {
      dev: webpackConfig,
      prod: webpackProdConfig
    },

    // Watch for any changes and call associated task
    watch: {
      options: {
        event: ['changed', 'added', 'deleted']
      },
      css: {
        files: ['source/static/css/*.css', 'source/sass/**/*.scss'],
        tasks: ['sass', 'copy:css', 'postcss',
          'cssmin', 'clean:temp']
      },
      static: {
        files: 'source/static/**/*',
        tasks: ['copy']
      },
      scripts: {
        files: ['source/scripts/**/*'],
        tasks: ['webpack:dev', 'clean:temp']
      }
    }
  })

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-sass')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-postcss')
  grunt.loadNpmTasks('grunt-webpack')

  // Default task
  grunt.registerTask('default', ['sass', 'copy', 'webpack:dev', 'postcss',
    'cssmin', 'clean:temp', 'watch'])

  // Production build
  grunt.registerTask('buildProd', ['clean:dist', 'sass', 'copy', 'webpack:prod',
    'postcss', 'cssmin', 'uglify', 'clean:temp'])

  // Wipe dist and then watch
  grunt.registerTask('cleanWatch', ['clean:dist', 'default'])
}
