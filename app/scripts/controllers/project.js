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

    // setting up img's lazy loading
    $rootScope.cHeight = 0;
    
    if ($rootScope.carousel$ !== undefined) {
        $rootScope.carousel$.off("slide.bs.carousel");
    }
    
    $rootScope.carousel$ = $("#carousel");    

    $rootScope.carousel$.on("slide.bs.carousel", function(e) {
    
        var $nextImage = $(e.relatedTarget).find("img"),        
            $activeItem = $(".active.item", this),
            src;
        
        // prevents the slide decrease in height
        if ($rootScope.cHeight == 0) {
            $rootScope.cHeight = $(this).height();
            $activeItem.next(".item").height($rootScope.cHeight);
        }
        
        // prevents the loaded image if it is already loaded
        src = $nextImage.data("lazy-load-src");
        
        if (typeof src !== "undefined" && src != "") {
            $nextImage.attr("src", src)
            $nextImage.data("lazy-load-src", "");
        }
    });
    
    $scope.project = projects.getProjectByPath($stateParams.id);
    
    $rootScope.pageTitle = $scope.project.title;
});
