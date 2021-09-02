"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarSystem = void 0;
var SolarSystem = /** @class */ (function () {
    function SolarSystem() {
    }
    SolarSystem.prototype.listPlanets1 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (var i = 0; i < planets.length; i++) {
            console.log(planets[i]);
        }
        ;
        console.log('done');
    };
    SolarSystem.prototype.listPlanetsReverse1 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (var i = 10; i > planets.length; i--) {
            console.log(planets[i]);
        }
        ;
        console.log('doneR1');
    };
    SolarSystem.prototype.listPlanets2 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (var _i = 0, planets_1 = planets; _i < planets_1.length; _i++) {
            var planet = planets_1[_i];
            console.log(planet);
        }
        ;
        console.log('done2');
    };
    SolarSystem.prototype.listPlanetsReverse2 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (var _i = 0, planets_2 = planets; _i < planets_2.length; _i++) {
            var planet = planets_2[_i];
            console.log(planet);
        }
        console.log('doneR2');
    };
    SolarSystem.prototype.listPlanets3 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        var i = 1;
        while (i < planets.length) {
            i++;
            console.log(i);
        }
        console.log('done3');
    };
    SolarSystem.prototype.listPlanetsReverse3 = function () {
        var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        var i = 10;
        while (i > planets.length) {
            i--;
            console.log(i);
        }
        console.log('doneR3');
    };
    return SolarSystem;
}());
exports.SolarSystem = SolarSystem;
