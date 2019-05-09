app.service('customlistService', ['$http','$timeout', function ($http) {
        
    const customlist_ENDPOINT   = '/api/celebdata' ;
    var customlist = {};

    customlist.getcustomList = function(selectChecked,lowFee,highFee) {
        var url=customlist_ENDPOINT+"/getAllforcustomlist?style="+selectChecked+"&lowFee="+lowFee+"&highFee="+highFee;
        console.log(url);
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    return customlist;
}]);