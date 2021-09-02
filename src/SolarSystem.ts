
export class SolarSystem {

    listPlanets1() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (let i=0; i < planets.length; i++) {
            console.log('1',planets[i]);
        };
        console.log('done1');
    }
    listPlanetsReverse1() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (let i=7; i >= 0; i--) {
            console.log('R1',planets[i]);
        };
        console.log('doneR1');
    }
    listPlanets2() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (const planet of planets) {
            console.log('2',planet);
        }
    }
    listPlanetsReverse2() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        for (let planet of planets) {
            console.log('R2',planet);
            }
        console.log('done');
    }
    listPlanets3() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        let i = -1;
        while(i <= planets.length -2) {
            i++
            console.log('3',planets[i])
        }
        console.log('done');
    }
    listPlanetsReverse3() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        let i = planets.length;
        while(i >= 1) {
            i--
            console.log('3R',planets[i])
        }
    }
    listPlanets4() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        let i = 1;
        do {
            console.log(i)
            planets.length++

        } while(i < planets.length) {
            console.log('listPlanets4'
                )
        }
    }
    listPlanetsReverse4() {
        const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
        let i = 10;
        do {
            console.log(i)
            i--
        } while(i > planets.length) {
            console.log(i)
        }
    }
}