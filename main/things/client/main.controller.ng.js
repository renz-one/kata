

'use strict'

angular.module('kataApp')
    .controller('MainCtrl', function ($scope, $meteor, $log, $state, $stateParams) {
        $scope.page = 1;
        $scope.perPage = 10;
        $scope.sort = {
            name_sort: 1
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

        $scope.save = function () {
            if ($scope.form.$valid) {
                $scope.things.save($scope.newThing);
                $log.info($scope.newThing);
                $scope.newThing = undefined;

            }
        };

	
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
                    name_sort: parseInt($scope.orderProperty)
                };
            }
        });
		
	$scope.goToState = function (state, id) {
		$state.go(state,{thingid:id})
    };


	 $scope.thing = $scope.$meteorObject(Things, $stateParams.thingid);

	
		$scope.thingState = [
            { state: 'Inserito'},
            { state: 'In Lavorazione' },
            { state: 'Pubblicato'}
	    ];
	
	$scope.thing.publishState = $scope.thingState[0].state;


        $scope.thing.checkSet = '';

        $scope.thing.checkSection = {
            pax: false,
            geo: false,
            time: false,
            rooms: false
        };

        $scope.thing.checkResults = [];

        $scope.$watchCollection('thing.checkSection', function () {
            $scope.thing.checkResults = [];
            angular.forEach($scope.thing.checkSection, function (value, key) {
                if (value) {
                    $scope.thing.checkResults.push(key);
                }
            });
        });

        $scope.thingType = [
            { label: 'Istogramma',
              value: 'chartwidget'},
            { label: 'Progress Bar',
                value: 'progresswidget'},
            { label: 'Date Selector',
                value: 'dateselectorwidget'},
            { label: 'Form',
                value: 'formwidget'},
            { label: 'Griglia',
                value: 'gridwidget'},
            { label: 'Banner',
                value: 'bannerwidget'},
            { label: 'Grafico a torta',
                value: 'piechartwidget'},
            { label: 'Istogramma mensile',
                value: 'monthchartwidget'}

        ];
        $scope.thing.publishType = $scope.thingType[0].label;

        $scope.thingDim = [
            { dim: '1'},
            { dim: '2'},
            { dim: '3'},
            { dim: '4'},
            { dim: '5'},
            { dim: '6'},
            { dim: '7'},
            { dim: '8'},
            { dim: '9'},
            { dim: '10'},
            { dim: '11'},
            { dim: '12'}

        ];
        $scope.thing.publishDim = $scope.thingType[0].dim;
		});