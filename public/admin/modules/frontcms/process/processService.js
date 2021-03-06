app.service('processService', ['$http','$timeout', function ($http) {
    
    const frontcms_process_ENDPOINT   = '/api/frontcms/process' ;
  
    var frontcms = {};

    frontcms.getProcessList = function() {
        var url=frontcms_process_ENDPOINT+"/getAll?index=process";
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    frontcms.saveContent = function(id,contentObj) {
        var url=frontcms_process_ENDPOINT+"/update/process/"+id;
        return $http.post(url,contentObj).then(function(response, status) {
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