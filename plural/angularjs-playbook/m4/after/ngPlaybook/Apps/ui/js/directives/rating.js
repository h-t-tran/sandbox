(function (module) {

    var otfRating = function () {
        return {
            scope: {
                value: "="
            },
            require: "otfRating",
            templateUrl: "/apps/ui/templates/rating.html",
            controller: "otfRatingController",
            link: function (scope, element, attributes, controller) {

                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "10");

                controller.initialize(min, max);
            }
        };
    };

    var otfRatingController = function ($scope) {

        this.initialize = function (min, max) {
            $scope.preview = -1;
            $scope.stars = new Array(max - min + 1);
        };

        $scope.click = function ($index) {
            $scope.value = $index + 1;
        };

        $scope.mouseover = function ($index) {
            $scope.preview = $index;
        };

        $scope.mouseout = function () {
            $scope.preview = -1;
        };

        $scope.styles = function ($index) {
            return {
                "glyphicon": true,
                "glyphicon-star": $index < $scope.value,
                "glyphicon-star-empty": $index >= $scope.value,
                "starpreview": $index <= $scope.preview
            };
        };

    };

    module.controller("otfRatingController", otfRatingController);
    module.directive("otfRating", otfRating);

}(angular.module("ui")));