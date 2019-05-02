app.controller('contactusCtrl',['$scope', '$location','$cookieStore','contactusService','authService', function($scope,$location,$cookieStore, contactusService,authService) {
 
    $scope.$on('$viewContentLoaded', function(){
        editor = new $.fn.dataTable.Editor( {
            table: "#example",
            ajax: "/api/contact/deleteContent",
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
                    '<td>'+d.City+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Contact_State:</td>'+
                    '<td>'+d.State+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Contact_Zip:</td>'+
                    '<td>'+d.Zip+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Contact_Country:</td>'+
                    '<td>'+d.Country+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>What_The_Booking_Is_For:</td>'+
                    '<td>'+d.Booking+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Event_Location:</td>'+
                    '<td>'+d.Location+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Event Date:</td>'+
                    '<td>'+d.Date+'</td>'+
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
              "ajax": "/api/contact/getAll",
              "scrollX": true,
              columnDefs: [
                { "width": "20px", "targets": '0' } 
                 ],
                 columnDefs: [
                    {
                        "targets": 7,
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
                       },
                       {
                          "targets": 15,
                          "orderable": true,
                          "visible": false,
                       },{
                          "targets": 16,
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
                { "data": "Email" },
                { "data": "Office_Phone" },
                { "data": "Address" },
                { "data": "City" },
                { "data": "State" },
                { "data": "Zip" },
                { "data": "Country" },
                { "data": "Booking" },
                { "data": "Location" },
                { "data": "Date" },
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
  $scope.getContactusList = function() {
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
