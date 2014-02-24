/*global module:false*/
module.exports = function(grunt) {

  // Configuração.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
     concat: {
        css: {
           src: ['src/css/*'],
           dest: 'build/css/styles.less'
        },
		js: {
			src:  ['src/js/plugins.js', 'src/js/collection.js', 'src/js/view.js', 'src/js/routes.js'],
            dest: 'build/js/scripts.js'
			},
		libs: {
			src:  ['src/libs/less.js','src/libs/jquery-1.11.0.min.js', 'src/libs/underscore-min.js', 'src/libs/backbone-min.js', 'src/libs/ejs_production.js'],
            dest: 'build/libs/libs.js'
			}	
    },
	uglify: {
      js: {
        src: 'build/js/scripts.js',
        dest: 'build/js/scripts.min.js'
      },
	  libs: {
		 src: 'build/libs/libs.js',
         dest: 'build/libs/libs.min.js' 
		  }
    },
	
	clean: {
        build: {
        src: ['build/libs/libs.js', 'build/js/scripts.js']
      },
    }
  });

  // Carrega plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Tarefa default
  grunt.registerTask('default', ['concat', 'uglify', 'clean']);

};
