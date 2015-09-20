"use strict";

describe("Controller: ProjectCtrl", function () {

    // load the controller's module
    beforeEach(module("yoPortfolio"));

    var ProjectCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $stateParams) {
        scope = $rootScope.$new();
        $stateParams.id = "helicrane";
        
        ProjectCtrl = $controller("ProjectCtrl", {
            $scope: scope,
            $stateParams: $stateParams
        });
    }));

    it("should attach a title of the page to the $rootScope", function () {
        expect(scope.pageTitle).toBe("HeliCrane");
    });
});
