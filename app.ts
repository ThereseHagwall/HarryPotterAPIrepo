let cont = document.querySelector(".container") as HTMLElement;
const loading = document.createElement("img");
loading.src = "loading.gif";
cont.append(loading);

const url = "https://hp-api.onrender.com/api/characters"

const p = fetch(url)
    .then(response => {
    return response.json();
    }).then(harryPotterObj => {
        cont.removeChild(loading);
        for(let i=0; i < harryPotterObj.length; i++){
            let name = document.createElement("h2") as HTMLElement;
            let info = document.createElement("p") as HTMLElement;
            let img = document.createElement("img") as HTMLImageElement;
            let cardInfo = document.createElement("div") as HTMLElement;
            cont.append(cardInfo);
            cardInfo.className = "cardInfo";
            name.className = "Name";
            info.className = "Info hidden";
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
            
            cardInfo.append(name, info, img);
            
            name.innerHTML = harryPotterObj[i].name;
            info.innerHTML = `Species: ${harryPotterObj[i].species} <br /> Gender: ${harryPotterObj[i].gender} <br /> House: ${harryPotterObj[i].house} <br /> Ancestry: ${harryPotterObj[i].ancestry} <br /> Actor: ${harryPotterObj[i].actor}`;
            img.src = harryPotterObj[i].image;
            if(harryPotterObj[i].image === ""){
                cardInfo.removeChild(img);
            }
            
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
});