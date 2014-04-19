'use strict';

angular.module('stoogeBloggersApp')
  .service('Authors', function Authors() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    	return{
    		getAuthors: function() {
    			return ["All", "Moe", "Curly", "Larry"];
    		}
    	}
  });
