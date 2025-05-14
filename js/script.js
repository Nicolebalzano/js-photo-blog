
// **Milestone 4**
// Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, 
// centrata, disponiamo un’immagine qualunque ed un button di chiusura.

// **Milestone 5**
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il `display: none` .
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

// **Milestone 6**
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare 
// in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
// Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:

// **Bonus**
// Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, 
// il tutto in manierà fluida. 
// Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

//////////////////////////////PRELEVO ELEMENTI PRINCIPALI //////////////////////////////

const cardContainer = document.querySelector(".card-container");
const overlayElem = document.querySelector("div.overlay");



axios
    .get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
        let cards = "";
        const pictures = resp.data;
        pictures.forEach(singlePic => {
            const { url } = singlePic;
            cards += `<div class="col">
                   <div class="card">
                    <img src="./img/pin.svg" alt="" class="pin">
                    <img src="${url}"
                        alt="immagini estate 2024" class="card-img">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </div> </div>`
        });
        cardContainer.innerHTML = cards;

        
          const colElem = document.querySelectorAll(".col");
          

        colElem.forEach(curCol => {
            curCol.addEventListener("mouseover", function(){
  curCol.style.cursor = "pointer";
  curCol.style.transform = "rotate(8deg) scale(1.1)";
  curCol.style.boxShadow = "10px 10px 15px rgba(0, 0, 0, 0.3)";
  const pin = curCol.querySelector(".pin");
  if(pin){
    pin.style.display = "none";
  }
        });
        curCol.addEventListener("mouseout", function(){
curCol.style.transform = "rotate(0deg) scale(1.0)";
  curCol.style.boxShadow = "none";
 const pin = curCol.querySelector(".pin");
  if(pin){
    pin.style.display = "block";
  }
        });

})
        



//////////////////////////////// OVERLAY////////////////////////////////////////////////////////////////////
        //  aggiungo l'evento che mostra l'overlay al click specifico sull'immagine della card
        cardContainer.addEventListener("click", function (event) {
            if (event.target.classList.contains("card-img")) {
                overlayElem.style.display = "block";
                overlayElem.innerHTML = `
                <button class="close">Chiudi</button></div><img
            src="${event.target.src}" alt="" class="overlay-img container-small">
                `;
                const buttonElem = document.querySelector(".close");
                buttonElem.addEventListener("click", function () {
                    overlayElem.style.display = "none";
                })
            }

        })



    });
