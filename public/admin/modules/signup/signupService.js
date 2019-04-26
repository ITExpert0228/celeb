app.service('signupService', ['$http','$timeout', function ($http) {
    const Signup_ENDPOINT   = '/api/signup/getAll' ;
    var signup = {};

    signup.getsignupList = function() {
        return $http.get(Signup_ENDPOINT).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return signup;
}]);