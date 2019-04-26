app.controller('frontcmsCtrl',['$scope', '$location','frontcmsService','$rootScope','authService', function($scope, $location, frontcmsService,$rootScope,authService) {
    $scope.$on('$viewContentLoaded', function(){
        $(document).ready(function() {
         $('.textarea_editor').wysihtml5();
     // Basic
     $('.dropify').dropify();

     // Translated
     $('.dropify-fr').dropify({
         messages: {
             default: 'Glissez-déposez un fichier ici ou cliquez',
             replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
             remove: 'Supprimer',
             error: 'Désolé, le fichier trop volumineux'
         }
     });

     // Used events
     var drEvent = $('#input-file-events').dropify();

     drEvent.on('dropify.beforeClear', function(event, element) {
         return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
     });

     drEvent.on('dropify.afterClear', function(event, element) {
         alert('File deleted');
     });

     drEvent.on('dropify.errors', function(event, element) {
         console.log('Has Errors');
     });

     var drDestroy = $('#input-file-to-destroy').dropify();
     drDestroy = drDestroy.data('dropify')
     $('#toggleDropify').on('click', function(e) {
         e.preventDefault();
         if (drDestroy.isDropified()) {
             drDestroy.destroy();
         } else {
             drDestroy.init();
         }
     })
     });
    });
    //  $scope.saveok=function(){
    //     angular.element(document.querySelector(".myalertpopup-overlay")).removeClass("active");
    //     angular.element(document.querySelector(".myalertpopup-content")).removeClass("active");
    //  }
    $scope.frontcmsinit=function(){
    
        frontcmsService.getfrontcmsList().then(function(data) {
          
          //  console.log($scope.signuparray);
          if(data!=undefined){
              $scope.id=data[0]._id;
              $scope.frontcmstitle=data[0].title;
              $scope.frontcmscontent=data[0].content;
              $scope.image1="uploads/"+data[0].img[0];
              $scope.image2="uploads/"+data[0].img[1];
              $scope.image3="uploads/"+data[0].img[2];
              $scope.image4="uploads/"+data[0].img[3];
              $scope.image5="uploads/"+data[0].img[4];
              $scope.image6="uploads/"+data[0].img[5];
              $scope.tmpfronttitle=data[0].title;
              $scope.tmpfrontcmscontent=data[0].content;
             // $scope.frontcmscontent = $sce.trustAsHtml($scope.frontcmscontent);
          }
        }, function(err) {
            console.log(err);
        }).finally(function() {
            
        });
    
    }

    $scope.saveok=function(){
        angular.element(document.querySelector(".myalertpopup-overlay")).removeClass("active");
        angular.element(document.querySelector(".myalertpopup-content")).removeClass("active");
     }
   $scope.saveContent=function(){
    $id=  $scope.id;
    $scope.frontcmscontent= angular.element(document.querySelector("#frontcmscontent")).val();//$("#user_input .wysihtml5-sandbox").contents().find("body").html()
    var contentObj = {
        title:$scope.frontcmstitle,
        content:$scope.frontcmscontent
    };
    console.log($scope.frontcmscontent);
    frontcmsService.saveContent($id,contentObj).then(function(data) {
        console.log("check:"+data);
    $scope.datasavestate="Your Data Has Saved Correctly in Server.";
    angular.element(document.querySelector(".myalertpopup-content")).addClass("active");
    angular.element(document.querySelector(".myalertpopup-overlay")).addClass("active");
    }, function(err) {
        // $scope.datasavestate="Your Data Can not Save Correctly in Server.";
        // angular.element(document.querySelector(".myalertpopup-content")).addClass("active");
        // angular.element(document.querySelector(".myalertpopup-overlay")).addClass("active");
        console.log(err);
    }).finally(function() {
    });
   }
   
   $scope.saveImage=function(){
    $id=  $scope.id;
        var formData = new FormData();
        var blob=[6];
        blob[0] = $("#fileupload1")[0].files[0];
        formData.append('media', blob[0], '1.jpg');
        blob[1] = $("#fileupload2")[0].files[0];
        formData.append('media', blob[1], '2.jpg');
        blob[2] = $("#fileupload3")[0].files[0];
        formData.append('media', blob[2], '3.jpg');
        blob[3] = $("#fileupload4")[0].files[0];
        formData.append('media', blob[3], '4.jpg');
        blob[4] = $("#fileupload5")[0].files[0];
        formData.append('media', blob[4], '5.jpg');
        blob[5] = $("#fileupload6")[0].files[0];
        formData.append('media', blob[5], '6.jpg');

        $.ajax("/api/frontcms/uploadimages", {
        method: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (files) {
        var i=0;
        for (var count = 0; count < 6; count++) {
        if (blob[count]!=undefined){
        if(i<files.length){
        var file = files[i];
        if(count==0){$scope.Images0=file;}
        if(count==1){$scope.Images1=file;}
        if(count==2){$scope.Images2=file;}
        if(count==3){$scope.Images3=file;}
        if(count==4){$scope.Images4=file;}
        if(count==5){$scope.Images5=file;}
        i++;
        }
        } 
        }
        var contentObj = {
        img: [
        $scope.Images0,
        $scope.Images1,
        $scope.Images2,
        $scope.Images3,
        $scope.Images4,
        $scope.Images5
        ]
        };
        frontcmsService.updateImages($id,contentObj).then(function(data) {
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
   }
   $scope.logout = function() {
    authService.logout().then(function() {
        $location.path('/admin/login');
        //window.location.href = '/admin/login';
    });
    }
   $scope.resetContent=function(){
    $scope.frontcmstitle= $scope.tmpfronttitle;
    $scope.frontcmscontent=$scope.tmpfrontcmscontent;
    }
 
}]);
