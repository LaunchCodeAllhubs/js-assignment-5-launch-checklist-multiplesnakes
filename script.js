// Write your JavaScript code here!

window.addEventListener("load", function () {

    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");

    // The form

    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName");
        let fuelStatus = document.querySelector("input[name=fuelLevel]");
        let cargoStatus = document.querySelector("input[name=cargoMass]");
        event.preventDefault();
        formSubmission(document, list, pilotName.value, copilotName.value, fuelStatus.value, cargoStatus.value);

    });

    let listedPlanets;

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()

    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets 
        //and add that information to your destination.

        let pickedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    });

});