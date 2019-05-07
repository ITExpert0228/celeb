app.service('contactusService', ['$http','$timeout', function ($http) {
    const ContactUs_ENDPOINT   = '/api/contactus/getAll' ;
    var contactus = {};

    contactus.getContactBookingList = function() {
        return $http.get(ContactUs_ENDPOINT).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return contactus;
}]);