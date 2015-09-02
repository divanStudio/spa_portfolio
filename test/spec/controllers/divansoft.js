"use strict";

describe("Controller: DivansoftCtrl", function () {

    // load the controller's module
    beforeEach(module("yoPortfolio"));

    var DivansoftCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        DivansoftCtrl = $controller("DivansoftCtrl", {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it("should attach a title of the page to the $rootScope", function () {
        expect(scope.pageTitle).toBe("DivanSoft");
    });
});
