/**
 * Created by renzo.rombola on 11/11/2015.
 */
angular.module('kataApp').controller('ButtonsCtrl', function ($scope) {

    $scope.radioModel = '';

    $scope.checkModel = {
        pax: false,
        geo: false,
        time: false,
        rooms: false

    };

    $scope.checkResults = [];

    $scope.$watchCollection('checkModel', function () {
        $scope.checkResults = [];
        angular.forEach($scope.checkModel, function (value, key) {
            if (value) {
                $scope.checkResults.push(key);
            }
        });
    });
});