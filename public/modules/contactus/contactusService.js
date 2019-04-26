app.service('contactusService', ['$http','$timeout', function ($http) {
    const Contactus_ENDPOINT   = '/api/contactus/create' ;
    var contactus = {};

    contactus.saveContactus = function(contentObj) {
        return $http.post(Contactus_ENDPOINT,{ content: contentObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return contactus;
}]);