'use strict'
angular.module('kataApp')
.controller('MainDetailCtrl', function ($rootScope,$scope, $meteor, $log, $state, $stateParams,$filter) {
    var newThing = function(){
        return {
            'name' :null,
            'nameIta' :null,
            'publishState' : 'Inserito',
            'sections':{
                'pax' : false,
                'geo' : false,
                'time' : false,
                'rooms' : false
            },
            'set': null,
            'imagesList': null,
            'publishType': null,
            'publishDim': '6',
            'createdAt': new Date()
        };
    }

    $scope.$meteorSubscribe('things')
    var things = $scope.$meteorCollection(Things);

    if($state.current.name==='widget-details-insert'){
        $scope.thing = newThing();
    }else{
        $scope.thing = $scope.$meteorObject(Things, $stateParams.thingid);
    }




    $scope.save = function () {
        if ($scope.imagesList && $scope.imagesList.length > 0) {
            $scope.thing.imagesList = [];

            angular.forEach($scope.imagesList, function(image) {
                $scope.thing.imagesList.push({id: image._id});
            });
        }

        if ($scope.form.$valid) {
            things.save($scope.thing).then(function(){
                $state.go('widgets-list-view')
            });
        }
    };

    $scope.goToState = function (state, id) {
        $state.go(state,{thingid:id})
    };


    $scope.getMainImage = function(images) {
        if (images && images.length && images[0] && images[0].id) {
            var url = $filter('filter')($scope.images, {_id: images[0].id})[0].url();

            return {
                'background-image': 'url("' + url + '")'
            }
        }
    };

});