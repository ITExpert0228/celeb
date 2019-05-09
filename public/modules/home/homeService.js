app.service('homeService', ['$http','$timeout', function ($http) {
    
    const home_ENDPOINT   = '/api/celebdata' ;
    const contactus_ENDPOINT   = '/api/contactus' ; 
    var home = {};

    home.gethomeList = function() {
        var url=home_ENDPOINT+"/getAllforhome";
        console.log(url);
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
  
    home.saveContactus = function(contactObj) {
        var url=contactus_ENDPOINT+"/create";
            return $http.post(url,{ content: contactObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
 
    return home;
}]);