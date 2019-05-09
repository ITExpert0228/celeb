app.service('stylesService', ['$http','$timeout', function ($http) {
    
    const performers_ENDPOINT   = '/api/celebdata' ;
  
    var performers = {};

    performers.getperformersList = function($index,$cate,$sortstring) {
        var url=performers_ENDPOINT+"/getAllbyStyle?style="+$cate+"&index="+$index+"&sortstring="+$sortstring;
   //     console.log("performers:"+url);
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }  


    performers.getperformersListbysitemap = function($index,$cate,$sortstring) {
        var url=performers_ENDPOINT+"/getAllbysitemap";
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }  


    performers.getmodelsbyname = function($index,$name,$sortstring) {
          var url=performers_ENDPOINT+"/getmodelsbyname?name="+$name+"&index="+$index+"&sortstring="+$sortstring;
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }   
     performers.getmodelsbyalphabeta = function($index,$findname,$category,$name,$sortstring) {
          var url=performers_ENDPOINT+"/getmodelsbyalphabeta?findname="+$findname+"&index="+$index+"&Category="+$category+"&name="+$name+"&sortstring="+$sortstring;
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