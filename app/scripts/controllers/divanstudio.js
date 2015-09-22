"use strict";

/**
 * @ngdoc function
 * @name yoPortfolio.controller:DivanStudioCtrl
 * @description
 * # DivanStudioCtrl is controller for the page "divanStudio"
 * Controller of the yoPortfolio
 */

angular.module("yoPortfolio")
    .controller("DivanStudioCtrl", function ($rootScope, $scope, projects) {
    $rootScope.pageTitle = "divanStudio";
    
    $scope.projects = projects.getProjectsByAuthor("divanStudio");
});
