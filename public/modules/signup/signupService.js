app.service('signupService', ['$http','$timeout', function ($http) {
    const signup_ENDPOINT   = '/api/signup/create' ;
    const uploadUrl="/api/signup/upload";
    var signup = {};

    signup.savesignup = function(contentObj) {
        return $http.post(signup_ENDPOINT,{ signup: contentObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    signup.fileUpload=function(formData){

        return $http.post(uploadUrl,{ data:formData }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    return signup;
}]);