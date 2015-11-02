module.exports = function(grunt) {

grunt.initConfig({
	pkg:grunt.file.readJSON('package.json'),
	less: {
		build: {
        	files: {
        		"public/css/bootstrap.css": "bower_components/bootstrap/less/bootstrap.less"
        	}
    	}
    },
    uglify: {
    	options: {
    		banner:'/*\n <%= pkg.name %> <% grunt.template.today("yyy-mm-dd") %> \n*/\n'
    	},
    	build: {
    		files:{
    			'public/js/vendor.js': ['bower_components/jquery/dist/jquery.js','bower_components/bootstrap/dist/js/bootstrap.js']
    		}
    	}
    },
    browserify: {
      vendor: {
        src: [],
        dest: 'public/js/vendor.bundle.js',
        options: {
          require: ['alt',  'react',  'react-router',  'lodash']
        }
      },

      //standalone browserify watch - do NOT use with grunt-watch
      client: {
        src: ['app/main.js'],
        dest: 'public/js/bundle.js',
        options: {
          watch: true,
          keepAlive: true,
          transform: [
                  ["babelify", {
                     loose: "all"
                  }]
               ]
        }
      }
    },
    watch: {
      styles:{
    		files:['bower_components/bootstrap/less/*.less'],
    		tasks:['less'],
    		options: {
    			nospawn: true
    		}
    	},
    	scripts:{
    		files:['app/*.js', 'app/*/*.js'],
    		tasks:['browserify']
    	}
    }
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-browserify');


grunt.registerTask('default', ['less', 'uglify', 'browserify', 'watch']);
grunt.registerTask('build', ['less', 'uglify', 'browserify']);
};