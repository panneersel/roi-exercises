(function (angular) {

    var jpmCourse = angular.module('freshJuices');

    jpmCourse.controller('freshJuicesController', freshJuicesController);


    freshJuicesController.$inject = ["$scope", "$http","freshJuicesFactory"];

    function freshJuicesController($scope, $http, freshJuicesFactory) {
        /*$scope.newJuice.name = '';
        $scope.newJuice.price = '';
        $scope.newJuice.mixOf = '';
        */

        freshJuicesFactory.initialize();

        that = this;

        that.juices = freshJuicesFactory.juices;
        that.showFilter = false;
        that.add = add;
        that.remove = remove;
        that.save = save;
        that.load = load;

        that.newJuice = {
            name: '',
            price: 0,
            mixOf: ''
        }

        function add() {
            var juiceName = angular.copy(that.newJuice);
            //$scope.juices.push(juiceName);
            addData(juiceName)
                .then(getData)
                .then(clearItems)
                .catch(displayError);
        }

        function addData(item) {
            return $http.post('/juices',item)
        }

        function getData() {
            return freshJuicesFactory.getData();
        }

        function displayError(error){
            that.errorMessage = error;
        }

        function clearItems() {
            that.newJuice.name = '';
            that.newJuice.price = '';
            that.newJuice.mixOf = '';

        }

        function remove(item) {
            var indexOfJuice = that.juices.indexOf(item);
            that.juices.splice(indexOfJuice,1);
        }

        function save () {
            freshJuicesFactory.save();
        }

        function load() {
            freshJuicesFactory.load();
        }

    }
})(angular);