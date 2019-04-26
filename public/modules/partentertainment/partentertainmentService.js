app.service('partentertainmentService', ['$http','$timeout', function ($http) {
    const partentertainment_ENDPOINT   = '/api/partentertainment/getAllbycate?showcate=' ;
    const partentertainmentlocation_ENDPOINT   = '/api/partentertainment/getAllbycateforlocation?showlocation=' ;
    var partentertainment = {};

    partentertainment.getpartentertainmentList = function(catename) {
        var $url=partentertainment_ENDPOINT+catename;
        return $http.get($url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
      partentertainment.getpartentertainmentListforlocation = function(locationname) {
        var $url=partentertainmentlocation_ENDPOINT+locationname;
        return $http.get($url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    } 

    return partentertainment;
}]);