app.controller('contactusCtrl',['$scope', '$location','$cookieStore','contactusService','authService', function($scope,$location,$cookieStore, contactusService,authService) {
 
    $scope.$on('$viewContentLoaded', function(){
        editor = new $.fn.dataTable.Editor( {
            table: "#example",
            ajax: "/api/contactus/deleteContent",
            idSrc:  '_id',
            fields: [ 
                {
                   label: "Id:",
                    name: "_id",
                    type: "hidden"
                }
            ]
        } );
        function format ( d ) {
            // `d` is the original data object for the row
            return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
                '<tr>'+
                    '<td>Message:</td>'+
                    '<td>'+d.Message+'</td>'+
                '</tr>'+
            '</table>';
        }
        $(document).ready(function() {
            var table =   $('#example').DataTable( {
              dom: 'Bfrtip',
              buttons: [
                  'copyHtml5',
                  'excelHtml5',
                  'csvHtml5',
                  { extend: "remove", editor: editor }
              ],
              "pageLength": 10,
              "deferRender": true,
              'processing': true,
              'language': {
                  'loadingRecords': '&nbsp;',
                  "processing": '<div class="loader"></div>'
              },
              "ajax": "/api/contactus/getAll",
              "scrollX": true,
              columnDefs: [
                { "width": "20px", "targets": '0' } 
                 ],
                 columnDefs: [
                    {
                        "targets": 4,
                        "orderable": true,
                        "visible": false,
                     }
                ],
               "columns": [
                {
                    "className":      'details-control',
                    "orderable":      false,
                    "data":           null,
                    "defaultContent": ''
                },
                { "data": "Full_Name" },
                { "data": "Email" },
                { "data": "Phone" },
                { "data": "Message" }
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
        
        });
        
    });
  $scope.getContactBookingList = function() {
    contactusService.getContactusList().then(function(data) {
        $scope.contactusarray=data;
        console.log($scope.contactusarray);
    }, function(err) {
        console.log(err);
    }).finally(function() {
        
    });
}
$scope.contactusInit=function(){
    $scope.username = $cookieStore.get('user');
    console.log($scope.username);
    $scope.adminName= $scope.username.firstName+" "+$scope.username.lastName;
}
$scope.logout = function() {
    authService.logout().then(function() {
        $location.path('/admin/login');
    });
}
}]);
