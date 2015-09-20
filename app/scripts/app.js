"use strict";


// prevent default behaviour of links in navbar
$("body").on("click", ".navbar a[href^=#]", function() {
    return false;
});


/**
 * @ngdoc overview
 * @name yoPortfolio
 * @description
 * # yoPortfolio
 *
 * Main module of the application.
 */
angular
    .module("yoPortfolio", [
        "ui.router"
    ])
    .config(function ($stateProvider, $urlRouterProvider) {    
        $stateProvider
            .state("divansoft", {
                url: "/",
                controller: "DivansoftCtrl",
                templateUrl: "views/divansoft.html"
            })
            .state("dmytro", {
                url: "/dmytro",
                controller: "DmytroCtrl",
                templateUrl: "views/dmytro.html"
            })
            .state("ivan", {
                url: "/ivan",
                controller: "IvanCtrl",
                templateUrl: "views/ivan.html"
            })
            .state("project", {
                url: "/p/:id",
                controller: "ProjectCtrl",
                templateUrl: "views/project.html"
            });
        
        $urlRouterProvider.otherwise("/");
    })
    .run(function ($rootScope, $state, projects) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) { 
            if (toState.name === "project") {
                
                if (projects.getProjectByPath(toParams.id) === null) {
                    // request to nonexistent project
                    event.preventDefault();
                    
                    if (fromState.abstract) {
                        $state.go("divansoft");
                    } else {
                        $state.go(fromState.name, fromParams);
                    }                    
                }
                
            }
        });    
    
        $rootScope.$on('$stateChangeSuccess', function() { 
            $(window).scrollTop(0);
        }); 
    });
