app.controller('requestController',['$scope','$rootScope', '$sce','$location', 'requestService','$mdDialog', function($scope, $rootScope,$sce,$location,requestService,$mdDialog) {
   
  
    $scope.onSubmit=function(ev){
        
      //  if($scope.Contact_Organization==undefined){return;}
        if($scope.Contact_First_Name==undefined){return;}
        if($scope.Contact_Last_Name==undefined){return;}
        if($scope.Contact_Office_Phone==undefined){return;}
        if($scope.Contact_Email==undefined){return;}
        if($scope.What_The_Booking_Is_For==undefined){return;}
        if($scope.Event_Name==undefined){return;}
        if($scope.Event_Location==undefined){return;}
        if($scope.Event_Date_1==undefined){return;}
        if($scope.Specific_Talent_of_Interest==undefined){return;}
        if($scope.Contact_Organization==undefined){return;} 
        if($scope.Contact_Title==undefined){return;}
        if($scope.Fee_Range_A==undefined){return;}
        if($scope.Fee_Range_B==undefined){return;}
        if($scope.Additional_Information==undefined){return;}
        var contactObj = {
            Organization:$scope.Contact_Organization,
            Title:$scope.Contact_Title,
            First_Name:$scope.Contact_First_Name,
            Last_Name:$scope.Contact_Last_Name,
            Office_Phone:$scope.Contact_Office_Phone,
            Email:$scope.Contact_Email,
            EventName:$scope.Event_Name,
            Specific_Talent_of_Interest:$scope.Specific_Talent_of_Interest,
            Booking:$scope.What_The_Booking_Is_For,
            Location:$scope.Event_Location,
            Date:$scope.Event_Date_1,
            Fee_Range_A:$scope.Fee_Range_A,
            Fee_Range_B:$scope.Fee_Range_B,
            Additional_Information:$scope.Additional_Information
          };
          requestService.saveContact(contactObj).then(function(data) {
            if(data!=undefined){
           // console.log(data);
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Request State')
                .textContent('Your Request has sent correctly to the server!.')
                .ariaLabel('Alert Dialog Demo')
                .ok('OK!')
                .targetEvent(ev)
            );
            }
            }, function(err) {
            //    console.log(err);
            }).finally(function() {
                
        });

    }
    
 }]);
 
 