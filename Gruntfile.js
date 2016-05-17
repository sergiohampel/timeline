"use strict";

module.exports = function( grunt ) {
	// Definição dos arquivos js
	var libsJS = [
		'public_components/angular/angular.min.js',
		'public_components/angular-route/angular-route.min.js',
		'public_components/angular-animate/angular-animate.min.js',
		'public_components/angular-touch/angular-touch.min.js',
		'public_components/angular-loading-bar/build/loading-bar.min.js',
	],
	sourceJS = [
		'src/js/app.js',
		'src/js/config/route.js',
		'src/js/config/constant.js',
		'src/js/services/request-data.service.js',
		'src/js/controllers/timeline.controller.js',
		'src/js/filters/search-user.filter.js',
		'src/js/filters/search-location.filter.js',
		'src/js/directives/toggle-filter.directive.js'
	];

	// Load all tasks
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		// Watch
		watch: {
			css: {
				files: [ 'src/sass/**/*' ],
				tasks: [ 'compass:src', 'concat:css' ]
			},

			js: {
				files: 'src/js/**/*',
				tasks: [ 'concat:jsLibs', 'concat:js' ]
			}
		},

		// Compass scss
		compass: {
			src: {
				options: {
					config: 'config.rb'
				}
			},

			dist: {
				options: {
					force: true,
					config: 'config.rb',
					outputStyle: 'compressed',
					relativeAssets: true
				}
			}
		},

		// Concateção dos arquivos CSS e JS
		concat: {
			css: {
				src: 'src/css/main.css',
				dest: 'dist/css/styles.combined.min.css'
			},

			jsLibs: {
				src: libsJS,
				dest: 'dist/js/libs.combined.min.js'
			},

			js: {
				src: sourceJS,
				dest: 'dist/js/scripts.combined.min.js'
			}
		},

		// Concateção e minificação dos arquivos e JS
		uglify: {
			options: {
				mangle: false
			},

			dist: {
				files: {
					'dist/js/libs.combined.min.js': libsJS,
					'dist/js/scripts.combined.min.js': sourceJS
				}
			}
		},

		// Otimização das imagens
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/images',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/images'
				}]
			}
		},

		browserSync: {
			files: {

				// Aplicando o recurso de Live Reload nos seguintes arquivos
				src : [
					'dist/css/styles.combined.min.css',
					'dist/js/scripts.combined.min.js',
					'**/*.html',
					'**/*.php'
				]

			},

			options: {

				// Definindo um IP manualmente
				// host : "192.168.1.104",

				// Integrando com a tarefa "watch"
				watchTask: true,

				// Sincronizando os eventos entre os dispositívos
				ghostMode: {
					clicks: true,
					scroll: true,
					links: true,
					forms: true
				}
			}
		}
	});

	// registrando tarefa default
	grunt.registerTask( 'default', [ 'browserSync', 'watch' ] );
	grunt.registerTask( 'img', [ 'imagemin' ] );
	grunt.registerTask( 'src', [ 'compass:src', 'concat:js', 'concat:css' ] );
	grunt.registerTask( 'dist', [ 'compass:dist', 'uglify:dist', 'concat:css', 'imagemin' ] );
};