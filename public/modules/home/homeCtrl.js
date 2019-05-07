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
    $scope.onSubmit=function(){
        if($scope.name==undefined){return;}
        if($scope.email==undefined){return;}
        if($scope.phone==undefined){return;}
        if($scope.message==undefined){return;}
             var contactObj = {
                Full_Name:$scope.name,
                Phone:$scope.phone,
                Email:$scope.email,
                Message:$scope.message,
                };
          homeService.saveContactus(contactObj).then(function(data) {
            if(data!=undefined){
            console.log(data);
            alert(data);
            }
            }, function(err) {
                console.log(err);
            }).finally(function() {
                
        });
    }
    
}]);
 
 