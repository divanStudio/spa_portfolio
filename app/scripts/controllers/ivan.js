"use strict";

/**
 * @ngdoc function
 * @name yoPortfolio.controller:IvanCtrl
 * @description
 * # IvanCtrl is controller for the page "Ivan Moskalenko"
 * Controller of the yoPortfolio
 */

angular.module("yoPortfolio")
    .controller("IvanCtrl", function ($rootScope, $scope, projects) {
    $rootScope.pageTitle = "Ivan Moskalenko";
    
    $scope.projects = projects.getProjectsByAuthor("ivan");
});
