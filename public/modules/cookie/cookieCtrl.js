app.controller('cookieController',['$scope','$rootScope', '$sce','$location', 'cookieService', function($scope, $rootScope,$sce,$location,cookieService) {
    $scope.loaderShow=true;
    $scope.loaderContent=false;
    $scope.cookieinit=function(){
        
        cookieService.getProcessList().then(function(data) {
            if(data!=undefined){
            $scope.id=data.id;
            $scope.content=$sce.trustAsHtml(data.cookie);  
            }
            $scope.loaderContent=true;
            $scope.loaderShow=false;

        }, function(err) {
            console.log(err);
        }).finally(function() {
            
        });
    }        
    
 }]);
 
 