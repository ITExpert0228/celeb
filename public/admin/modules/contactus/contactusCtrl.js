app.controller('contactusCtrl',['$scope', '$location','contactusService','authService', function($scope,$location, contactusService,authService) {
 
    $scope.$on('$viewContentLoaded', function(){
        function format ( d ) {
            // `d` is the original data object for the row
            return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
                '<tr>'+
                    '<td>Client Country Based:</td>'+
                    '<td>'+d.clientcountry+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>If US Client-State:</td>'+
                    '<td>'+d.uiclientstate+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Company Website:</td>'+
                    '<td>'+d.CompanyWebsite+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Industry:</td>'+
                    '<td>'+d.Industry+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Events per year:</td>'+
                    '<td>'+d.Events+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Service Required:</td>'+
                    '<td>'+d.Service+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Type of Event:</td>'+
                    '<td>'+d.TypeofEvent+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Event Date:</td>'+
                    '<td>'+d.EventDate+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Event Country:</td>'+
                    '<td>'+d.EventCountry+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>If US Event - State:</td>'+
                    '<td>'+d.IfUSEventState+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Event City:</td>'+
                    '<td>'+d.EventCity+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Event Venue Name & Address:</td>'+
                    '<td>'+d.EventVenueName+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Event Number of Guests:</td>'+
                    '<td>'+d.EventNumberofGuests+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Budget Currency:</td>'+
                    '<td>'+d.BudgetCurrency+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Budge:</td>'+
                    '<td>'+d.Budget+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Additional Comments:</td>'+
                    '<td>'+d.AdditionalComments+'</td>'+
                '</tr>'+
                '<tr>'+
                    '<td>Subscribe to E-News:</td>'+
                    '<td>'+d.SubscribetoENews+'</td>'+
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
                 
              ],
              "pageLength": 10,
              "ajax": "/api/contactus/getAll",
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
                       },      {
                          "targets": 16,
                          "orderable": true,
                          "visible": false,
                       },
                       {
                           "targets": 17,
                           "orderable": true,
                           "visible": false,
                        },
                        {
                           "targets": 18,
                           "orderable": true,
                           "visible": false,
                        },      {
                           "targets": 19,
                           "orderable": true,
                           "visible": false,
                        },
                        {
                            "targets": 20,
                            "orderable": true,
                            "visible": false,
                         },
                         {
                            "targets": 21,
                            "orderable": true,
                            "visible": false,
                         },      {
                            "targets": 22,
                            "orderable": true,
                            "visible": false,
                         },
                         {
                             "targets": 23,
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
                { "data": "company" },
                { "data": "firstname" },
                { "data": "lastname" },
                { "data": "emails" },
                { "data": "phonenumber" },
                { "data": "mobile" },
                { "data": "clientcountry" },
                { "data": "uiclientstate" },
                { "data": "CompanyWebsite" },
                { "data": "Industry" },
                { "data": "Events" },
                { "data": "Service" },
                { "data": "TypeofEvent" },
                { "data": "EventDate" },
                { "data": "EventCountry" },
                { "data": "IfUSEventState" },
                { "data": "EventCity" },
                { "data": "EventVenueName" },
                { "data": "EventNumberofGuests" },
                { "data": "BudgetCurrency" },
                { "data": "Budget" },
                {"data":"AdditionalComments"},
                {"data":"SubscribetoENews"}
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
$scope.logout = function() {
    authService.logout().then(function() {
        $location.path('/admin/login');
    });
}
}]);
