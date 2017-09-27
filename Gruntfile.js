const webpackConfig = require('./webpack.config.js')
const webpackProdConfig = require('./webpack.prod.config.js')

/* eslint global-require: "off" */
module.exports = function exports(grunt) {
  // Project configuration.
  grunt.initConfig({
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
      },
      your_target: {
        src: 'temp/css/*.css'
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src: ['dist/', 'source/templates/']
        },
        options: {
          open: false,
          proxy: 'localhost:4000',
          reloadDelay: 2000
        }
      }
    },
    clean: {
      dist: 'dist',
      temp: 'temp'
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch', 'browserSync'],
        options: {
          logConcurrentOutput: true
        }
      }
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
    nodemon: {
      dev: {
        script: 'server/index.js',
        options: {
          exec: 'babel-node',
          env: {
            PORT: '4000'
          }
        }
      }
    },
    sass: {
      dist: {
        options: {
          loadPath: [
            'node_modules/foundation-sites/scss'
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
        tasks: ['sass', 'copy:css', 'autoprefixer',
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
  grunt.loadNpmTasks('grunt-autoprefixer')
  grunt.loadNpmTasks('grunt-browser-sync')
  grunt.loadNpmTasks('grunt-concurrent')
  grunt.loadNpmTasks('grunt-nodemon')
  grunt.loadNpmTasks('grunt-webpack')

  // Default task
  grunt.registerTask('default', ['sass', 'copy', 'webpack:dev', 'autoprefixer',
    'cssmin', 'clean:temp', 'concurrent'])

  // Load concurrent tasks without initial build
  grunt.registerTask('start', ['concurrent'])

  // Production build
  grunt.registerTask('buildProd', ['clean:dist', 'sass', 'copy', 'webpack:prod',
    'autoprefixer', 'cssmin', 'uglify', 'clean:temp'])

  // Wipe dist and then watch
  grunt.registerTask('cleanWatch', ['clean:dist', 'default'])
}
