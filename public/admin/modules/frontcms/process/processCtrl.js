app.controller('processCtrl',['$scope', '$location','$cookieStore','$rootScope','authService','processService', function($scope, $location,$cookieStore, $rootScope,authService,processService) {
   
    $scope.processinit=function(){
        
        processService.getProcessList().then(function(data) {
            if(data!=undefined){
            $scope.id=data.id;
          //  ckeidtor= angular.element(document.querySelector("#editor1"));
            $scope.editor1=data.process;
            $scope.editorbuf=data.process;
            CKEDITOR.instances.editor1.setData($scope.editorbuf);
        }
        }, function(err) {
      //      console.log(err);
        }).finally(function() {
            
        });
    }  
    $scope.saveContent=function(){
        id=$scope.id;
        content={data:$scope.content};
        processService.saveContent(id,content).then(function(data) {
            if(data!=undefined){
            alert("Your Data is Saved  correctly in a server!")
            }
        }, function(err) {
        }).finally(function() {
        });
    }  
    $scope.$on('$viewContentLoaded', function(){

        var ckeidtor= CKEDITOR.replace( 'editor1', {
            toolbarCanCollapse:true,
          //  colorButton_colors : 'CF5D4E,454545,FFF,CCC,DDD,CCEAEE,66AB16',
          extraPlugins: 'colorbutton,colordialog,font',
          colorButton_colors: 'CF5D4E,454545,FFF,CCC,DDD,CCEAEE,66AB16',
          height:500,
          colorButton_enableAutomatic: false
        } );
        $(document).ready(function() {
            ckeidtor.on('instanceReady', function(evt) {
                $scope.$apply(function() {
              //      ckeidtor.setData($scope.editorbuf);
                });
               
                // You can also get the editor from the event
                // evt.editor.setData('<p>sdda dasdsada</p>');
            });
            ckeidtor.on( 'change', function( evt ) {
                // getData() returns CKEditor's HTML content.
                $scope.content=evt.editor.getData();
               // console.log( 'Total bytes: ' + evt.editor.getData().length );
            });
           
        });
    });
    $scope.logout = function() {
        authService.logout().then(function() {
            $location.path('/admin/login');
        });
    }
}]);
