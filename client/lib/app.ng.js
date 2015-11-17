angular.module('kataApp', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap',
  'angularUtils.directives.dirPagination',
    'ngMaterial',
    'ngFileUpload',
    'ngImgCrop'
]);

onReady = function() {
  angular.bootstrap(document, ['kataApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

angular.module('kataApp')
    .run(function($rootScope){
        $rootScope.thingState = [
            { state: 'Inserito'},
            { state: 'In Lavorazione' },
            { state: 'Pubblicato'}
        ];

        $rootScope.sections = {
            pax: false,
            geo: false,
            time: false,
            rooms: false
        };
    })
