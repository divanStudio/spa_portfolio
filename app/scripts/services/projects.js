"use strict";

/**
 * @ngdoc service
 * @name yoPortfolio.projects
 * @description
 * # projects
 * Factory in the yoPortfolio.
 */
angular.module("yoPortfolio")
    .factory("projects", function () {

    var projects = [
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
        },
        {
            id: 2,
            title: "Ballistica",
            type: "Flash game",
            path: "ballistica",
            view: "ballistica.html",
            iconClass: "icon-game",
            authors: ["divanStudio", "dmytro", "ivan"]
        },
        {
            id: 3,
            title: "VortexViewer",
            type: "Web app",
            path: "vortexviewer",
            view: "vortexviewer.html",
            iconClass: "icon-web",
            authors: ["divanStudio", "dmytro"]
        },
        {
            id: 4,
            title: "HeliRunner",
            type: "Mobile app",
            path: "helirunner",
            view: "helirunner.html",
            iconClass: "icon-mobile",
            authors: ["divanStudio", "ivan"]
        },
        {
            id: 5,
            title: "GAZ-13",
            type: "3D model",
            path: "gaz13",
            view: "gaz13.html",
            iconClass: "icon-design",
            authors: ["divanStudio", "ivan"]
        }

    ];

    return {
        getProjectByPath: function (path) {
            var project = null;

            for (var i = 0, l = projects.length; i < l; ++i) {
                if (projects[i].path === path) {
                    project = projects[i];
                }
            }

            return project;
        },
        
        getProjectsByAuthor: function (authorName) {
            var projectsByAuthor = [];
            
            for (var i = 0, l = projects.length; i < l; ++i) {
                if (projects[i].authors.indexOf(authorName) !== -1) {
                    projectsByAuthor.push(projects[i]);
                }
            }
            
            return projectsByAuthor;
        }
    };
});
