console.log("Loading characters......")

const url = "https://hp-api.onrender.com/api/characters"

const p = fetch(url)
    .then(response => {
    return response.json();
    }).then(harryPotterObj => {
        
        for(let i=0; i < harryPotterObj.length; i++){
            let cont = document.querySelector(".container") as HTMLElement;
            let name = document.createElement("h2") as HTMLElement;
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
            species.className = "Info hidden";
            gender.className = "Info hidden";
            house.className = "Info hidden";
            ancestry.className = "Info hidden";
            actor.className = "Info hidden";
            img.className = "Info hidden";

            if(harryPotterObj[i].house === "Gryffindor"){
                cardInfo.className = "cardInfo gryffindor";
            }else if(harryPotterObj[i].house === "Slytherin"){
                cardInfo.className = "cardInfo slytherin";
            }else if(harryPotterObj[i].house === "Hufflepuff"){
                cardInfo.className = "cardInfo hufflepuff";
            }else if(harryPotterObj[i].house === "Ravenclaw"){
                cardInfo.className = "cardInfo ravenclaw";
            }

            // if(harryPotterObj[i].house === ""){
            //     cont.removeChild(cardInfo);
            // }
            
            cardInfo.append(name, species, gender, house, ancestry, actor, img);
            
            name.innerHTML = harryPotterObj[i].name;
            species.innerHTML = `Species: ${harryPotterObj[i].species}`;
            gender.innerHTML = `Gender: ${harryPotterObj[i].gender}`;
            house.innerHTML = `House: ${harryPotterObj[i].house}`;
            ancestry.innerHTML = `Ancestry: ${harryPotterObj[i].ancestry}`;
            actor.innerHTML = `Actor: ${harryPotterObj[i].actor}`;
            img.src = harryPotterObj[i].image;

            if(harryPotterObj[i].image === ""){
                cardInfo.removeChild(img);
            }
            
            name.addEventListener("click", function(e){
                e.preventDefault();
                if(species.className === "Info"){
                    species.className = "Info hidden";
                    gender.className = "Info hidden";
                    house.className = "Info hidden";
                    ancestry.className = "Info hidden";
                    actor.className = "Info hidden";
                    img.className = "Info hidden";
                }else{
                    species.className = "Info";
                    gender.className = "Info";
                    house.className = "Info";
                    ancestry.className = "Info";
                    actor.className = "Info";
                    img.className = "Info";
                }
            })
        }
});