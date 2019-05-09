var app = angular.module('mainApp', ['ngMaterial','ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        templateUrl: 'modules/home/home.html',
		controller: 'homeController'
    }).when('/model/:param1', {
        templateUrl: 'modules/model/model.html',
		controller: 'modelController'
    }).when('/cookie', {
        templateUrl: 'modules/cookie/cookie.html',
		controller: 'cookieController'
    }).when('/performers/:param1/:param2/:param3/:param4', {
        templateUrl: 'modules/performers/performers.html',
		controller: 'performersController'
     }).when('/performers/:param1/:param2', {
        templateUrl: 'modules/performers/performers.html',
		controller: 'performersController'
     }).when('/performers/:param1', {
        templateUrl: 'modules/performers/performers.html',
		controller: 'performersController'
    }).when('/styles/:param1', {
        templateUrl: 'modules/styles/styles.html',
		controller: 'stylesController'
    })
    .when('/customlist', {
        templateUrl: 'modules/customlist/customlist.html',
		controller: 'customlistController'
    }).when('/privacy', {
        templateUrl: 'modules/privacy/privacy.html',
		controller: 'privacyController'
    }).when('/aboutus', {
        templateUrl: 'modules/aboutus/aboutus.html',
	//	controller: 'processController'
    }).when('/process', {
        templateUrl: 'modules/process/process.html',
		controller: 'processController'
    }).when('/request', {
        templateUrl: 'modules/request/request.html',
		controller: 'requestController'
     })
    //.when('/sitemap.xml', {
    //     templateUrl: 'modules/seo/sitemap/sitemap.html',
	// 	controller: 'sitemapController'
    // })
    .otherwise({ redirectTo: '/' });

});


app.controller('getSearchCtrl', ['$scope', '$document', '$window','$location',function ($scope, $document,$window,$location) {
    $scope.search = function($event) {
        if ($event.keyCode == 13) {
            if($scope.searchkeyword!='')
            {
                window.location.href='/performers/Search/'+$scope.searchkeyword;
            }
        }
    }
   

  }]);

