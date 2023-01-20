//get the container from html so the other tags can be put somewhere.
let cont = document.querySelector(".container") as HTMLElement;
//Creating a img tag so if the API has a long loading time, a loading gif is displayed.
const loading = document.createElement("img");
loading.className = "loading";
loading.src = "loading.gif";
cont.append(loading);

const url = "https://hp-api.onrender.com/api/characters"

//Fetch from API to create a webbsite where you can se all the harrypottr carachters, and som info about them.
const p = fetch(url)
    .then(response => {
    return response.json();
    }).then(harryPotterArr => {
        cont.removeChild(loading);
        //A forloop to create a new element for every array object from response. and give the element som new innerHTML.
        for(let i=0; i < harryPotterArr.length; i++){
            let name = document.createElement("h2") as HTMLElement;
            let info = document.createElement("p") as HTMLElement;
            let img = document.createElement("img") as HTMLImageElement;
            let cardInfo = document.createElement("div") as HTMLElement;
            cont.append(cardInfo);
            cardInfo.className = "cardInfo";
            name.className = "Name";
            info.className = "Info hidden";
            img.className = "Info hidden";

            //Gives card different classNames depending on which house it belongs to.
            if(harryPotterArr[i].house === "Gryffindor"){
                cardInfo.className = "cardInfo gryffindor";
            }else if(harryPotterArr[i].house === "Slytherin"){
                cardInfo.className = "cardInfo slytherin";
            }else if(harryPotterArr[i].house === "Hufflepuff"){
                cardInfo.className = "cardInfo hufflepuff";
            }else if(harryPotterArr[i].house === "Ravenclaw"){
                cardInfo.className = "cardInfo ravenclaw";
            }else{
                cardInfo.className = "cardInfo nohouse";
            }

            cardInfo.append(name, info, img);
            //Writes the text on the cards.
            name.innerHTML = harryPotterArr[i].name;
            info.innerHTML = `Species: ${harryPotterArr[i].species} <br /> Gender: ${harryPotterArr[i].gender} <br /> House: ${harryPotterArr[i].house} <br /> Ancestry: ${harryPotterArr[i].ancestry} <br /> Actor: ${harryPotterArr[i].actor}`;
            img.src = harryPotterArr[i].image;
            if(harryPotterArr[i].image === ""){
                cardInfo.removeChild(img);
            }
            //Add listner to the namn, so all de info can be shown
            name.addEventListener("click", function(e){
                e.preventDefault();
                if(info.className === "Info"){
                    info.className = "Info hidden";
                    img.className = "Info hidden";
                }else{
                    info.className = "Info";
                    img.className = "Info";
                }
            })
            
        }
        // -------------------SEARCH FUNCTION---------------------------------
        //Hämta sökknapp och inputfält.
        const search = document.querySelector("button") as HTMLElement;
        const option = document.querySelector("input") as HTMLInputElement;
        //Hämta alla taggar med classnamnet cardInfo
        const allCards = [...document.querySelectorAll(".cardInfo")];

        //Lägg lyssnare på knappen och anropa sökfunktionen
        search.addEventListener("click", function(e){
            e.preventDefault();
            sortByHouse(option.value.toLowerCase());

        })
        //Skapa sök funktionen som ska loopa igenom alla divtaggar och kolla på vad varje element har för klassnamn.
        //Om klassnamnet !== option.value så ska kortet få nytt classnamn = hidden.
        let sortByHouse = function(x:string):void{
            allCards.forEach(element => {
                if(!element.className.includes(x)){
                    element.className = "hidden";
                }
            });
            option.value = ""
        }
    });




