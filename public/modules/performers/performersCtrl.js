app.controller('performersController',['$scope','$rootScope', '$routeParams','$location', 'performersService', function($scope, $rootScope,$routeParams,$location,performersService) {
    $scope.pager = {};
    $scope.performers = [];
    $scope.loaderShow=true;
    $scope.conent_result=false;
    $scope.loaderContent=false;
    $scope.name= ''
    $scope.Alphabetically=0;
    $scope.sortstring='a';
    $scope.performersinit=function(){
        $scope.cate= $routeParams.param1;
        if( $scope.cate!='Search')
        {   
            if( $scope.cate!='Alphabetically')
            {
                performersService.getperformersList(0,  $scope.cate,$scope.sortstring).then(function(data) {
                    $scope.conent_result=false;
                    $scope.loaderContent=false;
                    $scope.loaderShow=true;
                    if(data!=undefined){
                        var result=data.data;
                        console.log("result:"+result[0]);
                        if(result.length>0){
                            $scope.performer=result.sort();
                            $scope.sortstring='a';
                            $scope.totalcount=data.totalcount;
                            $scope.setPage(1,$scope.totalcount);
                            $scope.conent_result=true;
                        }else{
                            $scope.conent_result=false;
                            $scope.totalPages=0;
                            $scope.currentPage=0; 
                            $scope.SearchResult='Result does not exist!';   
                        }
                    $scope.loaderContent=true;
                    $scope.loaderShow=false;
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                        
                    });
            }else{
             
                $scope.findname= $routeParams.param2;
                $scope.category= $routeParams.param3;
                if($scope.category=='Search')
                {
                    $scope.name= $routeParams.param4;
                }else{
                    $scope.name= '';
                }
                performersService.getmodelsbyalphabeta(0, $scope.findname, $scope.category,$scope.name).then(function(data) {
                    $scope.conent_result=false;
                    $scope.loaderContent=false;
                    $scope.loaderShow=true;
                    if(data!=undefined){
                        var result=data.data;
                        console.log("result:"+result[0]);
                        if(result.length>0){
                            $scope.performer=result.sort();
                            $scope.totalcount=data.totalcount;
                            $scope.setPage(1,$scope.totalcount);
                            $scope.conent_result=true;
                        }else{
                            $scope.totalPages=0;
                            $scope.currentPage=0; 
                            $scope.SearchResult='Result does not exist!';   
                        }
                    $scope.loaderContent=true;
                    $scope.loaderShow=false;
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                        
                });
            }
           
        }else{
            $scope.name= $routeParams.param2;
            $scope.SearchResult='';
            performersService.getmodelsbyname(0, $scope.name,$scope.sortstring).then(function(data) {
                $scope.conent_result=false;
                $scope.loaderContent=false;
                $scope.loaderShow=true;
                if(data!=undefined){
                    var result=data.data;
                    console.log("result:"+result[0]);
                    if(result.length>0){
                        $scope.performer=result.sort();
                        $scope.totalcount=data.totalcount;
                        $scope.setPage(1);
                        $scope.conent_result=true;
                    }else{
                        $scope.totalPages=0;
                        $scope.currentPage=0; 
                        $scope.SearchResult='Result does not exist!';   
                    }
                    $scope.loaderContent=true;
                    $scope.loaderShow=false;        
                }
                }, function(err) {
                    console.log(err);
                }).finally(function() {
                    
            });
        }
       
    }
    $scope.indexOf=function(name){
        $scope.findname=name;
        $scope.Alphabetically=1;
        if($scope.cate!='Search')
        {
                performersService.getmodelsbyalphabeta(0, $scope.findname, $scope.cate,'',$scope.sortstring).then(function(data) {
                    $scope.conent_result=false;
                    $scope.loaderContent=false;
                    $scope.loaderShow=true;
                    if(data!=undefined){
                        var result=data.data;
                        console.log("result:"+result[0]);
                        $scope.performers=[];
                        if(result.length>0){
                            $scope.performer=result.sort();
                            $scope.totalcount=data.totalcount;
                            $scope.setPage(1,$scope.totalcount);
                            $scope.conent_result=true;
                        }else{
                            $scope.totalPages=0;
                            $scope.currentPage=0; 
                            $scope.SearchResult='Result does not exist!';   
                        }
                    $scope.loaderContent=true;
                    $scope.loaderShow=false;
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                 });
     
        }else{
            performersService.getmodelsbyalphabeta(0, $scope.findname, $scope.cate,$scope.name,$scope.sortstring).then(function(data) {
                $scope.performers=[];
                $scope.conent_result=false;
                $scope.loaderContent=false;
                $scope.loaderShow=true;
                if(data!=undefined){
                    var result=data.data;
                    console.log("result:"+result[0]);
                    if(result.length>0){
                        $scope.performer=result.sort();
                        $scope.totalcount=data.totalcount;
                        $scope.setPage(1,$scope.totalcount);
                        $scope.conent_result=true;
                    }else{
                        $scope.totalPages=0;
                        $scope.currentPage=0; 
                        $scope.SearchResult='Result does not exist!';   
                    }
                $scope.loaderContent=true;
                $scope.loaderShow=false;
                }
                }, function(err) {
                    console.log(err);
                }).finally(function() {
             });

        }
    }
    $scope.setPage= function (page,totalcount) {
        if (page < 1 || page > 10000) {
            return;
        }
        if( $scope.totalcount>0)
            {
                $scope.pager = $scope.GetPager(  $scope.totalcount, page);
                $scope.getCelebdataItem(page);
            }
        // get current page of items
    // vm.items = vm.dummyItems.slice(vm.pager.startIndex, vm.pager.endIndex + 1);
    }
    $scope.getCelebdataItem=function(startnumber){
        $scope.performers=[];
        if($scope.Alphabetically==1)
        {
            if($scope.cate!='Search')
            {
                    performersService.getmodelsbyalphabeta(startnumber, $scope.findname, $scope.cate,'',$scope.sortstring).then(function(data) {
                        $scope.performers=[];
                        $scope.conent_result=false;
                        $scope.loaderContent=false;
                        $scope.loaderShow=true;
                        if(data!=undefined){
                            var result=data.data;
                            console.log("result:"+result[0]);
                            if(result.length>0){
                                $scope.conent_result=true;
                                $scope.performers=result.sort();
                            }else{
                                $scope.totalPages=0;
                                $scope.currentPage=0; 
                                $scope.SearchResult='Result does not exist!';   
                            }
                        $scope.loaderContent=true;
                        $scope.loaderShow=false;
                        }
                        }, function(err) {
                            console.log(err);
                        }).finally(function() {
                     });
         
            }else{
                performersService.getmodelsbyalphabeta(startnumber, $scope.findname, $scope.cate,$scope.name,$scope.sortstring).then(function(data) {
                    $scope.performers=[];
                    if(data!=undefined){
                        var result=data.data;
                        console.log("result:"+result[0]);
                        if(result.length>0){
                            $scope.performers=result.sort();
                           }else{
                            $scope.totalPages=0;
                            $scope.currentPage=0; 
                            $scope.SearchResult='Result does not exist!';   
                        }
                    $scope.loaderContent=true;
                    $scope.loaderShow=false;
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                 });
    
            }
        }else{
            if($scope.cate=='Search'){
                performersService.getmodelsbyname(startnumber, $scope.name,$scope.sortstring).then(function(data) {
                    $scope.performers=[];
                    $scope.conent_result=false;
                    $scope.loaderContent=false;
                    $scope.loaderShow=true;
                    if(data!=undefined){
                        var result=data.data;
                        console.log("result:"+result[0]);
                        if(result.length>0){
                            $scope.conent_result=true;
                            $scope.performers=result.sort();
                        }
                        $scope.loaderContent=true;
                        $scope.loaderShow=false;        
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                        
                });
            } else if($scope.cate=='Alphabetically'){
                performersService.getmodelsbyalphabeta(startnumber, $scope.name,$scope.sortstring).then(function(data) {
                    $scope.performers=[];
                    if(data!=undefined){
                        var result=data.data;
                        console.log("result:"+result[0]);
                        if(result.length>0){
                            $scope.performers=result.sort();
                        }
                        $scope.loaderContent=true;
                        $scope.loaderShow=false;        
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                        
                });
            }else if($scope.cate!='Alphabetically'){
            performersService.getperformersList(startnumber, $scope.cate,$scope.sortstring).then(function(data) {
                $scope.performers=[];
                if(data!=undefined){
                    var result=data.data;
                    console.log("result:"+result[0]);
                    if(result.length>0){
                        $scope.performers=result.sort();
                    }
                    $scope.loaderContent=true;
                    $scope.loaderShow=false;        
                }
                }, function(err) {
                    console.log(err);
                }).finally(function() {
                    
            });
            }
        }
        
    }
    $scope.sortName=function(sortstring){
        $scope.sortstring=sortstring;
        $scope.performers=[];
        if($scope.Alphabetically==1)
        {
            if($scope.cate!='Search')
            {
                    performersService.getmodelsbyalphabeta(0, $scope.findname, $scope.cate,'',$scope.sortstring).then(function(data) {
                        $scope.performers=[];
                        if(data!=undefined){
                            var result=data.data;
                            console.log("result:"+result[0]);
                            if(result.length>0){
                                $scope.performers=result.sort();
                                $scope.setPage(1,$scope.totalcount);
                            }else{
                                $scope.totalPages=0;
                                $scope.currentPage=0; 
                                $scope.SearchResult='Result does not exist!';   
                            }
                        $scope.loaderContent=true;
                        $scope.loaderShow=false;
                        }
                        }, function(err) {
                            console.log(err);
                        }).finally(function() {
                     });
         
            }else{
                performersService.getmodelsbyalphabeta(0, $scope.findname, $scope.cate,$scope.name,$scope.sortstring).then(function(data) {
                    $scope.performers=[];
                    $scope.conent_result=false;
                    $scope.loaderContent=false;
                    $scope.loaderShow=true;
                    if(data!=undefined){
                        var result=data.data;
                        console.log("result:"+result[0]);
                        if(result.length>0){
                            $scope.performers=result.sort();
                            $scope.setPage(1,$scope.totalcount);
                            $scope.conent_result=true;
                           }else{
                            $scope.totalPages=0;
                            $scope.currentPage=0; 
                            $scope.SearchResult='Result does not exist!';   
                        }
                    $scope.loaderContent=true;
                    $scope.loaderShow=false;
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                 });
    
            }
        }else{
            if($scope.cate=='Search'){
                performersService.getmodelsbyname(0, $scope.name,$scope.sortstring).then(function(data) {
                    $scope.performers=[];
                    $scope.conent_result=false;
                    $scope.loaderContent=false;
                    $scope.loaderShow=true;
                    if(data!=undefined){
                        var result=data.data;
                        console.log("result:"+result[0]);
                        if(result.length>0){
                            $scope.performers=result.sort();
                            $scope.setPage(1,$scope.totalcount);
                            $scope.conent_result=true;
                        }
                        $scope.loaderContent=true;
                        $scope.loaderShow=false;        
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                        
                });
            } else if($scope.cate=='Alphabetically'){
                performersService.getmodelsbyalphabeta(0, $scope.name,$scope.sortstring).then(function(data) {
                    $scope.performers=[];
                    $scope.conent_result=false;
                    $scope.loaderContent=false;
                    $scope.loaderShow=true;
                    if(data!=undefined){
                        var result=data.data;
                        console.log("result:"+result[0]);
                        if(result.length>0){
                            $scope.conent_result=true;
                            $scope.setPage(1,$scope.totalcount);
                            $scope.performers=result.sort();
                        }
                        $scope.loaderContent=true;
                        $scope.loaderShow=false;        
                    }
                    }, function(err) {
                        console.log(err);
                    }).finally(function() {
                        
                });
            }else if($scope.cate!='Alphabetically'){
            performersService.getperformersList(0, $scope.cate,$scope.sortstring).then(function(data) {
                $scope.performers=[];
                $scope.conent_result=false;
                $scope.loaderContent=false;
                $scope.loaderShow=true;
                if(data!=undefined){
                    var result=data.data;
                    console.log("result:"+result[0]);
                    if(result.length>0){
                        $scope.performers=result.sort();
                        $scope.setPage(1,$scope.totalcount);
                        $scope.conent_result=true;
                    }
                    $scope.loaderContent=true;
                    $scope.loaderShow=false;        
                }
                }, function(err) {
                    console.log(err);
                }).finally(function() {
                    
            });
            }
        }
       
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
 
 