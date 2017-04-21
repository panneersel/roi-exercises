/**
 * Created by Student on 4/19/2017.
 */

(function(){
    var jpmApp = angular.module("fruitStall", ['ngRoute', 'freshJuices', 'freshFruits','jpmDemo']);

    jpmApp.config(configRoutes);

    function configRoutes($locationProvider, $routeProvider) {

        $routeProvider
            .when('/fruits',{
                controller: 'freshFruitsController',
                controllerAs: 'fc',
                templateUrl: 'app/fruits/fruits-view.html'
            })
            .when('/juices',{
                controller: 'freshJuicesController',
                controllerAs: 'jc',
                templateUrl: 'app/juices/juices-view.html'
            })
            .when('/demo',{
                controller: 'jpmDemoController',
                controllerAs: 'dc',
                templateUrl: 'app/demo/demo-view.html'
            })
            .otherwise({
                redirectTo: '/'
            });

    }

})();

