console.log("Loading character......")

const url = "https://hp-api.onrender.com/api/characters"

const p = fetch(url)
    .then(response => {
    // console.log(response.json());
    return response.json();
    }).then(harryPotterObj => {
    console.log(harryPotterObj[0].name);
});

