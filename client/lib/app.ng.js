angular.module('kataApp', [
  'angular-meteor',
  'ui.router',
  'ui.bootstrap.tpls',
  'angularUtils.directives.dirPagination'
]);

onReady = function() {
  angular.bootstrap(document, ['kataApp']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}