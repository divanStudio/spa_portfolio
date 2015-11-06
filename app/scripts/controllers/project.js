"use strict";

/**
 * @ngdoc function
 * @name yoPortfolio.controller:ProjectCtrl
 * @description
 * # ProjectCtrl is controller for the page "Project:id"
 * Controller of the yoPortfolio
 */

angular.module("yoPortfolio")
    .controller("ProjectCtrl", function ($rootScope, $scope, $stateParams, projects) {  
    
        $scope.project = projects.getProjectByPath($stateParams.id);
        
        $rootScope.pageTitle = $scope.project.title;
    });
