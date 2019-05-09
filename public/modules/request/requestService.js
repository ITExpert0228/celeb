app.service('requestService', ['$http','$timeout', function ($http) {
    
    const request_ENDPOINT   = '/api/request' ; 
    var request = {};
  
    request.saveContact = function(contactObj) {
        var url=request_ENDPOINT+"/create";
        //console.log(url);
        return $http.post(url,{ content: contactObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return request;
}]);