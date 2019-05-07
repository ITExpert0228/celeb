app.controller('processController',['$scope','$rootScope', '$sce','$location', 'processService', function($scope, $rootScope,$sce,$location,processService) {
    $scope.loaderShow=true;
    $scope.loaderContent=false;
    $scope.processinit=function(){
       processService.getProcessList().then(function(data) {
            if(data!=undefined){
            $scope.id=data.id;
            $scope.content=$sce.trustAsHtml(data.process);  
           }
           $scope.loaderContent=true;
           $scope.loaderShow=false;
        }, function(err) {
            console.log(err);
        }).finally(function() {
            
        });
    }        
    
 }]);
 
 