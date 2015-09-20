"use strict";

/**
 * @ngdoc function
 * @name yoPortfolio.controller:DivansoftCtrl
 * @description
 * # DivansoftCtrl is controller for the page "DivanSoft"
 * Controller of the yoPortfolio
 */

angular.module("yoPortfolio")
    .controller("DivansoftCtrl", function ($rootScope, $scope, projects) {
    $rootScope.pageTitle = "divanSoft";
    
    $scope.projects = projects.getProjectsByAuthor("divansoft");
});
