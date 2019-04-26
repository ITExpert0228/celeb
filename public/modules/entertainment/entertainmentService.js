app.service('entertainmentService', ['$http','$timeout', function ($http) {
    const Entertainment_URL   = '/api/entertainment/getAllbyid' ;
    const Entertainment_Save_URL   = '/api/entertainment/save' ;
    var entertainment = {};
   
    entertainment.getentertainmentbyid = function(id) {
        $url=Entertainment_URL+'?id='+id;
        
        return $http.get($url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    entertainment.saveContent = function(id,contentObj) {
        var url=Entertainment_Save_URL+"/"+id+"/update";
        return $http.put(Entertainment_Save_URL,{ content: contentObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    return entertainment;
}]);