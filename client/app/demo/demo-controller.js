(function (angular) {

    var jpmDemo = angular.module('jpmDemo');

    jpmDemo.controller('jpmDemoController', jpmDemoController);


    jpmDemoController.$inject = ["$scope", "$interval"];

    function jpmDemoController($scope, $interval) {
        that = this;

        $interval(function(){
            that.currentTime = new Date();
        }, 1000)

    }
})(angular);