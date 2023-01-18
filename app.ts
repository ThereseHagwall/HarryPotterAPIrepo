let cont = document.querySelector(".container") as HTMLElement;
const loading = document.createElement("img");
loading.className = "loading";
loading.src = "loading.gif";
cont.append(loading);

const url = "https://hp-api.onrender.com/api/characters"

const p = fetch(url)
    .then(response => {
    return response.json();
    }).then(harryPotterArr => {
        cont.removeChild(loading);
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

            if(harryPotterArr[i].house === "Gryffindor"){
                cardInfo.className = "cardInfo gryffindor";
            }else if(harryPotterArr[i].house === "Slytherin"){
                cardInfo.className = "cardInfo slytherin";
            }else if(harryPotterArr[i].house === "Hufflepuff"){
                cardInfo.className = "cardInfo hufflepuff";
            }else if(harryPotterArr[i].house === "Ravenclaw"){
                cardInfo.className = "cardInfo ravenclaw";
            }

            cardInfo.append(name, info, img);
            
            name.innerHTML = harryPotterArr[i].name;
            info.innerHTML = `Species: ${harryPotterArr[i].species} <br /> Gender: ${harryPotterArr[i].gender} <br /> House: ${harryPotterArr[i].house} <br /> Ancestry: ${harryPotterArr[i].ancestry} <br /> Actor: ${harryPotterArr[i].actor}`;
            img.src = harryPotterArr[i].image;
            if(harryPotterArr[i].image === ""){
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

// let search = document.querySelector("button") as HTMLElement;
// let option = document.querySelector("input") as HTMLInputElement;


// search.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("click");
//     if(option.value === "Gryffindor"){
//         console.log("Nu visas Gryffindor")
//         option.value = "";
//     }else if(option.value === "Slytherin"){
//         console.log("Slytherin visas nu");
//         option.value = "";
//     }else if(option.value === "Hufflepuff"){
//         console.log("Hufflepuff visas nu");
//         option.value = "";
//     }else if(option.value === "Ravenclaw"){
//         console.log("Ravenclaw visas nu");
//         option.value = "";
//     }
// })
