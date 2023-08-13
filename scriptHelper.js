// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    document.getElementById("missionTarget").innerHTML = `
   <h2>Mission Destination</h2>
   <ul>
       <li>Name: ${name}</li>
       <li>Diameter: ${diameter}</li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance}</li>
       <li>Number of moons: ${moons}</li>
   </ul>
   <img src='${imageUrl}' alt="cool planet">
   `;
};

//validateInput() should take in a string as a parameter and return "Empty", "Not a Number", or "Is a Number" as appropriate. 

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    };
}

//formSubmission() will take in a document parameter and strings representing the pilot, co-pilot, fuel level, and cargo mass.

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilotStatus) === "Empty" ||
        validateInput(copilotStatus) === "Empty" ||
        validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty") {
        window.alert("All fields are required!");

    } else if (validateInput(pilotStatus) === "Is a Number" ||
        validateInput(copilotStatus) === "Is a Number" ||
        validateInput(fuelLevel) === "Not a Number" ||
        validateInput(cargoLevel) === "Not a Number") {
        window.alert("Please enter valid information");

    }

    else {

        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        //If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems 
        //to visible with an updated fuel status stating that there is not enough fuel for the journey. 
        //The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" 
        //and the color should change to red.

        if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E";
            list.style.visibility = "visible";

        }

        //If the user submits a cargo mass that is too large (more than 10,000 kilograms), 
        //change the list to visible with an updated cargo status stating that there is too much mass 
        //for the shuttle to take off. The text of launchStatus should also change to 
        //"Shuttle not ready for launch" and the color should change to a particular shade of red...


        else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E";
            list.style.visibility = "visible";

        } else if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E";
            list.style.visibility = "visible";

        }

        //If the shuttle is ready to launch, change the text of launchStatus to a particular shade of green...
        //"Shuttle is ready for launch".

        else {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.style.color = "#419F6A";
            list.style.visibility = "visible";
        }

    }
}

//myFetch() has some of the code necessary for fetching planetary JSON, however, it is not complete. 
//You need to add the URL and return response.json().

async function myFetch() {

    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

//pickPlanet() takes in one argument: a list of planets. 
//Using Math.random(), return one planet from the list with a randomly-selected index.

function pickPlanet(planets) {


    let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
