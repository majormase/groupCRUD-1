const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.indexOfEditFormToShow = null;

    this.editEvent = function(event){
        $http({
            method: "PUT",
            url: '/events/' + event._id,
            data: {
                title: this.updatedTitle,
                url: this.updatedUrl
            }
        }).then(function(){
            controller.getEvents();
            controller.indexOfEditFormToShow = null;
        });
    };

    this.deleteBookmark = function(bookmark){
        $http({
            method: "DELETE",
            url: '/events/' + event._id
        }).then(function(){
            controller.getEvents();
        });
    };

    this.getEvents = function(){
        $http({
            method:"GET",
            url: '/events'
        }).then(function(response){
            controller.events = response.data;
        }, function (error){
            console.log(error);
        });
    };

    this.createBookmark = function(){
        $http({
            method:"POST",
            url:'/events',
            data: {
                title: this.title,
                url: this.url
            }
        }).then(function(){
            controller.getEvents();
        });
    };

    this.getEvents();
}]);
