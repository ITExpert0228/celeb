app.service('entertainmentService', ['$http','$timeout', function ($http) {
    const Entertainment_URL   = '/api/entertainment/getAll' ;
    const Entertainment_Save_URL   = '/api/entertainment/save' ;
    var entertainment = {};

    entertainment.getentertainmentList = function() {
        return $http.get(Entertainment_URL).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    entertainment.saveContent = function(id,contentObj) {
        var url=Entertainment_Save_URL+"/"+id+"/update";
        return $http.put(url,{ content: contentObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return entertainment;
}]);