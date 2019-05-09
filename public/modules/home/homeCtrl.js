app.controller('homeController',['$scope','$rootScope', '$timeout','$routeParams','$location', 'homeService','$mdDialog', function($scope, $rootScope,$timeout,$routeParams,$location,homeService,$mdDialog) {
    $scope.loaderShow=true;
    $scope.loaderContent=false;
    $scope.homeinit=function(){
        homeService.gethomeList().then(function(data) {
                $scope.loaderShow=true;
                $scope.loaderContent=false;
                if(data!=undefined){
                    $scope.selectIndex='Speakers';
                    if(data.Actor[0]!=undefined){
                        $scope.topModelActor=data.Actor[0];
                        $scope.topModelActors=data.Actor;
                    }
                    if(data.Performer[0]!=undefined){
                        $scope.topModelPerformer=data.Performer[0];
                        $scope.topModelPerformers=data.Performer;
                    }
                    if(data.Speaker[0]!=undefined){
                        $scope.topModelSpeaker=data.Speaker[0];
                        $scope.topModelSpeakers=data.Speaker;
                        $scope.topSelectedModels=$scope.topModelSpeakers;
                        angular.element( document.querySelector('#Speakers')).addClass('selected');
                    }
                    if(data.Sports[0]!=undefined){
                        $scope.topModelSport=data.Sports[0];
                        $scope.topModelSports=data.Sports;
                    }
                    if(data.RisingPerformer[0]!=undefined){
                        $scope.topModelRisingPerformer=data.RisingPerformer[0];
                        $scope.topModelRisingPerformers=data.RisingPerformer;
                    }
                    if(data.RisingSpeaker[0]!=undefined){
                        $scope.topModelRisingSpeaker=data.RisingSpeaker[0];
                        $scope.topModelRisingSpeakers=data.RisingSpeaker;
                    }
                    //  angular.element( document.getElementsByClassName( 'cloned' )).remove();
                }
                $timeout(function() {
                $scope.loaderShow=false;
                $scope.loaderContent=true;                     
                  }, 1000);
       
        }, function(err) {
            }).finally(function() {
            
        });
    }
    $scope.selectModels=function(selectIndex){
        $scope.selectIndex=selectIndex;
        if($scope.selectIndex=='Speakers')$scope.topSelectedModels=$scope.topModelSpeakers;
        if($scope.selectIndex=='Performers')$scope.topSelectedModels=$scope.topModelPerformers;
        if($scope.selectIndex=='Actors')$scope.topSelectedModels=$scope.topModelActors;
        if($scope.selectIndex=='Sports')$scope.topSelectedModels=$scope.topModelSports;
        if($scope.selectIndex=='RisingPerformers')$scope.topSelectedModels=$scope.topModelRisingPerformers;
        if($scope.selectIndex=='RisingSpeakers')$scope.topSelectedModels=$scope.topModelRisingSpeakers;
        angular.element( document.getElementsByClassName( 'selected' )).removeClass('selected');
        angular.element( document.querySelector('#'+selectIndex)).addClass('selected');
 
    }
    $scope.selectCategory=function(){
        var url='';
        if($scope.selectIndex=='Speakers')url="/performers/Speaker";
        if($scope.selectIndex=='Performers')url="/performers/Performer";
        if($scope.selectIndex=='Actors')url="/performers/Actor";
        if($scope.selectIndex=='Sports')url="/performers/Sports & Athlete";
        if($scope.selectIndex=='RisingPerformers')url="/performers/Rising Performer";
        if($scope.selectIndex=='RisingSpeakers')url="/performers/Rising Speaker";
        $location.path(url);
    }
    $scope.onSubmit=function(ev){
        if(($scope.name==undefined)||($scope.name=='')){return;}
        if(($scope.email==undefined)||($scope.email=='')){return;}
        if(($scope.phone==undefined)||($scope.phone=='')){return;}
        if(($scope.message==undefined)||($scope.message=='')){return;}
             var contactObj = {
                Full_Name:$scope.name,
                Phone:$scope.phone,
                Email:$scope.email,
                Message:$scope.message,
                };
          homeService.saveContactus(contactObj).then(function(data) {
            if(data!=undefined){
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
             }).finally(function() {
                
        });
    }
     $scope.onReset=function(){
        $scope.name="";
        $scope.email="";
        $scope.phone="";
        $scope.message="";
    }
    $scope.$on('$viewContentLoaded', function(){
        ////////////////
        $(document).ready(function() {
            if (jQuery().owlCarousel) {
                jQuery('.owl-carousel').each(function() {
                    var $carousel = jQuery(this);
                    var loop = $carousel.data('loop') ? $carousel.data('loop') : false;
                    var margin = ($carousel.data('margin') || $carousel.data('margin') == 0) ? $carousel.data('margin') : 30;
                    var nav = $carousel.data('nav') ? $carousel.data('nav') : false;
                    var dots = $carousel.data('dots') ? $carousel.data('dots') : false;
                    var themeClass = $carousel.data('themeclass') ? $carousel.data('themeclass') : 'owl-theme';
                    var center = $carousel.data('center') ? $carousel.data('center') : false;
                    var items = $carousel.data('items') ? $carousel.data('items') : 6;
                    var autoplay = $carousel.data('autoplay') ? $carousel.data('autoplay') : false;
                    var responsiveXs = $carousel.data('responsive-xs') ? $carousel.data('responsive-xs') : 1;
                    var responsiveSm = $carousel.data('responsive-sm') ? $carousel.data('responsive-sm') : 2;
                    var responsiveMd = $carousel.data('responsive-md') ? $carousel.data('responsive-md') : 3;
                    var responsiveLg = $carousel.data('responsive-lg') ? $carousel.data('responsive-lg') : 4;
                    var responsivexLg = $carousel.data('responsive-xlg') ? $carousel.data('responsive-xlg') : responsiveLg;
                    var filters = $carousel.data('filters') ? $carousel.data('filters') : false;
        
                    if (filters) {
                        $carousel.clone().appendTo($carousel.parent()).addClass( filters.substring(1) + '-carousel-original' );
                        jQuery(filters).on('click', 'a', function( e ) {
                            //processing filter link
                            e.preventDefault();
                            if (jQuery(this).hasClass('selected')) {
                                return;
                            }
                            var filterValue = jQuery( this ).attr('data-filter');
                            jQuery(this).siblings().removeClass('selected active');
                            jQuery(this).addClass('selected active');
                            
                            //removing old items
                            $carousel.find('.owl-item').length;
                            for (var i = $carousel.find('.owl-item').length - 1; i >= 0; i--) {
                                $carousel.trigger('remove.owl.carousel', [1]);
                            };
        
                            //adding new items
                            var $filteredItems = jQuery($carousel.next().find(' > ' +filterValue).clone());
                            $filteredItems.each(function() {
                                $carousel.trigger('add.owl.carousel', jQuery(this));
                            });
                            
                            $carousel.trigger('refresh.owl.carousel');
                        });
                        
                    } //filters
        
                    $carousel.owlCarousel({
                        loop: loop,
                        margin: margin,
                        nav: nav,
                        autoplay: autoplay,
                        dots: dots,
                        themeClass: themeClass,
                        center: center,
                        items: items,
                        responsive: {
                            0:{
                                items: responsiveXs
                            },
                            767:{
                                items: responsiveSm
                            },
                            992:{
                                items: responsiveMd
                            },
                            1200:{
                                items: responsiveLg
                            },
                            1600:{
                                items: responsivexLg
                            }
                        },
                    })
                    .addClass(themeClass);
                    if(center) {
                        $carousel.addClass('owl-center');
                    }
                });
        
            } //eof owl-carousel
            });   
        });

	//owl carousel//
	////////////////

    
}]);
 
 