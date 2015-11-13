'use strict'
angular.module('kataApp')
	.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('prova', {
					url: '/prova',
					templateUrl: 'main/prova/client/prova.ng.html',
					controller: 'ButtonsCtrl'
				})

	});