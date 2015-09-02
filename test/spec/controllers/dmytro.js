"use strict";

describe("Controller: DmytroCtrl", function () {

    // load the controller's module
    beforeEach(module("yoPortfolio"));

    var DmytroCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        DmytroCtrl = $controller("DmytroCtrl", {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it("should attach a title of the page to the $rootScope", function () {
        expect(scope.pageTitle).toBe("Dmytro Ovchar");
    });
});
