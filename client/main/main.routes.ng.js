'use strict'
angular.module('kataApp')
	.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('widgets-list-view', {
					url: '/',
					templateUrl: 'client/main/widgets.list.ng.html',
					controller: 'MainCtrl'
				})

			.state('widget-overview', {
				url: '/widget-overview/:thingid',
				templateUrl: 'client/main/widget.overview.ng.html',
				controller: 'MainCtrl'
			})

			.state('widget-details-edit', {
					url: '/widget-details-edit/:thingid',
					templateUrl: 'client/main/widget.details.edit.ng.html',
					controller: 'MainCtrl'
				})
				.state('prova', {
					url: '/prova',
					templateUrl: 'client/main/prova.ng.html',
					controller: 'ButtonsCtrl'
				})
				.state('widget-details-insert', {
					url: '/widget-details-insert/:thingid',
					templateUrl: 'client/main/widget.details.insert.ng.html',
					controller: 'MainCtrl'
				});
	});