app.controller('customlistController',['$scope','$rootScope', '$timeout','$routeParams','$location', 'customlistService','$mdDialog', function($scope, $rootScope,$timeout,$routeParams,$location,customlistService,$mdDialog) {
    $scope.loaderShow=true;
    $scope.loaderContent=false;
    $scope.TypeShow=false;
    $scope.checkedResults=[];
    $scope.checkedResultsCount=0;
    $scope.selectCheckedStates=[];
    $scope.customlistinit=function(){
        $scope.loaderShow=false;
        $scope.loaderContent=true;
        $scope.topSelectedModels=$scope.topModelSpeakers;
        $scope.selectModels('Actors');
        angular.element( document.querySelector('#Actors')).addClass('selected');
        
    }
    $scope.selectModels=function(selectIndex){
        $scope.selectIndex=selectIndex;
        $scope.checkedResults=[];
        $scope.types=[];
        $scope.selectCheckedStates=[];
        if($scope.selectIndex=='Speakers'){
            $scope.topSelectedModels=$scope.topModelSpeakers;
            $scope.types.push('Actor');
            $scope.types.push('Art-Artists');
            $scope.types.push('Astronauts');
            $scope.types.push('Author');
            $scope.types.push('Blockchain');
            $scope.types.push('Business');
            $scope.types.push('Chefs');
            $scope.types.push('Disabilities');
            $scope.types.push('Education');
            $scope.types.push('Entertainment Industry');
            $scope.types.push('Environment');
            $scope.types.push('Environment-Green Tech'); 
            $scope.types.push('Film-Tv');
            $scope.types.push('Health-Wellness'); 
            $scope.types.push('Hospitality'); 
            $scope.types.push('Independent-Not Signed');
            $scope.types.push('Internet Related');
            $scope.types.push('Journalist');
            $scope.types.push('Law-Justice');
            $scope.types.push('Media');
            $scope.types.push('Media-Journalists');
            $scope.types.push('Medical Issues');
            $scope.types.push('Model');
            $scope.types.push('Motivational-Leadership');
            $scope.types.push('Performing Arts');
            $scope.types.push('Politics-Government');
            $scope.types.push('Relationships-Self Help');
            $scope.types.push('Science-Technology');
            $scope.types.push('Social Issues');
        }
        if($scope.selectIndex=='Performers'){
            $scope.topSelectedModels=$scope.topModelPerformers;
            $scope.types.push('Alternative');
            $scope.types.push('American Idol');
            $scope.types.push('Blues');
            $scope.types.push('Christian');
            $scope.types.push('Classical');
            $scope.types.push('Comedian');
            $scope.types.push('Country');
            $scope.types.push('Dance');
            $scope.types.push('DJ-Electronic Dance Music');
            $scope.types.push('Electronic');
            $scope.types.push('Folk');
            $scope.types.push('Gospel'); 
            $scope.types.push('Hispanic');
            $scope.types.push('Impersonator'); 
            $scope.types.push('Jazz'); 
            $scope.types.push('Latin');
            $scope.types.push('Pop');
            $scope.types.push('R&B');
            $scope.types.push('Rap-Hip Hop');
            $scope.types.push('Reggae');
            $scope.types.push('Rock');
            $scope.types.push('Talent-Local Band');
            $scope.types.push('Talent-Local Musician');
            $scope.types.push('Theatrical');
            $scope.types.push('Tribute Show');
            $scope.types.push('World Music');
        }
        if($scope.selectIndex=='Actors'){
          
            $scope.topSelectedModels=$scope.topModelActors;
            $scope.types.push('Actor');
          //  $scope.types.push('Actoress');
        }
        if($scope.selectIndex=='Sports'){
           
            $scope.topSelectedModels=$scope.topModelSports;
            $scope.types.push('Baseball');
            $scope.types.push('Basketball');
            $scope.types.push('Boxing');
            $scope.types.push('Business');
            $scope.types.push('Coaches');
            $scope.types.push('Cycling-Tri Athletes');
            $scope.types.push('Fishing');
            $scope.types.push('Football');
            $scope.types.push('Golfers');
            $scope.types.push('Hockey');
            $scope.types.push('Jockey');
            $scope.types.push('Media');
            $scope.types.push('Motorsports');
            $scope.types.push('Olympian');
            $scope.types.push('Rugby');
            $scope.types.push('Soccer');
            $scope.types.push('Surfing');
            $scope.types.push('Swimming');
            $scope.types.push('Tennis');
            $scope.types.push('Wrestling');
            $scope.types.push('UFC');
            $scope.types.push('WWF');
            $scope.types.push('X Games');
        }
        if($scope.selectIndex=='RisingPerformers'){
            
            $scope.topSelectedModels=$scope.topModelRisingPerformers;
            $scope.types.push('Alternative');
            $scope.types.push('American Idol');
            $scope.types.push('Blues');
            $scope.types.push('Christian');
            $scope.types.push('Classical');
            $scope.types.push('Comedian');
            $scope.types.push('Country');
            $scope.types.push('Dance');
            $scope.types.push('DJ-Electronic Dance Music');
            $scope.types.push('Electronic');
            $scope.types.push('Folk');
            $scope.types.push('Gospel'); 
            $scope.types.push('Hispanic');
            $scope.types.push('Impersonator'); 
            $scope.types.push('Jazz'); 
            $scope.types.push('Latin');
            $scope.types.push('Pop');
            $scope.types.push('R&B');
            $scope.types.push('Rap-Hip Hop');
            $scope.types.push('Reggae');
            $scope.types.push('Rock');
            $scope.types.push('Talent-Local Band');
            $scope.types.push('Talent-Local Musician');
            $scope.types.push('Theatrical');
            $scope.types.push('Tribute Show');
            $scope.types.push('World Music');
        }
        if($scope.selectIndex=='RisingSpeakers'){
            $scope.topSelectedModels=$scope.topModelRisingSpeakers;
            $scope.types.push('Actor');
            $scope.types.push('Art-Artists');
            $scope.types.push('Astronauts');
            $scope.types.push('Author');
            $scope.types.push('Blockchain');
            $scope.types.push('Business');
            $scope.types.push('Chefs');
            $scope.types.push('Disabilities');
            $scope.types.push('Education');
            $scope.types.push('Entertainment Industry');
            $scope.types.push('Environment');
            $scope.types.push('Environment-Green Tech'); 
            $scope.types.push('Film-Tv');
            $scope.types.push('Health-Wellness'); 
            $scope.types.push('Hospitality'); 
            $scope.types.push('Independent-Not Signed');
            $scope.types.push('Internet Related');
            $scope.types.push('Journalist');
            $scope.types.push('Law-Justice');
            $scope.types.push('Media');
            $scope.types.push('Media-Journalists');
            $scope.types.push('Medical Issues');
            $scope.types.push('Model');
            $scope.types.push('Motivational-Leadership');
            $scope.types.push('Performing Arts');
            $scope.types.push('Politics-Government');
            $scope.types.push('Relationships-Self Help');
            $scope.types.push('Science-Technology');
            $scope.types.push('Social Issues');
        }
        for(var i=0;i<$scope.types.length;i++)
        {
            $scope.selectCheckedStates.push(false);
        }
        angular.element( document.getElementsByClassName( 'selected' )).removeClass('selected');
        angular.element( document.querySelector('#'+selectIndex)).addClass('selected'); 
    }
    $scope.getChecked=function(selectChecked){
        if($scope.selectCheckedStates[selectChecked]==false){
            $scope.selectCheckedStates[selectChecked]=true;
            var style=$scope.types[selectChecked];
            customlistService.getcustomList( style,$scope.lowFee,$scope.highFee).then(function(data) {
                    if(data!=undefined){
                        $scope.checkedResults.push({'title':style,'result':data});
                        $scope.checkedResultsCount=0;
                        for(var i=0;i<$scope.checkedResults.length;i++)
                        {
                            $scope.checkedResultsCount=$scope.checkedResultsCount+$scope.checkedResults[i].result.length;
                        }
                    }
                }, function(err) {
                }).finally(function() {
                });
        }else{
            $scope.selectCheckedStates[selectChecked]=false;
            $scope.checkedResults = $scope.checkedResults.filter((x)=> x.title!=$scope.types[selectChecked])
            $scope.checkedResultsCount=0;
            for(var i=0;i<$scope.checkedResults.length;i++)
            {
                $scope.checkedResultsCount=$scope.checkedResultsCount+$scope.checkedResults[i].result.length;
            }
        }
        
        //$scope.selectCheckedStates=[];
        // if($scope.type[])
        //alert(selectChecked);
        //$scope.tyoe
        //$scope.selectCheckedStates.push({selecChecked:true})
        // customlistService.getcustomList(selectChecked).then(function(data) {
        //     if(data!=undefined){
        //         $scope.checkedResults.push({'title':selectChecked,'result':data});
        //     }
        // }, function(err) {
        // }).finally(function() {
        // });
    }
    $scope.talentBudget=function(selectFee){
        $scope.TypeShow=false; 
       if(($scope.lowFee!="")&&($scope.highFee!="")&&($scope.highFee!=undefined)&&($scope.highFee!=undefined)){
        $scope.TypeShow=true;
        if($scope.checkedResults.length>0)
        {
            $scope.checkedResults = [];
            for(var i=0;i<$scope.selectCheckedStates.length;i++)
            {
                if($scope.selectCheckedStates[i]==true){
                   // $scope.checkedResults = $scope.checkedResults.filter((x)=> x.title!=$scope.types[i]);
                    var style=$scope.types[i];
                    customlistService.getcustomList( style,$scope.lowFee,$scope.highFee).then(function(data) {
                            if(data!=undefined){
                                $scope.checkedResults.push({'title':data[0].style,'result':data});
                                $scope.checkedResultsCount=0;
                                for(var j=0;j<$scope.checkedResults.length;j++)
                                {
                                    $scope.checkedResultsCount=$scope.checkedResultsCount+$scope.checkedResults[j].result.length;
                                }
                            }
                        }, function(err) {
                        }).finally(function() {
                        });
                }
            }            
        }
       }else{
        $scope.TypeShow=false;  
       }     
    }
    $scope.$on('$viewContentLoaded', function(){
        ////////////////
        $(document).ready(function() {
           
            });   
        });

	//owl carousel//
	////////////////

    
}]);
 