app.controller('entertainmentCtrl',['$scope','$timeout', 'entertainmentService','authService', function($scope, $timeout,entertainmentService,authService) {
 
    $scope.$on('$viewContentLoaded', function(){

      function format ( d ) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
            '<tr>'+
                '<td>profileimage:</td>'+
                '<td>'+d.profileimage+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>profileurl:</td>'+
                '<td>'+d.profileurl+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>tag:</td>'+
                '<td>'+d.tag+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>events type:</td>'+
                '<td>'+d.eventstype+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>reason:</td>'+
                '<td>'+d.reason+'</td>'+
            '</tr>'+
            '<tr>'+
            '<td>reasontobook:</td>'+
            '<td>'+d.reasontobook+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>location:</td>'+
                '<td>'+d.location+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>video:</td>'+
                '<td>'+d.vediosrc+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>images:</td>'+
                '<td>'+d.images+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>Biography:</td>'+
                '<td>'+d.Biography+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>PreviousClients:</td>'+
                '<td>'+d.PreviousClients+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>Testimonials:</td>'+
                '<td>'+d.Testimonials+'</td>'+
            '</tr>'+
            '<tr>'+
                '<td>SetList:</td>'+
                '<td>'+d.SetList+'</td>'+
            '</tr>'+
        '</table>';
    }
       var editor;
       $(document).ready(function() {
        editor = new $.fn.dataTable.Editor( {
          table: "#example",
          ajax: "/api/entertainment/save",
          idSrc:  'id',
          fields: [ 
              {
                 label: "id:",
                  name: "_id",
                  type: "hidden"
              }, {
                  label: "title:",
                  name: "title",
                  type: "textarea"
              }, {
                  label: "profileimage:",
                  name: "profileimage",
                  type: "textarea"
              }, {
                 label: "profileurl:",
                  name: "profileurl",
                  type: "textarea"
              }, {
              label: "tag:",
              name: "tag",
              type: "textarea"
              }, {
              label: "events type:",
              name: "eventstype",
              type: "textarea"
              }, {
                label: "reason:",
                name: "reason",
                type: "textarea"
                },
                 {
                    label: "reasontobook:",
                    name: "reasontobook",
                    type: "textarea"
                    }, {
                label: "location:",
                name: "location",
                type: "textarea"
                }, {
                label: "video:",
                name: "vediosrc",
                type: "textarea"
                }, {
                label: "images:",
                name: "images",
                type: "textarea"
                }, {
                label: "Biography:",
                name: "Biography",
                type: "textarea"
                }, {
                label: "PreviousClients:",
                name: "PreviousClients",
                type: "textarea"
                }, {
                label: "Testimonials:",
                name: "Testimonials",
                type: "textarea"
                }, {
                  label: "SetList:",
                  name: "SetList",
                  type: "textarea"
                  }
          ]
      } );
      editor.field('title').input().addClass('mytextareaClass');
       var table =  $('#example').DataTable( {
            dom: 'Bfrtip',
            buttons: [
                'copyHtml5',
                'excelHtml5',
                'csvHtml5',
                
                { extend: "create", editor: editor },
                { extend: "edit",   editor: editor },
                { extend: "remove", editor: editor }
            ],
             "scrollX": true,
             "pageLength": 10,
            "ajax": "/api/entertainment/getsAll",
            columnDefs: [
              { "width": "20px", "targets": '0' } 
            ],
            "columns": [
              {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
              { "data": "_id" },
              { "data": "title" },
              // { "data": "profileimage" },
              // { "data": "profileurl" },
              // { "data": "tag" },
              // { "data": "eventstype" },
              // { "data": "reason" },
              // { "data": "location" },
              // { "data": "vediosrc" },
              // { "data": "images" },
              // { "data": "Biography" },
              // { "data": "PreviousClients" },
              // { "data": "Testimonials" },
              // { "data": "SetList" },
              // {"data": ""}
          ],
          select: {
              style: 'single'
          }
        } );
        $('#example tbody').on('click', 'td.details-control', function () {
          var tr = $(this).closest('tr');
          var row = table.row( tr );
   
          if ( row.child.isShown() ) {
              // This row is already open - close it
              row.child.hide();
              tr.removeClass('shown');
          }
          else {
              // Open this row
              row.child( format(row.data()) ).show();
              tr.addClass('shown');
          }
      } );
        // $('#example tbody').on( 'click', 'button', function () {
        //    // var data = table.row( $(this).parents('tr') ).data();
        //     //alert( data);
        //     var tr = $(this).closest('tr');
        //     var row = table.row( tr );
        //     console.log(row.data());
        //     $scope.rowdata=[];
        //     $scope.rowdata=row.data();
        //     $scope.id=row.data()._id;
        //     $scope.title=row.data().title;
        //     $scope.profileurl=row.data().profileurl;
        //     $scope.tag=row.data().tag;
        //     $scope.eventstype=row.data().eventstype;
        //     $scope.reason=row.data().reason;
        //     $scope.location=row.data().location;
        //     $scope.vediosrc=row.data().vediosrc;
        //     $scope.images=row.data().images;
        //     $scope.Biography=row.data().Biography;
        //     $scope.PreviousClients=row.data().PreviousClients;
        //     $scope.Testimonials=row.data().Testimonials;
        //     $scope.SetList=row.data().SetList;
        //     $scope.$digest();
        //     $("#responsive-modal").show();
        //     $("#responsive-modal").removeClass('fade');
        //   });
        //   $("#closemodal").click(function(){
        //     $("#responsive-modal").hide();
        //     $("#responsive-modal").addClass('fade');
        //   }); 
        //   $("#closemodal1").click(function(){
        //     $("#responsive-modal").hide();
        //     $("#responsive-modal").addClass('fade');
        //   });
        //   $("#savemodal").click(function(){
        //     $("#responsive-modal").hide();
        //     $("#responsive-modal").addClass('fade');
       
        //   });
 
         });
                  
    });

  $scope.getentertainmentList = function() {
    entertainmentService.getentertainmentList().then(function(data) {
        $scope.entertainmentarray=[];
        console.log($scope.entertainmentarray);
        $count=0;
        angular.forEach(data, function(value, key){
        if($count<200)
        {
           $scope.entertainmentarray.push(value);
            $count++;
        }
        });
       $timeout($('.table').trigger('footable_redraw'), 300);
    }, function(err) {
        console.log(err);
    }).finally(function() {
        
    });
  
  }
  
  $scope.SetData=function(_id,title,profileurl,tag,eventstype,reason,location,vediosrc,images,Biography,PreviousClients,Testimonials,SetList){
      $scope.id=_id;
      $scope.title=title;
      $scope.profileurl=profileurl;
      $scope.tag=tag;
      $scope.eventstype=eventstype;
      $scope.reason=reason;
      $scope.location=location;
      $scope.vediosrc=vediosrc;
      $scope.images=images;
      $scope.Biography=Biography;
      $scope.PreviousClients=PreviousClients;
      $scope.Testimonials=Testimonials;
      $scope.SetList=SetList;
  }
  $scope.logout = function() {
    authService.logout().then(function() {
        $location.path('/admin/login');
        //window.location.href = '/admin/login';
    });
}
  $scope.saveContent=function() {

    if ($scope.id == '') {
    //  $('#materialRegisterFormPasswordConfirm').addClass('is-invalid');
      return;
    }
  var contentObj = {
      title:$scope.title,
      profileurl:$scope.profileurl,
      tag:$scope.tag,
      eventstype:$scope.eventstype,
      reason:$scope.reason,
      location:$scope.location,
      vediosrc:$scope.vediosrc,
      images:$scope.images,
      Biography:$scope.Biography,
      PreviousClients:$scope.PreviousClients,
      Testimonials:$scope.Testimonials,
      SetList:$scope.SetList  
  };
  

    entertainmentService.saveContent($scope.id,contentObj).then(function(data) {
          alert("save ok!");
         }, function(err) {
          alert("save failed!");
          console.log(err);
      });
    }
    
}]);
