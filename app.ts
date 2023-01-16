console.log("Loading character......")

const url = "https://hp-api.onrender.com/api/characters"

const p = fetch(url)
    .then(response => {
    return response.json();
    }).then(harryPotterObj => {
        
        for(let i=0; i < 25; i++){
            let cont = document.querySelector(".container") as HTMLElement;
            let name = document.createElement("h1") as HTMLElement;
            let species = document.createElement("p") as HTMLElement;
            let gender = document.createElement("p") as HTMLElement;
            let house = document.createElement("p") as HTMLElement;
            let ancestry = document.createElement("p") as HTMLElement;
            let actor = document.createElement("p") as HTMLElement;
            let img = document.createElement("img") as HTMLImageElement;
            let cardInfo = document.createElement("div") as HTMLElement;
            cont.append(cardInfo);
            cardInfo.className = "cardInfo";
            name.className = "Name";
            species.className = "Info";
            gender.className = "Info";
            house.className = "Info";
            ancestry.className = "Info";
            actor.className = "Info";
            img.className = "Info";
            
        
            cardInfo.append(name, species, gender, house, ancestry, actor, img);

            name.innerHTML = harryPotterObj[i].name;
            species.innerHTML = `Species: ${harryPotterObj[i].species}`;
            gender.innerHTML = `Gender: ${harryPotterObj[i].gender}`;
            house.innerHTML = `House: ${harryPotterObj[i].house}`;
            ancestry.innerHTML = `Ancestry: ${harryPotterObj[i].ancestry}`;
            actor.innerHTML = `Actor: ${harryPotterObj[i].actor}`;
            img.src = harryPotterObj[i].image;
        }
        
});



