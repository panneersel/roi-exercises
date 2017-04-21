/**
 * Created by Student on 4/19/2017.
 */

(function () {
    var freshFruits = angular.module("freshFruits");

    freshFruits.controller("freshFruitsController", freshFruitsController);

    freshFruitsController.$inject = ['$scope', 'freshFruitsFactory'];

    function freshFruitsController($scope, freshFruitsFactory) {
        $scope.name = "gu";
        $scope.fruits = freshFruitsFactory.fruits;
        $scope.showFilter = false;
        $scope.add = add;
        $scope.remove = remove;

        function add(){
            var newFruit = $scope.fruitName;
            $scope.fruits.push(newFruit);
            $scope.fruitName = '';
        }

        function remove(fruit) {
            var fruitIndex = $scope.fruits.indexOf(fruit);
            $scope.fruits.splice(fruitIndex,1);
        }
    }

})();