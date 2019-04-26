
var mainApp = angular.module("mainApp", ['ui.router']);
mainApp.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

$urlRouterProvider.otherwise('/home');
$locationProvider.html5Mode(true);
$stateProvider.state('home', {
        url: '/home',
        templateUrl: 'homes.handlebars'
    })
    .state('entertainment', {
         url: '/entertainment',
        templateUrl: 'entertainment.handlebars',
        controller: 'entertainmentAllController'
    })
    .state('contactus', {
         url: '/contactus',
        templateUrl: 'contactus.handlebars',
        controller: 'contactusController'
    })
    .state('about', {
        // we'll get to this in a bit       
    });
});

mainApp.controller('entertainmentAllController', function ($scope, $rootScope,$http) {
//contentArray
    if($scope.value==true){
    $scope.data = false;
    
    $url='/entertainment/getAll' ;
    $usrw=$url;
    console.log( $usrw);
      $count=0;
     $http.get($url).then(function mySuccess(response, status) {
       // $scope.contentArray=response.data;
       $scope.contentArray=[];
         $scope.data = true;
         $scope.data1 = false;
        angular.forEach(response.data, function(value, key){
       if($count<14)
       {
          $scope.contentArray.push(value);
           $count++;
       }
       });
        console.log( $scope.contentArray);
        }, function myError(response) {
     });
     $scope.value=false;
    }else{$scope.value=true;}

    $scope.saveContent=function() {
   // alert("save ok!");
       /* $scope.id=id;
        $scope.title=title;
        $scope.profileurl=profileurl;
        $scope.tag=tag;
        $scope.events=eventstype;
        $scope.reason=reason;
        $scope.location=location;
        $scope.video=vediosrc;
        $scope.images=images;
        $scope.Biography=Biography;
        $scope.PreviousClients=PreviousClients;
        $scope.Testimonials=Testimonials;
        $scope.SetList=SetList;*/
        $url='/entertainment/savecontent?id='+$scope.id+'&title='+$scope.title;//+'&profileurl='+JSON.stringify($scope.profileurl);//+'&tag='+JSON.stringify($scope.tag);
        $http.get($url).then(function mySuccess(response, status) {
       alert("save ok!");
        }, function myError(response) {
          alert("save fail!");
        });		
     }
      $scope.SetDate=function(id,title,profileurl,tag,eventstype,reason,location,vediosrc,images,Biography,PreviousClients,Testimonials,SetList) {
              $scope.id=id;
              $scope.title=title;
              $scope.profileurl=profileurl;
              $scope.tag=tag;
              $scope.events=eventstype;
              $scope.reason=reason;
              $scope.location=location;
              $scope.video=vediosrc;
              $scope.images=images;
              $scope.Biography=Biography;
              $scope.PreviousClients=PreviousClients;
              $scope.Testimonials=Testimonials;
              $scope.SetList=SetList;

     }
});
mainApp.controller('contactusController', function($scope,  $rootScope,$http) {
$url='/contactus/getAll' ;

$http.get($url).then(function mySuccess(response, status) {
         
       $scope.contactusarray = [];
       $count=0;
       angular.forEach(response.data, function(value, key){
       if($count<2000)
       {
          $scope.contactusarray.push(value);
           $count++;
       }
       });
       }, function myError(response) {
}).finally(function () {

});
$scope.SetData=function(id) {
alert(id);
//    $scope.count++;
}

});
mainApp.controller('signupController', function($scope,  $rootScope,$http) {
$url='/signup/getAll' ;
    $usrw=$url;
    console.log( $usrw);
     $http.get($url).then(function mySuccess(response, status) {
        $scope.myArray=response.data;
        console.log( "sssss");
        }, function myError(response) {
        });	
        $scope.savecsv=function()
        {
           
            var table = document.getElementById('example24');
            var csvString = '';
            for(var i=0; i<table.rows.length;i++){
                var rowData = table.rows[i].cells;
                for(var j=0; j<rowData.length;j++){
                    csvString = csvString + rowData[j].innerHTML + ",";
                }
                csvString = csvString.substring(0,csvString.length - 1);
                csvString = csvString + "\n";
            }
             csvString = csvString.substring(0, csvString.length - 1);
             var a = $('<a/>', {
                style:'display:none',
                href:'data:application/octet-stream;base64,'+btoa(csvString),
                download:'emailStatistics.csv'
            }).appendTo('body')
            a[0].click()
            a.remove();
        }	
});
$(document).ready(function() {
/*$('#example23').DataTable({
    dom: 'Bfrtip',
    buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
    ]
});*/
});
