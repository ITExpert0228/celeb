app.service('contactBookingService', ['$http','$timeout', function ($http) {
    const ContactBooking_ENDPOINT   = '/api/contactBooking/getAll' ;
    var contactBooking = {};

    contactBooking.getContactBookingList = function() {
        return $http.get(ContactBooking_ENDPOINT).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return contactBooking;
}]);