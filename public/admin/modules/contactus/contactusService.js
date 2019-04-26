app.service('contactusService', ['$http','$timeout', function ($http) {
    const Contactus_ENDPOINT   = '/api/contactus/getAll' ;
    var contactus = {};

    contactus.getContactusList = function() {
        return $http.get(Contactus_ENDPOINT).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return contactus;
}]);