/**
 * Created by Student on 4/19/2017.
 */
(function (angular) {
    var freshJuices = angular.module('freshJuices');
    freshJuices.factory('freshJuicesFactory', freshJuicesFactory);

    function freshJuicesFactory($http) {
        var juices = [];

        return {
            juices : juices,
            save: save,
            load: load,
            getData: getData,
            initialize: initialize
        }


        function getData() {
            return $http.get('/juices').then(function(response){
                juices.length = 0;
                response.data.forEach(function(item){
                    juices.push(item);
                });
            })
        }

        function initialize() {
            getData();
        }

        function save (){
            var jsonJuices = JSON.stringify(juices);
            localStorage.setItem("juiceList",jsonJuices);
        }

        function load() {
            var juicesStored=localStorage.getItem("juiceList");
            var jsonJuices = JSON.parse(juicesStored);
            juices.length = 0;
            jsonJuices.forEach(function (item){
                juices.push(angular.copy(item));
            });
        }
    }


})(angular);
