(function() {

    var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'ui.bootstrap.tpls']);

    app.config(['$logProvider', '$stateProvider', '$urlRouterProvider', function ($logProvider, $stateProvider, $urlRouterProvider) {

        $logProvider.debugEnabled(true);

        $urlRouterProvider.otherwise('/');

        //
        // tabindex.html contains a <ui-view> named masterView which load home.html
        // home.html contains a tab control + a <ui-view> called "tabView"
        // In the tab control there are 2 tabs with ui-sref="home.page1" where page1 is a child view of home since
        //      we load page1.html inside of home.html
        // Same as page2 for the 2nd tab.

        $stateProvider
            .state('home', {
                url: '/',
                //templateUrl: 'app/testdir/home.html',
                views : {
                    "masterView": {
                        controller: 'HomeCtrl',
                        controllerAs: 'homevm',
                        templateUrl: 'app/testdir/home.html'
                    }
                }
            })
                //
                // child states
                //
                .state('home.page1', {
                    url: '/page1',
                    //templateUrl: 'app/testdir/page1.html',

                    views : {
                        "tabView": {
                            controller: 'Page1Ctrl',
                            controllerAs: 'pg1vm',
                            templateUrl: 'app/testdir/page1.html'
                        }
                    }
                })
                .state('home.page2', {
                    url: '/page2',
                    //templateUrl: 'app/testdir/page2.html',

                    views : {
                        "tabView": {
                            controller: 'Page2Ctrl',
                            controllerAs: 'pg2vm',
                            templateUrl: 'app/testdir/page2.html'
                        }
                    }
                })

        .state('foopage1', {
            url: '/page1',
            // templateUrl: 'app/testdir/home.html',
            controller: 'Page1Ctrl',
            controllerAs: 'page1vm',
            views : {
                "masterView": {
                    templateUrl: 'app/testdir/page1.html'
                }
            }
        })
        .state('foopage2', {
            url: '/page2',
            // templateUrl: 'app/testdir/home.html',
            controller: 'Page2Ctrl',
            controllerAs: 'page2vm',
            views : {
                "masterView": {
                    templateUrl: 'app/testdir/page1.html'
                }
            }
        });
    }]);

    app.controller('Page1Ctrl', ['$state', '$scope', function($state, $scope) {
       console.debug("Page1 ctrl");
        $scope.message = "this is $scope.message";

        this.message = "this is this.message";
    }]);

    app.controller('Page2Ctrl', ['$state', function($state) {
        console.debug("Page2 ctrl");
    }]);

    app.controller('HomeCtrl', ['$state', function($state) {
        console.debug("HomeCtrl ctrl");
    }]);



    app.run(['$rootScope', '$log', function($rootScope, $log) {

        //$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        //
        //    $log.debug('successfully changed states');
        //
        //    $log.debug('event', event);
        //    $log.debug('toState', toState);
        //    $log.debug('toParams', toParams);
        //    $log.debug('fromState', fromState);
        //    $log.debug('fromParams', fromParams);
        //});

        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {

            $log.error('The requested state was not found: ', unfoundState);

        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {

            $log.error('An error occurred while changing states: ', error);

            $log.debug('event', event);
            $log.debug('toState', toState);
            $log.debug('toParams', toParams);
            $log.debug('fromState', fromState);
            $log.debug('fromParams', fromParams);
        });

    }]);

}());