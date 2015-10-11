"use strict";

/**
 * @ngdoc directive
 * @name yoPortfolio.directive:portfolio
 * @description
 * # portfolio
 */
angular.module("yoPortfolio")
    .directive("portfolio", function () {
        return {
            templateUrl: "views/portfolio.html",
            restrict: "C",
            replace: true,
            scope: {
                projects: "="
            }
        };
    });
