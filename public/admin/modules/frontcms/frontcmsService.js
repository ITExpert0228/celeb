app.service('frontcmsService', ['$http','$timeout', function ($http) {
    
    const frontcms_ENDPOINT   = '/api/frontcms' ;
  
    var frontcms = {};

    frontcms.getfrontcmsList = function() {
        var url=frontcms_ENDPOINT+"/getAll";
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    frontcms.saveContent = function(id,contentObj) {
        var url=frontcms_ENDPOINT+"/update/"+id;
        console.log(url);
        return $http.post(url,{ content: contentObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    frontcms.updateImages = function(id,contentObj) {
        var url=frontcms_ENDPOINT+"/updateimages/"+id;
        console.log(url);
        return $http.post(url,{ content: contentObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    // frontcms.deleteContent = function(id) {
    //     var url=frontcmsDelete_ENDPOINT+"/"+id;
    //     return $http.get(url).then(function(response, status) {
    //         if (response.data == null) return null;
    //         return response.data;
    //     });
    // }

    return frontcms;
}]);