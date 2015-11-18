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
        $rootScope.thingTypes = [
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

        $rootScope.thingDims = [
            { value: '1'},
            { value: '2'},
            { value: '3'},
            { value: '4'},
            { value: '5'},
            { value: '6'},
            { value: '7'},
            { value: '8'},
            { value: '9'},
            { value: '10'},
            { value: '11'},
            { value: '12'}
        ];
    })
