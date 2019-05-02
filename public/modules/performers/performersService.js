app.service('performersService', ['$http','$timeout', function ($http) {
    
    const performers_ENDPOINT   = '/api/celebdata' ;
  
    var performers = {};

    performers.getperformersList = function($cate) {
        var url=performers_ENDPOINT+"/getAllbyCate?Category="+$cate;
        console.log("performers:"+url);
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }  
    performers.getmodelsbyname = function($name) {
          var url=performers_ENDPOINT+"/getmodelsbyname?name="+$name;
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }   
     performers.getmodelsbyalphabeta = function($name) {
          var url=performers_ENDPOINT+"/getmodelsbyalphabeta?name="+$name;
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    // performers.saveContent = function(id,contentObj) {
    //     var url=performers_ENDPOINT+"/update/"+id;
    //     console.log(url);
    //     return $http.post(url,{ content: contentObj }).then(function(response, status) {
    //         if (response.data == null) return null;
    //         return response.data;
    //     });
    // }

    // performers.deleteContent = function(id) {
    //     var url=performersDelete_ENDPOINT+"/"+id;
    //     return $http.get(url).then(function(response, status) {
    //         if (response.data == null) return null;
    //         return response.data;
    //     });
    // }

    return performers;
}]);