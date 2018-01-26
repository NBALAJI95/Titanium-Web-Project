var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.retailV = 0;
    $scope.ecomerceV = 0;
    $scope.motoV = 0;
    $scope.otherV = 0;
    $scope.errorMsg = "";

    function reset() {
        // console.log("reset error");
        $scope.errorMsg ="";
    }

    $scope.calc = function(p) {
        // console.log("calc");
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
        // console.log("toggle");
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
    
    $scope.resetForm = function () {
        console.log("Reset");

        $scope.fullName = undefined;
        // $scope.email = undefined;
        $scope.mobile = undefined;
        $scope.companyName = undefined;
        $scope.currentProvider = undefined;
        $scope.zipcode = undefined; // zip
        $scope.eMail = undefined;

        $scope.retailV = 0;
        $scope.ecomerceV = 0;
        $scope.motoV = 0;
        $scope.otherV = 0;

        $scope.a = undefined;
        $scope.b = undefined;
        $scope.c = undefined;
        $scope.d = undefined;
        $scope.e = undefined;
        $scope.avgTicket = undefined;
        $scope.tranXns = undefined;

        $scope.retail = false;
        $scope.commerce = false;
        $scope.moto = false;
        $scope.other = false;

        $scope.myForm.avgTicket.$setUntouched();
        $scope.myForm.tranXns.$setUntouched();
        $scope.myForm.myInput.$setUntouched();
        $scope.myForm.email.$setUntouched();
        reset();

        $scope.myForm.retail.$setUntouched();
        $scope.myForm.commerce.$setUntouched();
        $scope.myForm.moto.$setUntouched();
        $scope.myForm.other.$setUntouched();

        $scope.myForm.a.$setUntouched();
        $scope.myForm.b.$setUntouched();
        $scope.myForm.c.$setUntouched();
        $scope.myForm.d.$setUntouched();
        $scope.myForm.e.$setUntouched();
    }

});
