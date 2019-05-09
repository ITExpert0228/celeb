app.service('modelService', ['$http','$timeout', function ($http) {
    
    const model_ENDPOINT   = '/api/celebdata' ;
    const contactBooking_ENDPOINT   = '/api/contactBooking' ; 
    var model = {};

    model.getmodelbyid = function($id) {
        var url=model_ENDPOINT+"/getmodel?id="+$id;
   //     console.log(url);
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    model.getmodelsbycate = function($cate,$id) {
        var url=model_ENDPOINT+"/getmodelsbycate?Category="+$cate+"&id="+$id;
  //      console.log(url);
        return $http.get(url).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }
    model.saveContact = function(contactBookingObj) {
        var url=contactBooking_ENDPOINT+"/create";
   //     console.log(url);
        return $http.post(url,{ content: contactBookingObj }).then(function(response, status) {
            if (response.data == null) return null;
            return response.data;
        });
    }

    // model.deleteContent = function(id) {
    //     var url=modelDelete_ENDPOINT+"/"+id;
    //     return $http.get(url).then(function(response, status) {
    //         if (response.data == null) return null;
    //         return response.data;
    //     });
    // }

    return model;
}]);