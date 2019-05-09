app.service('cookieService', ['$http','$timeout', function ($http) {
    
    const frontcms_cookie_ENDPOINT   = '/api/frontcms/process' ;
  
    var frontcms = {};

    frontcms.getProcessList = function() {
        var url=frontcms_cookie_ENDPOINT+"/getAll?index=cookie";
     //   console.log(url);
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    frontcms.saveContent = function(id,contentObj) {
        var url=frontcms_cookie_ENDPOINT+"/update/cookie/"+id;
    //    console.log(url);
        return $http.post(url,contentObj).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }


    return frontcms;
}]);