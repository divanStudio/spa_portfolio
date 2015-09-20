"use strict";

describe("Service: projects", function () {

    // load the service's module
    beforeEach(module("yoPortfolio"));

    // instantiate service
    var projects;
    
    beforeEach(inject(function (_projects_) {
        projects = _projects_;
    }));
    

    it("should return 5 project objects for author 'divansoft'", function () {
        expect(projects.getProjectsByAuthor("divansoft").length).toBe(5);
    });
    
    it("should return 4 project objects for author 'dmytro'", function () {
        expect(projects.getProjectsByAuthor("dmytro").length).toBe(4);
    });
    
    it("should return 4 project objects for author 'ivan'", function () {
        expect(projects.getProjectsByAuthor("ivan").length).toBe(4);
    });
    
    it("should return one object for path 'helicrane'", function () {
        expect(projects.getProjectByPath("helicrane")).not.toBe(undefined);
    });

});
