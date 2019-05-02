var app = angular.module('mainApp', ['ngRoute']);

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
    }).when('/performers/:param1/:param2', {
        templateUrl: 'modules/performers/performers.html',
		controller: 'performersController'
     }).when('/performers/:param1', {
        templateUrl: 'modules/performers/performers.html',
		controller: 'performersController'
    }).when('/privacy', {
        templateUrl: 'modules/privacy/privacy.html',
		controller: 'privacyController'
    }).when('/process', {
        templateUrl: 'modules/process/process.html',
		controller: 'processController'
    }).when('/request', {
        templateUrl: 'modules/request/request.html',
		controller: 'requestController'
    })
    .otherwise({ redirectTo: '/' });

});


app.controller('getSearchCtrl', ['$scope', '$document', '$window','$location',function ($scope, $document,$window,$location) {
    $scope.search = function($event) {
        if ($event.keyCode == 13) {
            console.log("event.keyCode:"+$scope.searchkeyword);
            if($scope.searchkeyword!='')
            {
                window.location.href='/performers/Search/'+$scope.searchkeyword;
            }// const search_ENDPOINT   = '/api/celebdata' ;
            // var url=search_ENDPOINT+"/getmodelsbyname?name="+$scope.searchkeyword;
            // return $http.get(url).then(function(response, status) {
            //     if (response.data == null) return null;
            //     return response.data;
            // });
                // var inputkeyword=$scope.searchkeyword;
                // var capsInput = inputkeyword.split(' '),
                //     newInput = [];
                // angular.forEach(capsInput,function(val,index){
                //     newInput.push(val.substr(0,1).toUpperCase()+val.substr(1));   
                // });
                // inputkeyword= newInput.join(' ');
                // $window.location.href = '/partentertainment/'+inputkeyword;
        }
    }
   

  }]);

