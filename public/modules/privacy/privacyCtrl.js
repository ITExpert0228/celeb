app.controller('privacyController',['$scope','$rootScope', '$sce','$location', 'privacyService', function($scope, $rootScope,$sce,$location,privacyService) {
    $scope.loaderShow=true;
    $scope.loaderContent=false;
    $scope.privacyinit=function(){
        
        privacyService.getProcessList().then(function(data) {
         if(data!=undefined){
          $scope.id=data.id;
          $scope.content=$sce.trustAsHtml(data.privacy);  
        }
        $scope.loaderContent=true;
        $scope.loaderShow=false;
        }, function(err) {
        //    console.log(err);
        }).finally(function() {
            
        });
    }        
    
 }]);
 
 