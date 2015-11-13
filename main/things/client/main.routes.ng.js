'use strict'
angular.module('kataApp')
	.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('widgets-list-view', {
					url: '/',
					templateUrl: 'main/things/client/widget.list.ng.html',
					controller: 'MainListCtrl'
				})


            .state('widget-overview', {
				url: '/widget-overview/:thingid',
				templateUrl: 'main/things/client/widget.overview.ng.html',
				controller: 'MainDetailCtrl'
			})

			.state('widget-details-edit', {
					url: '/widget-details-edit/:thingid',
					templateUrl: 'main/things/client/widget.details.edit.ng.html',
					controller: 'MainDetailCtrl'
				})

				.state('widget-details-insert', {
					url: '/widget-details-insert/:thingid',
					templateUrl: 'main/things/client/widget.details.insert.ng.html',
					controller: 'MainDetailCtrl'
				});

	});