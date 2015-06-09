/**
 * Usage:
 *      1. include  <script src="../lib/angular/angular.min.js"></script>
 *                  <script src="./spin.js/spin.js"></script>
 *                  <script src="./ufsLoadingSpinner.js"></script>
 *      2. add this div to your html to display the spinner
 *                  <div data-spinner="spinnerOptions"></div>
 *      3. In your controller, add the spinnerOptions like this, but change the setting
 *         of the spinner if you like.
                    $scope.spinnerOptions = {
                        radius: 30,
                        lines: 8,
                        length: 0,
                        width: 30,
                        speed: 1.7,
                        corners: 1.0,
                        trail: 100,
                        color: '#428bca'
                    };
        },
 */
(function () {
    'use strict';

    angular.module('ufs-common-spinner', []).directive('spinner', spinner);

    spinner.$inject = ['$window'];

    function spinner($window) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
            scope.spinner = null;
            scope.$watch(attrs.spinner, function (options) {
                if (scope.spinner) {
                    scope.spinner.stop();
                }
                scope.spinner = new $window.Spinner(options);
                scope.spinner.spin(element[0]);
            }, true);
        }
    }
})();