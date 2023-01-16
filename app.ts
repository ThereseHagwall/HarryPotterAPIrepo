console.log("Loading character......")

const url = "https://hp-api.onrender.com/api/characters"

const p = fetch(url)
    .then(response => {
    // console.log(response.json());
    return response.json();
    }).then(starwarsArray => {
    logChar(starwarsArray)
});

function logChar(char: any){
    console.log("Character loaded", char[0]);
}