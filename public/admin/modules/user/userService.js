app.service('userService', ['$http','$timeout', function ($http) {
    const Entertainment_URL   = '/api/users/getAll' ;
    const Entertainment_Save_URL   = '/api/users/save' ;
    var user = {};

    user.getuserList = function() {
        return $http.get(Entertainment_URL).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    user.saveContent = function(id,contentObj) {
        var url=Entertainment_Save_URL+"/"+id+"/update";
        return $http.put(Entertainment_Save_URL,{ content: contentObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return user;
}]);