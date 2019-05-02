app.service('homeService', ['$http','$timeout', function ($http) {
    
    const home_ENDPOINT   = '/api/celebdata' ;
  
    var home = {};

    home.gethomeList = function() {
        var url=home_ENDPOINT+"/getAll";
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
 
    return home;
}]);