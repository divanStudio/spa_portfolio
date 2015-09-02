"use strict";

describe("Controller: IvanCtrl", function () {

    // load the controller's module
    beforeEach(module("yoPortfolio"));

    var IvanCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        IvanCtrl = $controller("IvanCtrl", {
            $scope: scope
            // place here mocked dependencies
        });
    }));

    it("should attach a title of the page to the $rootScope", function () {
        expect(scope.pageTitle).toBe("Ivan Moskalenko");
    });
});
