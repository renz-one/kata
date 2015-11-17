'use strict'
angular.module('kataApp')
.controller('MainDetailCtrl', function ($rootScope,$scope, $meteor, $log, $state, $stateParams) {
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
            'images': null,
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
        if ($scope.form.$valid) {
            things.save($scope.thing).then(function(){
                $state.go('widgets-list-view')
            });
        }
    };

    $scope.goToState = function (state, id) {
        $state.go(state,{thingid:id})
    };


});