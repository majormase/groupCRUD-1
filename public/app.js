const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.indexOfEditFormToShow = null;

    this.editVenue = function(venue){
        $http({
            method: "PUT",
            url: '/venues/' + venue._id,
            data: {
                name: this.updatedName,
                date: this.updatedDate,
                url: this.UpdatedUrl,
                image: this.updatedImage
            }
        }).then(function(){
            controller.getVenues();
            controller.indexOfEditFormToShow = null;
        });
    };

    this.deleteVenue = function(venue){
        $http({
            method: "DELETE",
            url: '/venues/' + venue._id
        }).then(function(){
            controller.getVenues();
        });
    };

    this.getVenues = function(){
        $http({
            method:"GET",
            url: '/venues'
        }).then(function(response){
            controller.venues = response.data;
        }, function (error){
            console.log(error);
        });
    };

    this.createVenue = function(){
        $http({
            method:"POST",
            url:'/venues',
            data: {
                name: this.name,
                date: this.date,
                url: this.url,
                image: this.image
            }
        }).then(function(){
            controller.getVenues();
        });
    };

    this.getVenues();
}]);
