app.controller('requestCtrl',['$scope', '$location','$cookieStore','authService', function($scope,$location,$cookieStore,authService) {
 
    $scope.$on('$viewContentLoaded', function(){
        editor = new $.fn.dataTable.Editor( {
            table: "#example",
            ajax: "/api/request/deleteContent",
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
                    '<td>Contact_City:</td>'+
                    '<td>'+d.Booking+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Contact_State:</td>'+
                    '<td>'+d.Location+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Event Date:</td>'+
                    '<td>'+d.Date+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Specific_Talent_of_Interest:</td>'+
                    '<td>'+d.Specific_Talent_of_Interest+'</td>'+
                '</tr>'+
                '<tr>'+
                     '<td>Title:</td>'+
                     '<td>'+d.Title+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Fee_Range_Min:</td>'+
                    '<td>'+d.Fee_Range_A+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Fee_Range_Max:</td>'+
                    '<td>'+d.Fee_Range_B+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Additional_Information:</td>'+
                    '<td>'+d.Additional_Information+'</td>'+
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
              "ajax": "/api/request/getAll",
              "scrollX": true,
              columnDefs: [
                { "width": "20px", "targets": '0' } 
                 ],
                 columnDefs: [
                    {
                        "targets": 6,
                        "orderable": true,
                        "visible": false,
                     },
                    {
                        "targets": 8,
                        "orderable": true,
                        "visible": false,
                     },
                     {
                        "targets": 9,
                        "orderable": true,
                        "visible": false,
                     },      {
                        "targets": 10,
                        "orderable": true,
                        "visible": false,
                     },
                     {
                         "targets": 11,
                         "orderable": true,
                         "visible": false,
                      },
                      {
                         "targets": 12,
                         "orderable": true,
                         "visible": false,
                      },      {
                         "targets": 13,
                         "orderable": true,
                         "visible": false,
                      },
                      {
                          "targets": 14,
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
                { "data": "Organization" },
                { "data": "First_Name" },
                { "data": "Last_Name" },
                { "data": "Office_Phone" },
                { "data": "Email" },
                { "data": "Booking" },
                { "data": "EventName" },
                { "data": "Location" },
                { "data": "Date" },
                { "data": "Specific_Talent_of_Interest" },
                { "data": "Title" },
                { "data": "Fee_Range_A" },
                { "data": "Fee_Range_B" },
                { "data": "Additional_Information" }
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
  $scope.getList = function() {
    Service.getList().then(function(data) {
        $scope.array=data;
        console.log($scope.array);
    }, function(err) {
        console.log(err);
    }).finally(function() {
        
    });
}

$scope.requestInit=function(){
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
