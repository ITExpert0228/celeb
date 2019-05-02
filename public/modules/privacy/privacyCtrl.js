app.controller('privacyController',['$scope','$rootScope', '$sce','$location', 'privacyService', function($scope, $rootScope,$sce,$location,privacyService) {
   
    $scope.privacyinit=function(){
        
        privacyService.getProcessList().then(function(data) {
         if(data!=undefined){
          console.log(data);
          //  console.log(data[0]);
            $scope.id=data.id;
          //  ckeidtor= angular.element(document.querySelector("#editor1"));
          $scope.content=$sce.trustAsHtml(data.privacy);  
        }
        }, function(err) {
            console.log(err);
        }).finally(function() {
            
        });
    }        
    
 }]);
 
 