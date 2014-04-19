'use strict';

angular.module('stoogeBloggersApp')
	.controller('BlogCtrl', function ($scope, Blog, Authors) { //"Blog" is the name of the service and "Authors is the name of another service"

	  	$scope.blogPosts = Blog.getPosts();
	  	$scope.blogAuthors = Authors.getAuthors();
	  	$scope.selectIndex = 0;

	  	$scope.searchByAuthor = function(authorName){
	  		if (authorName === "All"){
	  			$scope.search = "";
	  		}
	  		else{
	  			$scope.search = authorName;
	  		};
	  	};

	  	$scope.navClick = function($index) {
	  		$scope.selectIndex = $index;
	  		console.log($index);
	  	};

	  	
	    // $scope.awesomeThings = [
	    //   'HTML5 Boilerplate',
	    //   'AngularJS',
	    //   'Karma'
	    // ];

  });
