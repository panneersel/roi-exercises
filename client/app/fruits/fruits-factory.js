/// <reference path="../../index.html" />
(function (angular) {
    var freshFruits = angular.module('freshFruits');

    freshFruits.factory('freshFruitsFactory', freshFruitsFactory);

    function freshFruitsFactory() {
        var fruits = ['apple', 'orange', 'guava', 'grapes'];
        return {
            fruits: fruits
        }
    }

})(angular);