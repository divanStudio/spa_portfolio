"use strict";

/**
 * @ngdoc directive
 * @name yoPortfolio.directive:lazyCarousel
 * @description
 * # lazyCarousel performs lazy loading for items in Bootstrap carousel
 */
angular.module("yoPortfolio")
    .directive("lazyCarousel", function ($window) {
        return {
            restrict: "AC",
            replace: false,
            scope: {},
            link: function(scope, element) {
        
                var imgItems = angular.element(".item", element),
                    window = angular.element($window),
                    imgItemHeight = 0;
             
                element.on("slide.bs.carousel", function(e) {
                
                    var nextImage = angular.element(e.relatedTarget).find("img"),
                        src = nextImage.data("lazy-load-src");      
                    
                    updateImgHeight();
                    
                    if (typeof src !== "undefined" && src !== "") {
                        nextImage.attr("src", src);
                        nextImage.data("lazy-load-src", "");
                    }
                });
    
                window.on("resize.portfolio", function() {
                    imgItemHeight = 0;
                    imgItems.height("auto");            
                    updateImgHeight();
                });
    
                // prevents the slide changes in height
                function updateImgHeight() {
                    if (imgItemHeight === 0) {
                        imgItemHeight = angular.element(".item.active", element).height();         
                        imgItems.height(imgItemHeight);            
                    }
                }
   
                element.on('$destroy', function() {
                    window.off("resize.portfolio");  
                });
            }
        };
    });
