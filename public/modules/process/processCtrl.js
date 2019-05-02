app.controller('processController',['$scope','$rootScope', '$sce','$location', 'processService', function($scope, $rootScope,$sce,$location,processService) {
   
    $scope.processinit=function(){
        
        processService.getProcessList().then(function(data) {
            if(data!=undefined){
          console.log(data);
          //  console.log(data[0]);
            $scope.id=data.id;
          //  ckeidtor= angular.element(document.querySelector("#editor1"));
          $scope.content=$sce.trustAsHtml(data.process);  
        }
        }, function(err) {
            console.log(err);
        }).finally(function() {
            
        });
    }        
    
 }]);
 
 