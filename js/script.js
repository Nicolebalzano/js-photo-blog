// ** Milestone 1 **
//     Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta
//  in maniera statica: utilizzando soltanto HTML e CSS e riproducendo 
// una singola fotografia(usiamo una qualunque immagine a piacimento)

//         ** Milestone 2 **
//             Utilizzando Postman, testiamo una chiamata a questo endpoint:
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a 
// pensare a come poterli sfruttare.

// ** Milestone 3 **
//     Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, 
// sfruttando la risposta per generare dinamicamente in pagina una serie di foto!


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