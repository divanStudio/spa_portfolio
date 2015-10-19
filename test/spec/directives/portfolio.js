"use strict";

describe("Directive: portfolio", function () {

    // load the directive's module
    beforeEach(module("yoPortfolio"));
    beforeEach(module("templates")); 

    var element,
        scope,
        template;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();

        // Fake projects array
        scope.projects = [
            {
                id: 0,
                title: "HeliCrane",
                type: "Flash game",
                path: "helicrane",
                view: "helicrane.html",
                iconClass: "icon-game",
                authors: ["divanStudio", "dmytro", "ivan"]
            },
            {
                id: 1,
                title: "HeliCrane 2: Bomber",
                type: "Flash game",
                path: "helibomber",
                view: "helibomber.html",
                iconClass: "icon-game",
                authors: ["divanStudio", "dmytro", "ivan"]
            }
        ];

        // This markup which uses the directive
        template='<section class="portfolio" data-projects="projects"></section>';        
    }));

    it("should initialize portfolio section with 2 projects", inject(function ($rootScope, $compile) {
        element = angular.element(template);
        element = $compile(element)(scope);
        $rootScope.$digest(); // Fire a digest so that expressions are evaluated

        expect(element.find('.portfolio-item-container').length).toBe(2);
    }));
});
