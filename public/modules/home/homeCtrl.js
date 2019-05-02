app.controller('homeController',['$scope','$rootScope', '$routeParams','$location', 'homeService', function($scope, $rootScope,$routeParams,$location,homeService) {
   
    $scope.homeinit=function(){
        homeService.gethomeList().then(function(data) {
            if(data!=undefined){
            console.log(data);
            }
            }, function(err) {
                console.log(err);
            }).finally(function() {
                
            });
        }
 
    
}]);
 
 