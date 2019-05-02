app.controller('performersCtrl',['authService','$scope','$rootScope','$cookieStore', '$location', function(authService,$scope,$rootScope,$cookieStore,$location) {
    $scope.logout = function() {
        authService.logout().then(function() {
            //window.location.href = '/admin/login';
            $location.path('/admin/login');
        });
    }
    $scope.$on('$viewContentLoaded', function(){

        $(document).ready(function() {
            editor = new $.fn.dataTable.Editor( {
                table: "#example",
                ajax: "/api/celebdata/saveContent",
                idSrc:  '_id',
                fields: [ 
                    {
                       label: "Id:",
                        name: "_id",
                        type: "hidden"
                    }, {
                        label: "Name:",
                        name: "name",
                    }, {
                        label: "URL:",
                        name: "url"
                    }, {
                        label: "Category:",
                        name: "Category"
                    }, {
                        label: "Type:",
                        name: "Type",
                    },{
                        label: "Profile image:",
                        name: "image",
                    },{
                        label: "Profile text:",
                        name: "profiletext",
                        type: "textarea"
                    },{
                        label: "Price:",
                        name: "pricing"
                    },{
                        label: "FAQ question1:",
                        name: "faq1.ques",
                        type: "textarea"
                    },{
                        label: "FAQ answer1:",
                        name: "faq1.answ",
                        type: "textarea"
                    }
                    ,{
                        label: "FAQ question2:",
                        name: "faq2.ques",
                        type: "textarea"
                    },{
                        label: "FAQ answer2:",
                        name: "faq2.answ",
                        type: "textarea"
                    },{
                        label: "FAQ question3:",
                        name: "faq3.ques",
                        type: "textarea"
                    },{
                        label: "FAQ answer3:",
                        name: "faq3.answ",
                        type: "textarea"
                    },{
                        label: "FAQ question4:",
                        name: "faq4.ques",
                        type: "textarea"
                    },{
                        label: "FAQ answer4:",
                        name: "faq4.answ",
                        type: "textarea"
                    }
                ]
            } );
            function format(d) {
                // `d` is the original data object for the row
                return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
                    '<tr>'+
                    '<td>Profile Image Url:</td>'+
                    '<td>'+d.image+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Profile Text:</td>'+
                    '<td>'+d.profiletext+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Price:</td>'+
                    '<td>'+d.pricing+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>FAQ question1:</td>'+
                    '<td>'+d.faq1.ques+'</td>'+
                    '</tr>'+
                    '<td>FAQ answer1:</td>'+
                    '<td>'+d.faq1.answ+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>FAQ question2:</td>'+
                    '<td>'+d.faq2.ques+'</td>'+
                    '</tr>'+
                    '<td>FAQ answer2:</td>'+
                    '<td>'+d.faq2.answ+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>FAQ question3:</td>'+
                    '<td>'+d.faq3.ques+'</td>'+
                    '</tr>'+
                    '<td>FAQ answer3:</td>'+
                    '<td>'+d.faq3.answ+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>FAQ question4:</td>'+
                    '<td>'+d.faq4.ques+'</td>'+
                    '</tr>'+
                    '<td>FAQ answer4:</td>'+
                    '<td>'+d.faq4.answ+'</td>'+
                    '</tr>'+
                '</table>';
            }

      // Row Toggler
      var table = $('#example').DataTable( {
        dom: 'Bfrtip',
       "pageLength": 10,
       "deferRender": true,
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ],
        "scrollX": true,
        "ajax": "/api/celebdata/getAll",
        "columns": [
            {
            "className":      'details-control',
            "orderable":      false,
            "data":           null,
            "defaultContent": ''
            },
          { "data": "name" },
          { "data": "url" },
          { "data": "Category" },
          { "data": "Type" },
          { "data": "image" },
          { "data": "profiletext" },
          { "data": "pricing" },
          { "data": "faq1.ques" },
          { "data": "faq1.answ" },
          { "data": "faq2.ques" },
          { "data": "faq2.answ" },
          { "data": "faq3.ques" },
          { "data": "faq3.answ" },
          { "data": "faq4.ques" },
          { "data": "faq4.answ" },
         
        ],
         columnDefs: [
            { "width": "20px", "targets": '0' } 
             ],
         columnDefs: [
            {
                "targets": 5,
                "orderable": true,
                "visible": false,
             },
             {
                "targets": 6,
                "orderable": true,
                "visible": false,
             },{
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
               },{
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
                 },
                 {
                    "targets": 13,
                    "orderable": true,
                    "visible": false,
                 },{
                    "targets": 14,
                    "orderable": true,
                    "visible": false,
                  },
                 {
                     "targets": 15,
                     "orderable": true,
                     "visible": false,
                  }
        ],
        select: {
            style: 'single'
        }});
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

    $scope.performersInit=function(){
        $scope.username = $cookieStore.get('user');
        console.log($scope.username);
        $scope.adminName= $scope.username.firstName+" "+$scope.username.lastName;
    }
}]);
