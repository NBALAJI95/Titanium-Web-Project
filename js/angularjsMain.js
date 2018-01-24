var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.retailV = 0;
    $scope.ecomerceV = 0;
    $scope.motoV = 0;
    $scope.otherV = 0;
    $scope.errorMsg = "";

    function reset() {
        $scope.errorMsg ="";
    }

    $scope.calc = function(p) {
        const total = ($scope.retailV || 0) + ($scope.ecomerceV || 0) + ($scope.motoV || 0) + ($scope.otherV || 0);
        if(total > 100) {
            $scope.errorMsg = `Total percentage is ${total} which should not be greater than 100`;
        }
        else if(total < 100) {
            $scope.errorMsg = `Total percentage is ${total} which should be equal to 100`;
        }
        else {
            reset();
        }
    }

    $scope.toggle = function () {
        if(!$scope.retail) {
            $scope.retailV = 0;
        }

        if(!$scope.commerce) {
            $scope.ecomerceV = 0;
        }

        if(!$scope.moto) {
            $scope.motoV = 0;
        }

        if(!$scope.other) {
            $scope.otherV = 0;
        }

        $scope.calc();

        if(!$scope.retail && !$scope.commerce && !$scope.moto && !$scope.other) {
            reset();
        }
    }

});