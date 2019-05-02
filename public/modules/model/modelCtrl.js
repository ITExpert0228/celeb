app.controller('modelController',['$scope','$rootScope', '$routeParams','$location', 'modelService', function($scope, $rootScope,$routeParams,$location,modelService) {
   
    $scope.modelinit=function(){
        $id= $routeParams.param1;
        if($id==undefined)
        {
            $location.path('/');
        }
        modelService.getmodelbyid($id).then(function(data) {
           if(data!=undefined){
            console.log(data);
            $scope.model=data; 

                modelService.getmodelsbycate(data.Category,data._id).then(function(data1){
                    if(data1!=undefined){
                        console.log(data1);
                        $scope.modelsbycate=data1; 
                    }
                }, function(err) {
                    console.log(err);
                }).finally(function() {
                    
                });   

            }
            }, function(err) {
                console.log(err);
            }).finally(function() {
                
        });
    }
    $scope.onSubmit=function(){
        
      //  if($scope.Contact_Organization==undefined){return;}
        if($scope.Contact_First_Name==undefined){return;}
        if($scope.Contact_Last_Name==undefined){return;}
        if($scope.Contact_Office_Phone==undefined){return;}
        if($scope.Contact_Email==undefined){return;}
        if($scope.Contact_Address_1==undefined){return;}
        if($scope.Contact_City==undefined){return;}
        if($scope.Contact_State==undefined){return;}
        if($scope.Contact_Zip==undefined){return;}
        if($scope.Contact_Country==undefined){return;}
        if($scope.What_The_Booking_Is_For==undefined){return;}
        if($scope.Event_Location==undefined){return;}
        if($scope.Event_Date_1==undefined){return;}
        if($scope.Fee_Range_A==undefined){return;}
        if($scope.Fee_Range_B==undefined){return;}
        if($scope.Additional_Information==undefined){return;}

        var contactObj = {
            Organization:$scope.Contact_Organization,
            First_Name:$scope.Contact_First_Name,
            Last_Name:$scope.Contact_Last_Name,
            Office_Phone:$scope.Contact_Office_Phone,
            Email:$scope.Contact_Email,
            Address:$scope.Contact_Address_1,
            City:$scope.Contact_City,
            State:$scope.Contact_State,
            Zip:$scope.Contact_Zip,
            Country:$scope.Contact_Country,
            Booking:$scope.What_The_Booking_Is_For,
            Location:$scope.Event_Location,
            Date:$scope.Event_Date_1,
            Fee_Range_A:$scope.Fee_Range_A,
            Fee_Range_B:$scope.Fee_Range_B,
            Additional_Information:$scope.Additional_Information
          };
          modelService.saveContact(contactObj).then(function(data) {
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
 
 