app.service('signupcheckService', ['$http','$timeout', function ($http) {
    const Signup_ENDPOINT   = '/api/signup'
    const SignupCheck_ENDPOINT   = '/api/signup/check' ;
    const SignupDelete_ENDPOINT   = '/api/signup/delete' ;
    var signup = {};

    signup.getsignupcheckList = function(id) {
        var url=Signup_ENDPOINT+"/"+id;
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    signup.saveContent = function(id) {
        var url=SignupCheck_ENDPOINT+"/"+id;
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    signup.deleteContent = function(id) {
        var url=SignupDelete_ENDPOINT+"/"+id;
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return signup;
}]);