angular.module('ufs-common-loading-spinner',[]).directive("ufsLoadingSpinner", function() {
    var directive = {

        restrict: 'E',
        scope: {
            show: "=",
            msg: '='
        },

        controller: function($scope) {
            //$scope.displayLoading = true;
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

        template:  '<div ng-show="show" class="page-splash"> ' +
        '               <div data-spinner="spinnerOptions"></div>' +
        '               <br/>' +
        '               <div class="page-splash-message">{{msg}}</div>' +
        '           </div>'
    };
    return directive;
});