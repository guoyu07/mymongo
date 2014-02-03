'use strict';
/* ==================================================================
The controller for the top navigation. Also initializes the models
-----------------------------------------------------------------*/

angular.module('phpMongoAdmin').controller('cDatabases', ['$scope', '$rootScope', 'phpMongoAdmin.mDatabase', function($scope, $rootScope, Database) {

	$rootScope.selectedDB = "";

	//==================================================================
	// Called each time the view is loaded or reloaded
	$scope.init = function() {
		$rootScope.selectedDB = "";
		console.log("cDatabases Init");
	};

}]);

