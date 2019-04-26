app.controller('userCtrl',['$scope','$timeout', '$location','userService','authService', function($scope, $timeout,$location,userService,authService) {
 
    $scope.$on('$viewContentLoaded', function(){
     
        var editor; // use a global for the submit and return data rendering in the examples
         $(document).ready(function() {
         editor = new $.fn.dataTable.Editor( {
                table: "#example",
                ajax: "/api/users/save",
                idSrc:  'id',
                fields: [ 
                    {
                       label: "Id:",
                        name: "id",
                        type: "hidden"
                    }, {
                        label: "Email:",
                        name: "loginEmail",
                    }, {
                        label: "First name:",
                        name: "firstName"
                    }, {
                        label: "Last name:",
                        name: "lastName"
                    }, {
                        label: "Password:",
                        name: "password1",
                        type: "password"
                    }, 
                    {
                        label: "Repeat Password:",
                        name: "RepeatPassword",
                        type: "password"
                    },{
                        label: "role:",
                        name: "role",
                        type: "hidden"
                    }
                ]
            } );

           
    
            $('#example').DataTable( {
                dom: "Bfrtip",
                "scrollX": true,
                "pageLength": 10,
                buttons: [
                    'copyHtml5',
                    'excelHtml5',
                    'csvHtml5',
                 
                    { extend: "create", editor: editor },
                    { extend: "edit",   editor: editor },
                    { extend: "remove", editor: editor }
                ],
               "ajax": "/api/users",
                columns: [
                    { "data": "id" },
                    { "data": "loginEmail" },
                    { "data": "firstName" },
                    { "data": "lastName" },
                    { "data": "role"}
                ],
                "columnDefs": [
                    {
                        "targets": [ 0 ],
                        "visible": false,
                        "searchable": false
                    },
                    {
                        "targets": [ 4 ],
                        "visible": false,
                        "searchable": false
                    }
                ],
                select: {
                    style: 'single'
                }
             });
        });
               
    });
  $scope.getuserList = function() {
    userService.getuserList().then(function(data) {
        $scope.userarray=[];
        console.log($scope.userarray);
        $count=0;
        angular.forEach(data, function(value, key){
        if($count<200)
        {
           $scope.userarray.push(value);
            $count++;
        }
        });
       $timeout($('.table').trigger('footable_redraw'), 300);
    }, function(err) {
        console.log(err);
    }).finally(function() {
        
    });
  
  }
  $scope.logout = function() {
    authService.logout().then(function() {
        $location.path('/admin/login');
      //  window.location.href = '/admin/login';
    });
}
//   $scope.SetData=function(_id,title,profileurl,tag,eventstype,reason,location,vediosrc,images,Biography,PreviousClients,Testimonials,SetList){
//       $scope.id=_id;
//       $scope.title=title;
//       $scope.profileurl=profileurl;
//       $scope.tag=tag;
//       $scope.eventstype=eventstype;
//       $scope.reason=reason;
//       $scope.location=location;
//       $scope.vediosrc=vediosrc;
//       $scope.images=images;
//       $scope.Biography=Biography;
//       $scope.PreviousClients=PreviousClients;
//       $scope.Testimonials=Testimonials;
//       $scope.SetList=SetList;
//    }
//   $scope.saveContent=function() {

//     if ($scope.id == '') {
//     //  $('#materialRegisterFormPasswordConfirm').addClass('is-invalid');
//       return;
//     }
//   var contentObj = {
//       title:$scope.title,
//       profileurl:$scope.profileurl,
//       tag:$scope.tag,
//       eventstype:$scope.eventstype,
//       reason:$scope.reason,
//       location:$scope.location,
//       vediosrc:$scope.vediosrc,
//       images:$scope.images,
//       Biography:$scope.Biography,
//       PreviousClients:$scope.PreviousClients,
//       Testimonials:$scope.Testimonials,
//       SetList:$scope.SetList  
//   };
  

//     userService.saveContent($scope.id,contentObj).then(function(data) {
//           alert("save ok!");
//          }, function(err) {
//           alert("save failed!");
//           console.log(err);
//       });
//     }
}]);
