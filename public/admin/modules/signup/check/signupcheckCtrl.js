app.controller('signupcheckCtrl',['$scope', '$location','signupcheckService','$rootScope','authService', function($scope,$location, signupcheckService,$rootScope,authService) {
 
   
    $scope.signupcheckinit=function(){
        $id  = $rootScope.someText;
        console.log( $id);
        if($id==undefined){
            $location.path("/");
        }
        signupcheckService.getsignupcheckList($id).then(function(data) {
            $scope.signuparray=data;
            $scope.id=$id;
            if(data.actname!=undefined){$scope.actname=data.actname;}else{$scope.actname='';}
            if(data.contactpersonname!=undefined){$scope.contactpersonname=data.contactpersonname;}else{$scope.contactpersonname='';}
            if(data.email1!=undefined){$scope.email1=data.email1;}else{$scope.email1='';}
            if(data.email2!=undefined){$scope.email2=data.email2;}else{$scope.email2='';}
            if(data.phonenumber!=undefined){$scope.phonenumber=data.phonenumber;}else{$scope.phonenumber='';}
            if(data.othernumber!=undefined){$scope.othernumber=data.othernumber;}else{$scope.othernumber='';}
            if(data.skype!=undefined){$scope.skype=data.skype;}else{$scope.skype='';}
            if(data.Webo!=undefined){$scope.Webo=data.Webo;}else{$scope.Webo='';}
            if(data.CountryBased!=undefined){$scope.CountryBased=data.CountryBased;}else{$scope.CountryBased='';}
            if(data.IfUSAStatebasedin!=undefined){$scope.IfUSAStatebasedin=data.IfUSAStatebasedin;}else{$scope.IfUSAStatebasedin='';}
            if(data.MailingAddress1!=undefined){$scope.MailingAddress1=data.MailingAddress1;}else{$scope.MailingAddress1='';}
            if(data.MailingAddress2!=undefined){$scope.MailingAddress2=data.MailingAddress2;}else{$scope.MailingAddress2='';}
            if(data.City!=undefined){$scope.City=data.City;}else{$scope.City='';}
            if(data.PostCode!=undefined){$scope.PostCode=data.PostCode;}else{$scope.PostCode='';}
            if(data.BestMethodtocontact!=undefined){$scope.BestMethodtocontact=data.BestMethodtocontact;}else{$scope.BestMethodtocontact='';}
            if(data.Website!=undefined){$scope.Website=data.Website;}else{$scope.Website='';}
            if(data.Facebook!=undefined){$scope.Facebook=data.Facebook;}else{$scope.Facebook='';}
            if(data.Bestwaytosell!=undefined){$scope.Bestwaytosell=data.Bestwaytosell;}else{$scope.Bestwaytosell='';}
            if(data.Roaming!=undefined){$scope.Roaming=data.Roaming;}else{$scope.Roaming='';}
            if(data.Logistics!=undefined){$scope.Logistics=data.Logistics;}else{$scope.Logistics='';}
            if(data.Performance!=undefined){$scope.Performance=data.Performance;}else{$scope.Performance='';}
            if(data.LineupOptions!=undefined){$scope.LineupOptions=data.LineupOptions;}else{$scope.LineupOptions='';}
            if(data.PriceGuide!=undefined){$scope.PriceGuide=data.PriceGuide;}else{$scope.PriceGuide='';}
            if(data.MinimumFee!=undefined){$scope.MinimumFee=data.MinimumFee;}else{$scope.MinimumFee='';}
            if(data.overseas!=undefined){$scope.overseas=data.overseas;}else{$scope.overseas='';}
            if(data.Residencycontracts!=undefined){$scope.Residencycontracts=data.Residencycontracts;}else{$scope.Residencycontracts='';}
            if(data.performedintheMiddleEast!=undefined){$scope.performedintheMiddleEast=data.performedintheMiddleEast;}else{$scope.performedintheMiddleEast='';}
            if(data.managementservices!=undefined){$scope.managementservices=data.managementservices;}else{$scope.managementservices='';}
            if(data.whichregion!=undefined){$scope.whichregion=data.whichregion;}else{$scope.whichregion='';}
            if(data.LiabilityGeneralInsurance!=undefined){$scope.LiabilityGeneralInsurance=data.LiabilityGeneralInsurance;}else{$scope.LiabilityGeneralInsurance='';}
            if(data.SelfEmployed!=undefined){$scope.SelfEmployed=data.SelfEmployed;}else{$scope.SelfEmployed='';}
            if(data.promomaterial!=undefined){$scope.promomaterial=data.promomaterial;}else{$scope.promomaterial='';}
            if(data.URLforpromomaterial!=undefined){$scope.URLforpromomaterial=data.URLforpromomaterial;}else{$scope.URLforpromomaterial='';}
            if(data.Youtubevideo!=undefined){$scope.Youtubevideo=data.Youtubevideo;}else{$scope.Youtubevideo='';}
            if(data.SecondYoutubevideo!=undefined){$scope.SecondYoutubevideo=data.SecondYoutubevideo;}else{$scope.SecondYoutubevideo='';}
            if(data.RecommendedSearchTerms!=undefined){$scope.RecommendedSearchTerms=data.RecommendedSearchTerms;}else{$scope.RecommendedSearchTerms='';}
            var Images=[];
            if(data.ProfileImage!=''){$scope.ProfileImage=data.ProfileImage;Images.push({'Title':'Profile','image':data.ProfileImage});}
                else{$scope.ProfileImage='';}
            if(data.Images1!=""){$scope.Images1=data.Images1; Images.push({'Title':'image1','image':data.Images1});}else{$scope.Images1='';}
            if(data.Images2!=''){$scope.Images2=data.Images2;Images.push({'Title':'image2','image':data.Images2});}else{$scope.Images2='';}
            if(data.Images3!=''){$scope.Images3=data.Images3;Images.push({'Title':'image3','image':data.Images3});}else{$scope.Images3='';}
            if(data.Images4!=''){$scope.Images4=data.Images4;Images.push({'Title':'image4','image':data.Images4});}else{$scope.Images4='';}
            if(data.Images5!=''){$scope.Images5=data.Images5;Images.push({'Title':'image5','image':data.Images5});}else{$scope.Images5='';}
            if(data.Images6!=''){$scope.Images6=data.Images6;Images.push({'Title':'image6','image':data.Images6});}else{$scope.Images6='';}
            if(data.Rider!=''){$scope.Rider=data.Rider;Images.push({'Title':'Rider','image':data.Rider});}else{$scope.Rider='';}
            if(data.SetList!=''){$scope.SetList=data.SetList;Images.push({'Title':'SetList','image':data.SetList});}else{$scope.SetList='';}
            if(data.Previousclients!=''){$scope.Previousclients=data.Previousclients;Images.push({'Title':'Previous clients','image':data.Previousclients});}else{$scope.Previousclients='';}
            if(data.Testimonials!=''){$scope.Testimonials=data.Testimonials;Images.push({'Title':'Testimonials','image':data.Testimonials});}else{$scope.Testimonials='';}
            $scope.Images=Images;
            console.log($scope.signuparray);
        }, function(err) {
            console.log(err);
        }).finally(function() {
            
        });
    
    }
   $scope.saveContent=function(){
     $id=  $scope.id;
    signupcheckService.saveContent($id).then(function(data) {
    console.log("check:"+data);
    $location.path("/admin/signup");
        
    }, function(err) {

        console.log(err);
    }).finally(function() {
        
    });
   }
   $scope.logout = function() {
    authService.logout().then(function() {
        $location.path('/admin/login');
        //window.location.href = '/admin/login';
    });
}
   $scope.deleteContent=function(){
    $id=  $scope.id;
   signupcheckService.deleteContent($id).then(function(data) {
    console.log("check:"+data);
    $location.path("/admin/signup");
    }, function(err) {
        console.log(err);
    }).finally(function() {
        
    });
    }
 
}]);
