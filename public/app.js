const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.indexOfEditFormToShow = null;

    this.editEvent = function(event){
        $http({
            method: "PUT",
            url: '/venues/' + venue._id,
            data: {
                title: this.updatedTitle,
                url: this.updatedUrl
            }
        }).then(function(){
            controller.getVenues();
            controller.indexOfEditFormToShow = null;
        });
    };

    this.deleteBookmark = function(bookmark){
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
                title: this.title,
                url: this.url
            }
        }).then(function(){
            controller.getVenues();
        });
    };

    this.getVenues();
}]);
