"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarSystem = void 0;
var SolarSystem = /** @class */ (function () {
    function SolarSystem() {
    }
    SolarSystem.prototype.listPlanets1 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (var i = 0; i < planets.length; i++) {
            console.log('1', planets[i]);
        }
        ;
        console.log('done1');
    };
    SolarSystem.prototype.listPlanetsReverse1 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (var i = 7; i >= 0; i--) {
            console.log('R1', planets[i]);
        }
        ;
        console.log('doneR1');
    };
    SolarSystem.prototype.listPlanets2 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (var _i = 0, planets_1 = planets; _i < planets_1.length; _i++) {
            var planet = planets_1[_i];
            console.log('2', planet);
        }
    };
    SolarSystem.prototype.listPlanetsReverse2 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (var _i = 0, planets_2 = planets; _i < planets_2.length; _i++) {
            var planet = planets_2[_i];
            console.log('R2', planet);
        }
        console.log('done');
    };
    SolarSystem.prototype.listPlanets3 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        var i = -1;
        while (i <= planets.length - 2) {
            i++;
            console.log('3', planets[i]);
        }
        console.log('done');
    };
    SolarSystem.prototype.listPlanetsReverse3 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        var i = planets.length;
        while (i >= 1) {
            i--;
            console.log('3R', planets[i]);
        }
    };
    SolarSystem.prototype.listPlanets4 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        var i = 1;
        do {
            console.log(i);
            planets.length++;
        } while (i < planets.length);
        {
            console.log('listPlanets4');
        }
    };
    SolarSystem.prototype.listPlanetsReverse4 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        var i = 10;
        do {
            console.log(i);
            i--;
        } while (i > planets.length);
        {
            console.log(i);
        }
    };
    return SolarSystem;
}());
exports.SolarSystem = SolarSystem;
