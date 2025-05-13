
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



const cardContainer = document.querySelector(".card-container");

axios
.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
    let cards = "";
    const pictures = resp.data;
    pictures.forEach(singlePic => {
        const {url} = singlePic;
        cards +=  `<div class="col">
                   <div class="card">
                    <img src="./img/pin.svg" alt="" class="pin">
                    <img src="${url}";
                        alt="immagini estate 2024" class="card-img">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                    </div> </div>`
    });
 cardContainer.innerHTML = cards;
                   
});