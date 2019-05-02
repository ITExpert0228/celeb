app.controller('performersController',['$scope','$rootScope', '$routeParams','$location', 'performersService', function($scope, $rootScope,$routeParams,$location,performersService) {
    $scope.pager = {};
    $scope.performers = [];
    $scope.performersall_temp = [];
    $scope.performersinit=function(){
        $cate= $routeParams.param1;
        console.log( $cate);
        $scope.cate=$cate;
                
        if($cate!='Search')
        {   
            if($cate!='Alphabetically')
            {
                performersService.getperformersList( $cate).then(function(data) {
                    if(data!=undefined){
                    $scope.performersall=data.sort();
                    $scope.performersall_temp=data.sort();
                    $scope.sortstringindex='a';    
                    $scope.sortstring='name';
                    $scope.setPage(1);
                    console.log(data);
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                        
                    });
            }else{
                $scope.SearchResult='';
                performersService.getmodelsbyalphabeta( $name).then(function(data) {
                    if(data!=undefined){
                        if(data.length>0){
                            $scope.performersall=data.sort();
                            $scope.performersall_temp=data.sort();
                            $scope.sortstringindex='a';    
                            $scope.sortstring='name';
                            $scope.setPage(1);
                            console.log(data);
                        }else{
                            $scope.totalPages=0;
                            $scope.currentPage=0; 
                            $scope.SearchResult='Result does not exist!';   
                        }        
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                        
                    });
            }
           
        }else{
            $name= $routeParams.param2;
            $scope.SearchResult='';
            performersService.getmodelsbyname( $name).then(function(data) {
                if(data!=undefined){
                    if(data.length>0){
                        $scope.performersall=data.sort();
                        $scope.performersall_temp=data.sort();
                        $scope.sortstringindex='a';    
                        $scope.sortstring='name';
                        $scope.setPage(1);
                        console.log(data);
                    }else{
                        $scope.totalPages=0;
                        $scope.currentPage=0; 
                        $scope.SearchResult='Result does not exist!';   
                    }        
                }
                }, function(err) {
                    console.log(err);
                }).finally(function() {
                    
                });
        }
   
    }
    $scope.indexOf=function(name){
        if($scope.performersall_temp.length>0)
            {
                var temp=$scope.performersall_temp;
                $scope.performersall=[];
                for(var i=0;i<$scope.performersall_temp.length;i++)
                {
                    var tempname=temp[i].name;
                    tempname=tempname.toLowerCase();
                    if(tempname.indexOf(name)==0)
                    {
                        $scope.performersall.push(temp[i]);
                    }
                }
                if($scope.performersall.length>0){
                  
                    $scope.sortstringindex='a';    
                    $scope.sortstring='name';
                    $scope.setPage(1);
                   
                }else{
                    $scope.totalPages=0;
                    $scope.currentPage=0; 
                    $scope.SearchResult='Result does not exist!';   
                }  
            }
    }
    $scope.setPage= function (page) {
        if (page < 1 || page > 10000) {
            return;
        }
        if($scope.performersall.length>0)
            {
                $scope.pager = $scope.GetPager( $scope.performersall.length, page);
                $scope.getCelebdataItem(page);
            }
        // get current page of items
    // vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
    }
    $scope.getCelebdataItem=function(startnumber){
        $scope.performers=[];
        if(startnumber>0)startnumber=startnumber-1;
        startIndex=(startnumber)*10;
        endIndex=(startnumber)*10+9;
     
        angular.forEach($scope.performersall, function(value, key){
            if((key>=startIndex)&&(key<=endIndex) )
            {
                $scope.performers.push($scope.performersall[key]);
            }
        });
    }
    $scope.sortName=function(sortstring){
        //$scope.performersall.sort();
        if(sortstring=='a'){
            if($scope.sortstringindex!='a')
            {
                $scope.performersall.reverse();
                $scope.sortstringindex='a';
            }
        }
        if(sortstring=='z'){
            if($scope.sortstringindex!='z')
            {
                $scope.performersall.reverse();
                $scope.sortstringindex='z';
            }
        }
        $scope.setPage(1);
    }
    $scope.GetPager=function (totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;
    
        // default page size is 10
        pageSize = pageSize || 10;
    
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        $scope.totalPages=totalPages;
        $scope.currentPage=currentPage;
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
    
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    
        // create an array of pages to ng-repeat in the pager control
        var pages = $scope.range(startPage, endPage + 1);
    
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    
    }
    $scope.range=function(startnumber,endnumber){
        pagearray=[];
        for(i=startnumber;i<endnumber;i++)
        {
            pagearray.push(i);
        }
        return pagearray;
    }
 
}]);
 
 