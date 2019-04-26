app.service('homeService', ['$http','$timeout', function ($http) {
    
    const home_ENDPOINT   = '/api/frontcms' ;
  
    var home = {};

    home.gethomeList = function() {
        var url=home_ENDPOINT+"/getAll";
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    // home.saveContent = function(id,contentObj) {
    //     var url=home_ENDPOINT+"/update/"+id;
    //     console.log(url);
    //     return $http.post(url,{ content: contentObj }).then(function(response, status) {
    //         if (response.data == null) return null;
    //         return response.data;
    //     });
    // }

    // home.deleteContent = function(id) {
    //     var url=homeDelete_ENDPOINT+"/"+id;
    //     return $http.get(url).then(function(response, status) {
    //         if (response.data == null) return null;
    //         return response.data;
    //     });
    // }

    return home;
}]);