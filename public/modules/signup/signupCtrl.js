app.controller('signupController',['$scope', '$window','signupService', function($scope,$window, signupService) {
  $scope.signupinit=function(){
    angular.element(document.querySelector("#Category")).removeClass("open");
    angular.element(document.querySelector("#Eventtype")).removeClass("open");
    angular.element(document.querySelector("#Destination")).removeClass("open");
    }

    $scope.uploadFile = function()
    {
     
       var formData = new FormData();
       var blob=[10];
       blob[0] = $("#upload_profilefile")[0].files[0];
       formData.append('media', blob[0], '1.jpg');
       blob[1] = $("#upload_imagefile_1")[0].files[0];
       formData.append('media', blob[1], '2.jpg');
       blob[2] = $("#upload_imagefile_2")[0].files[0];
       formData.append('media', blob[2], '3.jpg');
       blob[3] = $("#upload_imagefile_3")[0].files[0];
       formData.append('media', blob[3], '4.jpg');
       blob[4] = $("#upload_imagefile_4")[0].files[0];
       formData.append('media', blob[4], '5.jpg');
       blob[5] = $("#upload_imagefile_5")[0].files[0];
       formData.append('media', blob[5], '6.jpg');
       blob[6] = $("#upload_imagefile_6")[0].files[0];
       formData.append('media', blob[6], '7.jpg');
       blob[7] = $("#upload_file_rider")[0].files[0];
       formData.append('media', blob[7], '8.jpg');
       blob[8] = $("#upload_file_setlist")[0].files[0];
       formData.append('media', blob[8], '9.jpg');
       blob[9] = $("#upload_file_prviousclients")[0].files[0];
       formData.append('media', blob[9], '10.jpg');
       blob[10] = $("#upload_file_testimonials")[0].files[0];
       formData.append('media', blob[10], '11.jpg');
      
       $.ajax("/api/signup/upload", {
           method: "POST",
           data: formData,
           processData: false,
           contentType: false,
           success: function (files) {
             var i=0;
             for (var count = 0; count < 11; count++) {
              if (blob[count]!=undefined){
                if(i<files.length){
                  var file = files[i];
                  if(count==0){$scope.ProfileImage=file;}
                  if(count==1){$scope.Images1=file;}
                  if(count==2){$scope.Images2=file;}
                  if(count==3){$scope.Images3=file;}
                  if(count==4){$scope.Images4=file;}
                  if(count==5){$scope.Images5=file;}
                  if(count==6){$scope.Images6=file;}
                  if(count==7){$scope.Rider=file;}
                  if(count==8){$scope.SetList=file;}
                  if(count==9){$scope.Previousclients=file;}
                  if(count==10){$scope.Testimonials=file;}
                  i++;
                }
              } 
            }
            var contentObj = {
              artistsname:$scope.Artists_Name,
              ContactPersonName:$scope.ContactPersonName,
              email1:$scope.email,
              email2:$scope.email2,
              phonenumber1:$scope.phonenumber1,
              phonenumber2:$scope.phonenumber2,
              skype:$scope.skype,
              webo:$scope.webo,
              country:$scope.country,
              IfUsaStateBasedIN:$scope.IfUsaStateBasedIN,
              mailing1:$scope.mailing1,
              mailing2:$scope.mailing2,
              city:$scope.city,
              postcode:$scope.postcode,
              quickresponse:$scope.quickresponse,
              website:$scope.website,
              facebook:$scope.facebook,
              bestwayforsell:$scope.bestwayforsell,
              roaming:$scope.roaming,
              logistics:$scope.logistics,
              performance:$scope.performance,
              Lineup:$scope.Lineup,
              priceguide:$scope.priceguide,
              MinimumFee:$scope.MinimumFee,
              available:$scope.available,
              Residency_contracts:$scope.Residency_contracts,
              MiddleEastbefore:$scope.MiddleEastbefore,
              managementservices:$scope.managementservices,
              whichregion:$scope.whichregion,
              GeneralInsurance:$scope.GeneralInsurance,
              SelfEmployed:$scope.SelfEmployed,
              yrwebsite:$scope.yrwebsite,
              promomaterialurl:$scope.promomaterialurl,
              Youtube1:$scope.Youtube1,
              Youtube2:$scope.Youtube2,
              RecommendedSearchTerms:$scope.RecommendedSearchTerms,
              ProfileImage:$scope.ProfileImage,
              Images1:$scope.Images1,
              Images2:$scope.Images2,
              Images3:$scope.Images3,
              Images4:$scope.Images4,
              Images5:$scope.Images5,
              Images6:$scope.Images6,
              Rider:$scope.Rider,
              SetList:$scope.SetList,
              Previousclients:$scope.Previousclients,
              Testimonials:$scope.Testimonials
            };
            signupService.savesignup(contentObj).then(function(data) {
              $scope.datasavestate="Your Data Has Saved Correctly in Server.";
              angular.element(document.querySelector(".myalertpopup-content")).addClass("active");
              angular.element(document.querySelector(".myalertpopup-overlay")).addClass("active");
              }, function(err) {
                $scope.datasavestate="Your Data Can not Save Correctly in Server.";
                angular.element(document.querySelector(".myalertpopup-content")).addClass("active");
                angular.element(document.querySelector(".myalertpopup-overlay")).addClass("active");
               console.log(err);
             });

           },
           error: function (err) {
               console.log(err);
               return 'error';
           }
       });

       // $('#LoadingLoop').show();
       
   
    }
    $scope.saveok=function(){
      angular.element(document.querySelector(".myalertpopup-overlay")).removeClass("active");
      angular.element(document.querySelector(".myalertpopup-content")).removeClass("active");
   }

  
  $scope.ClickSubmit = function() {
    if($scope.Artists_Name==undefined){return;}
    if($scope.ContactPersonName==undefined){return;}
    if($scope.email1==undefined){return;}
    if($scope.phonenumber1==undefined){return;}
    if($scope.phonenumber2==undefined){return;}
    if($scope.country==undefined){return;}
    if($scope.mailing1==undefined){return;}
    if($scope.mailing2==undefined){return;}
    if($scope.city==undefined){return;}
    if($scope.postcode==undefined){return;}
    if($scope.quickresponse==undefined){return;}
    if($scope.website==undefined){return;}
    if($scope.facebook==undefined){return;}  
    if($scope.bestwayforsell==undefined){return;}
    if($scope.roaming==undefined){return;}  
    if($scope.logistics==undefined){return;}
    if($scope.performance==undefined){return;}  
    if($scope.Lineup==undefined){return;}
    if($scope.priceguide==undefined){return;}  
    if($scope.MinimumFee==undefined){return;}
    if($scope.available==undefined){return;}  
    if($scope.Residency_contracts==undefined){return;}  
    if($scope.MiddleEastbefore==undefined){return;}
    if($scope.managementservices==undefined){return;}  
    if($scope.whichregion==undefined){return;}
    if($scope.GeneralInsurance==undefined){return;}  
    if($scope.SelfEmployed==undefined){return;}
    if($scope.yrwebsite==undefined){return;}  
    if($scope.promomaterialurl==undefined){return;}  
    if($scope.Youtube1==undefined){return;}
    if($scope.Youtube2==undefined){return;} 
    if($scope.RecommendedSearchTerms==undefined){return;}  
    // var blob;
    
    // blob = $("#upload_profilefile")[0].files[0];
    // if(blob!=undefined)
    // {
    //   var formData = new FormData();
    //   formData.append('media', blob, '1.jpg');
    //   signupService.fileUpload(formData).then(function(data) {
    //     $scope.ProfileImage=data;
    //     console.log(data); 
    //    }, function(err) {
    //     console.log(err);
    //    });
    // }
    
    // var blob = $("#upload_imagefile_1")[0].files[0];
    //  $scope.uploadFile(blob,1);
    // blob = $("#upload_imagefile_2")[0].files[0];
    // $scope.uploadFile(blob,2);
    // blob = $("#upload_imagefile_3")[0].files[0];
    // $scope.uploadFile(blob,3);
    // blob = $("#upload_imagefile_4")[0].files[0];
    // $scope.uploadFile(blob,4);
    // blob = $("#upload_imagefile_5")[0].files[0];
    // $scope.uploadFile(blob,5);
    // blob = $("#upload_imagefile_6")[0].files[0];
    // $scope.uploadFile(blob,6);
    // blob = $("#upload_file_rider")[0].files[0];
    // $scope.uploadFile(blob,7);
    // blob = $("#upload_file_setlist")[0].files[0];
    // $scope.uploadFile(blob,8);
    // blob = $("#upload_file_prviousclients")[0].files[0];
    // $scope.uploadFile(blob,9);
    // blob = $("#upload_file_testimonials")[0].files[0];
    // $scope.uploadFile(blob,10);
    $scope.uploadFile();
  
    // if($scope.ProfileImage!=undefined){$scope.uploadFile($scope.ProfileImage);}
    // if($scope.Images1!=undefined){$scope.uploadFile($scope.Images1);}
    // if($scope.Images2!=undefined){$scope.uploadFile($scope.Images2);}
    // if($scope.Images3!=undefined){$scope.uploadFile($scope.Images3);}
    // if($scope.Images4!=undefined){$scope.uploadFile($scope.Images4);}
    // if($scope.Images5!=undefined){$scope.uploadFile($scope.Images5);}
    // if($scope.Images6!=undefined){$scope.uploadFile($scope.Images6);}
    // if($scope.Rider!=undefined){$scope.uploadFile($scope.Rider);}
    // if($scope.SetList!=undefined){$scope.uploadFile($scope.SetList);}
    // if($scope.Previousclients!=undefined){$scope.uploadFile($scope.Previousclients);}
    // if($scope.Testimonials!=undefined){$scope.uploadFile($scope.Testimonials);}
    // console.log("signup:"+contentObj.images1);
       
    }
  $scope.$on('$viewContentLoaded', function(){
    $(function() {
        $('.gallery a').lightbox(); 
        });
    $(document).ready(function () {
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
      // $('#rypp-demo-1').rypp(api_key, {
      //     update_title_desc: true, // Default false
      //     autoplay: false, autonext: false, loop: false, mute: false, debug: false
      // }
      // );
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
    //credits http://www.hagenburger.net/blob/HTML5-Input-Placeholder-Fix-With-jQuery.html
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
    //credits http://www.hagenburger.net/blob/HTML5-Input-Placeholder-Fix-With-jQuery.html
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
