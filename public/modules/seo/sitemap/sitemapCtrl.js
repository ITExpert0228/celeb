app.controller('sitemapController',['$scope','$rootScope', '$sce','$location', 'performersService', function($scope, $rootScope,$sce,$location,performersService) {
    $scope.loaderShow=true;
    $scope.loaderContent=false;
    $scope.sitemapinit=function(){
        performersService.getperformersListbysitemap().then(function(data) {
            if(data!=undefined){
            // console.log(data);
             $scope.contents=data;   
             $scope.root_path = 'http://54.215.207.132:3000/';


             $scope.staticcontents=[];
             $scope.staticcontents.push({'url':$scope.root_path});  
             $scope.staticcontents.push({'url':$scope.root_path + "performers/Actor"});  
             $scope.staticcontents.push({'url':$scope.root_path + "performers/Performer"});
             $scope.staticcontents.push({'url':$scope.root_path + "performers/Sports%20&%20Athlete"});
             $scope.staticcontents.push({'url':$scope.root_path + "performers/Speaker"});
             $scope.staticcontents.push({'url':$scope.root_path + "performers/Rising%20Performer"});
             $scope.staticcontents.push({'url':$scope.root_path + "performers/Rising%20Speaker"});
                // XML sitemap generation starts here
            $scope.priority = 0.5;
            $scope.freq = 'monthly';
                var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
                for(var i=0;i<data.length;i++)
                {
                    xml += '<url>';
                    xml += '<loc>'+ $scope.root_path + "model/" +data[i].id+ '</loc>';
                    xml += '<changefreq>'+  $scope.freq +'</changefreq>';
                    xml += '<priority>'+  $scope.priority +'</priority>';
                    xml += '</url>';
                 }
                xml += '</urlset>';



                 console.log(xml);
                
          //     $scope.sitemapContent= $sce.trustAsHtml(xml);
        }
        $scope.loaderShow=false;
        $scope.loaderContent=true;
        }, function(err) {
          //  console.log(err);
        }).finally(function() {
            
        });
    }        
    
 }]);
 
 