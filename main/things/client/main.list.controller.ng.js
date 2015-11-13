'use strict'

angular.module('kataApp')
    .controller('MainListCtrl', function ($scope, $meteor, $log, $state, $stateParams) {
        $scope.page = 1;
        $scope.perPage = 10;
        $scope.sort = {
            name: 1
        };
        $scope.orderProperty = '1';

        $scope.things = $scope.$meteorCollection(function () {
            return Things.find({}, {
                sort: $scope.getReactively('sort')
            });
        });
        $meteor.autorun($scope, function () {
            $scope.$meteorSubscribe('things', {
                limit: parseInt($scope.getReactively('perPage')),
                skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
                sort: $scope.getReactively('sort')
            }, $scope.getReactively('search')).then(function () {
                $scope.thingsCount = $scope.$meteorObject(Counts, 'numberOfThings', false);
            });
        });

        $meteor.session('thingsCounter').bind($scope, 'page');

        $scope.remove = function (thing) {
            if (!confirm("Sei sicuro?") ) return
            $scope.things.remove(thing);
        };


        $scope.pageChanged = function (newPage) {
            $scope.page = newPage;
        };

        $scope.$watch('orderProperty', function () {
            if ($scope.orderProperty) {
                $scope.sort = {
                    name: parseInt($scope.orderProperty)
                };
            }
        });
		
        $scope.goToState = function (state, id) {
            $state.go(state,{thingid:id})
        };


});