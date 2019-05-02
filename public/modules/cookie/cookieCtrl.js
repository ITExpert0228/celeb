app.controller('cookieController',['$scope','$rootScope', '$sce','$location', 'cookieService', function($scope, $rootScope,$sce,$location,cookieService) {
   
    $scope.cookieinit=function(){
        
        cookieService.getProcessList().then(function(data) {
            if(data!=undefined){
          console.log(data);
          //  console.log(data[0]);
            $scope.id=data.id;
          //  ckeidtor= angular.element(document.querySelector("#editor1"));
          $scope.content=$sce.trustAsHtml(data.cookie);  
        }
        }, function(err) {
            console.log(err);
        }).finally(function() {
            
        });
    }        
    
 }]);
 
 