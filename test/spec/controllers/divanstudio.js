"use strict";

describe("Controller: DivanStudioCtrl", function () {

    // load the controller's module
    beforeEach(module("yoPortfolio"));

    var DivanStudioCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        DivanStudioCtrl = $controller("DivanStudioCtrl", {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it("should attach a title of the page to the $rootScope", function () {
        expect(scope.pageTitle).toBe("divanStudio");
    });
});
