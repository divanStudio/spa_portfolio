"use strict";

/**
 * @ngdoc function
 * @name yoPortfolio.controller:DmytroCtrl
 * @description
 * # DmytroCtrl is controller for the page "Dmytro Ovchar"
 * Controller of the yoPortfolio
 */

angular.module("yoPortfolio")
    .controller("DmytroCtrl", function ($rootScope, $scope, projects) {
    $rootScope.pageTitle = "Dmytro Ovchar";
    
    $scope.projects = projects.getProjectsByAuthor("dmytro");
});
