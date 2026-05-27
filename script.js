
console.log("Running Sal's Strawberries")

function writeForm() {
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
}

foodOrder = {
    game1: {
        users: {
            Josh: "help",
            Coby: "sausages",
            Pasha: "steak",
            Lukas:"chicken",
        }
    }
}
firebase.database().ref('/').set(foodOrder)