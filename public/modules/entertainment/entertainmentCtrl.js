app.controller('entertainmentAllController',['$scope','$rootScope', '$location','$routeParams','entertainmentService', function($scope, $rootScope,$location,$routeParams,entertainmentService) {
   $scope.getentertainmentbyid = function() {
    angular.element(document.querySelector("#Category")).removeClass("open");
    angular.element(document.querySelector("#Destination")).removeClass("open");
     $id  = $routeParams.param1;
    console.log( $id);
    $scope.tabvar1=true;
    $scope.videocheck=true;
    $scope.tabvar2=true;
    if($id==undefined){
     $location.path('/');
    }
    entertainmentService.getentertainmentbyid($id).then(function(data) { 
     if(data.catename!=undefined)   $scope.catename =data.catename;
     $scope.title=data.title;
     $scope.tags=[];
     $scope.videos=[];
     $scope.reasontobook=[];
     $scope.reasons=[];
     $scope.images =[];
     $scope.videos =[];
     console.log( data);
     if( data.images!=null)
      {
     // $scope.images =data.images;
          angular.forEach(data.images, function(value, key){
          $scope.images.push({id:key,url:value});
          console.log("key:"+key);
       });
      
      }
      console.log("$csope.images"+$scope.images);
      var videosrcarray=data.vediosrc;
      if( videosrcarray.length>0)
          {$scope.videos=data.vediosrc;}
          else{$scope.videocheck=false;}

          $scope.bigImage=data.images[0];
          console.log("$csope.bigimage"+$scope.bigImage);
          $scope.tags=data.tag;
          $scope.reasontobook=data.reasontobook;
          $scope.reasons=data.reason;
           $scope.previous=data.PreviousClients;
          if((data.PreviousClients==undefined)||(data.PreviousClients==''))$scope.tabvar2=false;
          $scope.biography=data.Biography;
          if((data.Biography==undefined)||(data.Biography==''))$scope.tabvar1=false;
      });
    }
    $scope.getEntertainments = function(name) {
    $rootScope.catename=name;
    }
     //gallery
   
      
    $scope.$on('$viewContentLoaded', function(){
        $(function() {
            $('.gallery a').lightbox();             
          });
        $(document).ready(function () {
            $('ul.tabs li').click(function(){
                var tab_id = $(this).attr('data-tab');
        
                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');
        
                $(this).addClass('current');
                $("#"+tab_id).addClass('current');
            });

         setTimeout(function(){  
        
            var $container = $('#entertain');
            var $imagegallery = $('#imagegallery');
            $imagegallery.hide();
          //  $loadingimages.show();
            $container.imagesLoaded()
                .always( function( instance ) {
                    console.log('all images loaded');
                  
                  })
                .done( function( instance ) {
                    console.log('all images successfully loaded');
                    $imagegallery.show();
                    $('#imagegallery a').lightbox();
                    $('#loadingimages').hide();
                })
                .fail( function() {
                    console.log('all images loaded, at least one is broken');
                    $('#loadingimages').hide();
                    $('#imagegallery a').lightbox();
                    $imagegallery.show();
                })
                .progress( function( instance, image ) {
                    //$imagegallery.hide();
                    var result = image.isLoaded ? 'loaded' : 'broken';
                    console.log( 'image is ' + result + ' for ' + image.img.src );
                });
            }, 1000);
          //Skyicon
          var icons = new Skycons({"color": "#fff"}),
          list = [
                                    "clear-day", "clear-night", "partly-cloudy-day",
                      "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                      "fog"
                  ],
                  i;
      
          for (i = list.length; i--; )
              icons.set(list[i], list[i]);
      
          icons.play();
      
          $('body').append('<div id="toTop" class="btn back-top"><span class="ti-arrow-up"></span></div>');
          $(window).on("scroll", function () {
              if ($(this).scrollTop() !==0) {
                  $('#toTop').fadeIn();
              }
              else {
                  $('#toTop').fadeOut();
              }
          }
          );
          $('#toTop').on("click", function () {
              $("html, body").animate( {
                  scrollTop: 0
              }
              , 600);
              return false;
          }
          );
          //  page loader
          $(".se-pre-con").fadeOut("slow");
          //  NewsTicker
          var owl=$("#NewsTicker");
          owl.owlCarousel( {
              autoPlay: 5000, //Set AutoPlay to 5 seconds
              singleItem: true, transitionStyle: "goDown", pagination: false, navigation: true, navigationText: [ "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
          }
          );
          $('#NewsTicker-rtl').owlCarousel( {
              rtl: true, loop: true, dots: false, autoplay: true, autoplayTimeout: 5000, //Set AutoPlay to 5 seconds
              autoplayHoverPause: true, nav: true, navText: [ "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"], items: 1
          }
          );
          //sideber scroll
          $('.main-content, .rightSidebar, .leftSidebar').theiaStickySidebar( {
              additionalMarginTop: 30
          }
          );
          //slider
          var owl=$("#owl-slider");
          owl.owlCarousel( {
              autoPlay: 4000, //Set AutoPlay to 4 seconds
              singleItem: true, transitionStyle: "fade", navigation: true, navigationText: [ "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
          }
          );
          //slider rtl
          $('#owl-slider-rtl').owlCarousel( {
              rtl: true, loop: true, autoplay: true, autoplayTimeout: 6000, //Set AutoPlay to 6 seconds
              autoplayHoverPause: true, nav: true, navText: [ "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"], items: 1, responsive: {
                  0: {
                      items: 1
                  }
                  , 479: {
                      items: 1
                  }
                  , 768: {
                      items: 1
                  }
                  , 980: {
                      items: 1
                  }
                  , 1199: {
                      items: 1
                  }
              }
          }
          );
          //Featured carousel
          $("#featured-owl").owlCarousel( {
              autoPlay: 4000, //Set AutoPlay to 4 seconds
              items: 4, lazyLoad: true, pagination: false, navigation: false
          }
          );
          //Featured carousel rtl
          $('#featured-owl-rtl').owlCarousel( {
              rtl: true, loop: true, dots: false, nav: false, items: 4, responsive: {
                  0: {
                      items: 1
                  }
                  , 479: {
                      items: 1
                  }
                  , 768: {
                      items: 2
                  }
                  , 980: {
                      items: 3
                  }
                  , 1199: {
                      items: 4
                  }
              }
          }
          );
          //Post carousel
          var owl=$("#post-slider");
          owl.owlCarousel( {
              navigation: true, singleItem: true, pagination: false, transitionStyle: "fade", navigationText: [ "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
          }
          );
          //Post carousel
          var owl=$("#post-slider-2");
          owl.owlCarousel( {
              navigation: true, singleItem: true, pagination: false, transitionStyle: "fade", navigationText: [ "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
          }
          );
          //Post carousel rtl
          $('.post-slider-rtl').owlCarousel( {
              rtl: true, loop: true, //        lazyLoad: true,
              dots: false, nav: true, navText: [ "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"], items: 1, responsive: {
                  0: {
                      items: 1
                  }
                  , 479: {
                      items: 1
                  }
                  , 768: {
                      items: 1
                  }
                  , 980: {
                      items: 1
                  }
                  , 1199: {
                      items: 1
                  }
              }
          }
          );
          //Post carousel
          var owl=$("#post-slider-3");
          owl.owlCarousel( {
              navigation: true, singleItem: true, pagination: false, transitionStyle: "fade", navigationText: [ "<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
          }
          );
          //tab
          $(".weather-week>div.list-group>a").click(function (e) {
              e.preventDefault();
              $(this).siblings('a.active').removeClass("active");
              $(this).addClass("active");
              var index=$(this).index();
              $("div.bhoechie-tab>div.weather-temp-wrap").removeClass("active");
              $("div.bhoechie-tab>div.weather-temp-wrap").eq(index).addClass("active");
          }
          );
          //calender
          $("#datepicker").datepicker();
          //youtube videos
          // This key only works for this demo on newspaper
          // You must create your own at:
          // https://developers.google.com/youtube/v3/getting-started
          window.api_key='AIzaSyAroKpLQWTON6y34m5VqGcLCPtOmfLBqh4';
          // Start two players by ID, with default settings
        //   $('#rypp-demo-1').rypp(api_key, {
        //       update_title_desc: true, // Default false
        //       autoplay: false, autonext: false, loop: false, mute: false, debug: false
        //   }
        //   );
          //panel tab
          $('.collapse.in').prev('.panel-heading').addClass('active');
          $('#accordion') .on('show.bs.collapse', function (a) {
              $(a.target).prev('.panel-heading').addClass('active');
          }
          ) .on('hide.bs.collapse', function (a) {
              $(a.target).prev('.panel-heading').removeClass('active');
          }
          );
          //progresber
          var el=document.getElementsByClassName('progressber'), l=el.length;
          for (var i=0;
          i < l;
          i++) {
              var options= {
                  percent: el[i].getAttribute('data-percent'), size: el[i].getAttribute('data-size') || 60, lineWidth: el[i].getAttribute('data-line') || 4
              }
              ;
              var canvas=document.createElement('canvas');
              var span=document.createElement('span');
              span.textContent=options.percent + '%';
              if (typeof (G_vmlCanvasManager) !=='undefined') {
                  G_vmlCanvasManager.initElement(canvas);
              }
              var ctx=canvas.getContext('2d');
              canvas.width=canvas.height=options.size;
              el[i].appendChild(span);
              el[i].appendChild(canvas);
              ctx.translate(options.size / 2, options.size / 2); // change center
              var radius=(options.size - options.lineWidth) / 2;
              var drawCircle=function (color, lineWidth, percent) {
                  percent=Math.min(Math.max(0, percent || 1), 1);
                  ctx.beginPath();
                  ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
                  ctx.strokeStyle=color;
                  ctx.lineCap='round';
                  ctx.lineWidth=lineWidth;
                  ctx.stroke();
              }
              ;
              drawCircle('transparent', options.lineWidth, 100 / 100);
              drawCircle('#eb0254', options.lineWidth, options.percent / 100);
          }
      
      });
      
      jQuery(document).ready(function($){
          //open/close mega-navigation
          $('.cd-dropdown-trigger').on('click', function(event){
              event.preventDefault();
              toggleNav();
          });
      
          //close meganavigation
          $('.cd-dropdown .cd-close').on('click', function(event){
              event.preventDefault();
              toggleNav();
          });
      
          //on mobile - open submenu
          $('.has-children').children('a').on('click', function(event){
              //prevent default clicking on direct children of .cd-dropdown-content 
              event.preventDefault();
              var selected = $(this);
              selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
          });
      
          //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
          var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
          $('.cd-dropdown-content').menuAim({
              activate: function(row) {
                  $(row).children().addClass('is-active').removeClass('fade-out');
                  if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
              },
              deactivate: function(row) {
                  $(row).children().removeClass('is-active');
                  if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
                      $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
                      $(row).children('ul').addClass('fade-out')
                  }
              },
              exitMenu: function() {
                  $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
                  return true;
              },
              submenuDirection: submenuDirection,
          });
      
          //submenu items - go back link
          $('.go-back').on('click', function(){
              var selected = $(this),
                  visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
              selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
          }); 
      
          function toggleNav(){
              var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
              $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
              $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
              if( !navIsVisible ) {
                  $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                      $('.has-children ul').addClass('is-hidden');
                      $('.move-out').removeClass('move-out');
                      $('.is-active').removeClass('is-active');
                  });	
              }
          }
      
          //IE9 placeholder fallback
          //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
          if(!Modernizr.input.placeholder){
              $('[placeholder]').focus(function() {
                  var input = $(this);
                  if (input.val() == input.attr('placeholder')) {
                      input.val('');
                    }
              }).blur(function() {
                   var input = $(this);
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                      input.val(input.attr('placeholder'));
                    }
              }).blur();
              $('[placeholder]').parents('form').submit(function() {
                    $(this).find('[placeholder]').each(function() {
                      var input = $(this);
                      if (input.val() == input.attr('placeholder')) {
                           input.val('');
                      }
                    })
              });
          }
      });
      
      jQuery(document).ready(function($){
          //open/close mega-navigation
          $('.cd-dropdown-trigger').on('click', function(event){
              event.preventDefault();
              toggleNav();
          });
      
          //close meganavigation
          $('.cd-dropdown .cd-close').on('click', function(event){
              event.preventDefault();
              toggleNav();
          });
      
          //on mobile - open submenu
          $('.has-children').children('a').on('click', function(event){
              //prevent default clicking on direct children of .cd-dropdown-content 
              event.preventDefault();
              var selected = $(this);
              selected.next('ul').removeClass('is-hidden').end().parent('.has-children').parent('ul').addClass('move-out');
          });
      
          //on desktop - differentiate between a user trying to hover over a dropdown item vs trying to navigate into a submenu's contents
          var submenuDirection = ( !$('.cd-dropdown-wrapper').hasClass('open-to-left') ) ? 'right' : 'left';
          $('.cd-dropdown-content').menuAim({
              activate: function(row) {
                  $(row).children().addClass('is-active').removeClass('fade-out');
                  if( $('.cd-dropdown-content .fade-in').length == 0 ) $(row).children('ul').addClass('fade-in');
              },
              deactivate: function(row) {
                  $(row).children().removeClass('is-active');
                  if( $('li.has-children:hover').length == 0 || $('li.has-children:hover').is($(row)) ) {
                      $('.cd-dropdown-content').find('.fade-in').removeClass('fade-in');
                      $(row).children('ul').addClass('fade-out')
                  }
              },
              exitMenu: function() {
                  $('.cd-dropdown-content').find('.is-active').removeClass('is-active');
                  return true;
              },
              submenuDirection: submenuDirection,
          });
      
          //submenu items - go back link
          $('.go-back').on('click', function(){
              var selected = $(this),
                  visibleNav = $(this).parent('ul').parent('.has-children').parent('ul');
              selected.parent('ul').addClass('is-hidden').parent('.has-children').parent('ul').removeClass('move-out');
          }); 
      
          function toggleNav(){
              var navIsVisible = ( !$('.cd-dropdown').hasClass('dropdown-is-active') ) ? true : false;
              $('.cd-dropdown').toggleClass('dropdown-is-active', navIsVisible);
              $('.cd-dropdown-trigger').toggleClass('dropdown-is-active', navIsVisible);
              if( !navIsVisible ) {
                  $('.cd-dropdown').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
                      $('.has-children ul').addClass('is-hidden');
                      $('.move-out').removeClass('move-out');
                      $('.is-active').removeClass('is-active');
                  });	
              }
          }
      
          //IE9 placeholder fallback
          //credits http://www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
          if(!Modernizr.input.placeholder){
              $('[placeholder]').focus(function() {
                  var input = $(this);
                  if (input.val() == input.attr('placeholder')) {
                      input.val('');
                    }
              }).blur(function() {
                   var input = $(this);
                    if (input.val() == '' || input.val() == input.attr('placeholder')) {
                      input.val(input.attr('placeholder'));
                    }
              }).blur();
              $('[placeholder]').parents('form').submit(function() {
                    $(this).find('[placeholder]').each(function() {
                      var input = $(this);
                      if (input.val() == input.attr('placeholder')) {
                           input.val('');
                      }
                    })
              });
          }
      });
      jQuery(document).on('click', '.mega-dropdown', function(e) {
      e.stopPropagation()
      });
      
      jQuery(document).on('click', '.search', function(e) {
      jQuery('.top-search').show();
      });
      
      jQuery(document).on('click', '.close-search', function(e) {
      jQuery('.top-search').hide();
      });
      });
      
   
}]);
