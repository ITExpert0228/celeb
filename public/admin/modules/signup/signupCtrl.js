app.controller('signupCtrl',['authService','$scope','$rootScope', '$location','signupService', function(authService,$scope,$rootScope,$location, signupService) {
    $scope.logout = function() {
        authService.logout().then(function() {
            //window.location.href = '/admin/login';
            $location.path('/admin/login');
        });
    }
    $scope.$on('$viewContentLoaded', function(){

        $(document).ready(function() {

            function format ( d ) {
                // `d` is the original data object for the row
                return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
                    '<tr>'+
                    '<td>Webo or QQ:</td>'+
                    '<td>'+d.Webo+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Country Based:</td>'+
                    '<td>'+d.CountryBased+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>If USA- State based in:</td>'+
                    '<td>'+d.IfUSAStatebasedin+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Mailing Address 1:</td>'+
                    '<td>'+d.MailingAddress1+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Mailing Address 2:</td>'+
                    '<td>'+d.MailingAddress2+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>City:</td>'+
                    '<td>'+d.City+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Post Code:</td>'+
                    '<td>'+d.PostCode+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Best Method to contact:</td>'+
                    '<td>'+d.BestMethodtocontact+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Website:</td>'+
                    '<td>'+d.Website+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Facebook Page:</td>'+
                    '<td>'+d.Facebook+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Best way to sell:</td>'+
                    '<td>'+d.Bestwaytosell+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Roaming/Stage/Both:</td>'+
                    '<td>'+d.Roaming+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Logistics or Special Requirements:</td>'+
                    '<td>'+d.Logistics+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Performance/ Set Length:</td>'+
                    '<td>'+d.Performance+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Price Guide for Domestic Events:</td>'+
                    '<td>'+d.PriceGuide+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Minimum Fee:</td>'+
                    '<td>'+d.MinimumFee+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Are you available to perform overseas:</td>'+
                    '<td>'+d.overseas+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Are you interested in Residency contracts?:</td>'+
                    '<td>'+d.Residencycontracts+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Have you performed in the Middle East before?:</td>'+
                    '<td>'+d.performedintheMiddleEast+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Are you interested in our management services?:</td>'+
                    '<td>'+d.managementservices+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>If Yes which region:</td>'+
                    '<td>'+d.whichregion+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Do you have Public Liability/ General Insurance:</td>'+
                    '<td>'+d.LiabilityGeneralInsurance+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Confirmed terms of being Self Employed:</td>'+
                    '<td>'+d.SelfEmployed+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Is there promo material on your website?:</td>'+
                    '<td>'+d.promomaterial+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>URL for promo material:</td>'+
                    '<td>'+d.URLforpromomaterial+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Link to a Youtube video (preferably HD quality):</td>'+
                    '<td>'+d.Youtubevideo+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Second Youtube video you would like to show:</td>'+
                    '<td>'+d.SecondYoutubevideo+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Recommended Search Terms:</td>'+
                    '<td>'+d.RecommendedSearchTerms+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Profile Image:</td>'+
                    '<td>'+d.ProfileImage+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Images 1:</td>'+
                    '<td>'+d.Images1+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Images 2:</td>'+
                    '<td>'+d.Images2+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Images 3:</td>'+
                    '<td>'+d.Images3+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Images 4:</td>'+
                    '<td>'+d.Images4+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Images 5:</td>'+
                    '<td>'+d.Images5+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Images 6:</td>'+
                    '<td>'+d.Images6+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Rider:</td>'+
                    '<td>'+d.Rider+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Set List:</td>'+
                    '<td>'+d.SetList+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Previous clients:</td>'+
                    '<td>'+d.Previousclients+'</td>'+
                    '</tr>'+
                    '<tr>'+
                    '<td>Testimonials:</td>'+
                    '<td>'+d.Testimonials+'</td>'+
                    '</tr>'+
                    '<tr>'+
                '</table>';
            }

      // Row Toggler
      var table = $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
           
        ],
        "pageLength": 10,
        "scrollX": true,
        "ajax": "/api/signup/getAll",
        "columns": [
            {
            "className":      'details-control',
            "orderable":      false,
            "data":           null,
            "defaultContent": ''
            },
          { "data": "actname" },
          { "data": "contactpersonname" },
          { "data": "email1" },
          { "data": "email2" },
          { "data": "phonenumber" },
          { "data": "othernumber" },
          { "data": "skype" },
          { "data": "Webo" },
          { "data": "CountryBased" },
          { "data": "IfUSAStatebasedin" },
          { "data": "MailingAddress1" },
          { "data": "MailingAddress2" },
          { "data": "City" },
          { "data": "PostCode" },
          { "data": "BestMethodtocontact" },
          { "data": "Website" },
          { "data": "Facebook" },
          { "data": "Bestwaytosell" },
          { "data": "Roaming" },       
          { "data": "Logistics" },
          {"data":"Performance"},
          {"data":"LineupOptions"},
          { "data": "PriceGuide" },
          { "data": "MinimumFee" },
          {"data":"overseas"},
          {"data":"Residencycontracts"},
          { "data": "performedintheMiddleEast" },
          { "data": "managementservices" },
          {"data":"whichregion"},
          {"data":"LiabilityGeneralInsurance"},
          { "data": "SelfEmployed" },
          { "data": "promomaterial" },
          { "data": "URLforpromomaterial" },
          {"data":"Youtubevideo"},
          {"data":"SecondYoutubevideo"},
          { "data": "RecommendedSearchTerms" },
          { "data": "ProfileImage" },
          {"data":"Images1"},
          {"data":"Images2"},
          { "data": "Images3" },
          { "data": "Images4" },
          {"data":"Images5"},
          {"data":"Images6"},
          {"data":"Rider"},
          { "data": "SetList" },
          { "data": "Previousclients" },
          {"data":"Testimonials"},
           {"data":"Check"}
          
        ],
        columnDefs: [
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
                  },
                  {
                     "targets": 24,
                     "orderable": true,
                     "visible": false,
                  },      {
                     "targets": 25,
                     "orderable": true,
                     "visible": false,
                  },
                  {
                      "targets": 26,
                      "orderable": true,
                      "visible": false,
                   },
                   {
                      "targets": 27,
                      "orderable": true,
                      "visible": false,
                   },      {
                      "targets": 28,
                      "orderable": true,
                      "visible": false,
                   },
            {
                "targets": 29,
                "orderable": true,
                "visible": false,
             },
             {
                "targets": 30,
                "orderable": true,
                "visible": false,
             },      {
                "targets": 31,
                "orderable": true,
                "visible": false,
             },
            {
                "targets": 33,
                "orderable": true,
                "visible": false,
             },
             {
                "targets": 34,
                "orderable": true,
                "visible": false,
             },      {
                "targets": 35,
                "orderable": true,
                "visible": false,
             },
            {
                "targets": 36,
                "orderable": true,
                "visible": false,
             },
             {
                "targets": 37,
                "orderable": true,
                "visible": false,
             },      {
                "targets": 38,
                "orderable": true,
                "visible": false,
             },
            {
                "targets": 39,
                "orderable": true,
                "visible": false,
             },
             {
                "targets": 40,
                "orderable": true,
                "visible": false,
             },      {
                "targets": 41,
                "orderable": true,
                "visible": false,
             },
            {
                "targets": 42,
                "orderable": true,
                "visible": false,
             },
             {
                "targets": 43,
                "orderable": true,
                "visible": false,
             },      {
                "targets": 44,
                "orderable": true,
                "visible": false,
             },
             {
                 "targets": 45,
                 "orderable": true,
                 "visible": false,
              },
              {
                 "targets": 46,
                 "orderable": true,
                 "visible": false,
              },      {
                 "targets": 47,
                 "orderable": true,
                 "visible": false,
              },
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
        $('#example tbody').on( 'dblclick', 'tr', function () {
            
                table.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
                var id=table.row( this ).data()._id;
                console.log( id );
                $rootScope.someText =id;
                $rootScope.$apply(function() {
                    $location.path('/admin/signupcheck');
                    console.log($location.path());
                });
               
             //  window.location.href = '/signupcheck?id='+id;
            //   window.location.replace('/signupcheck');
              //  window.location.href = '/signupcheck';
        });
        });
      
    });
 /* $scope.getsignupList = function() {
    signupService.getsignupList().then(function(data) {
      
        $scope.signuparray=data;
        console.log($scope.signuparray);
    }, function(err) {
        console.log(err);
    }).finally(function() {
        
    });
}
*/
}]);
