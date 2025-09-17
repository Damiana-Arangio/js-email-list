/******************
    DEFINIZIONI 
******************/

// Endpoint API per generazione email random
const endpointEmail = "https://flynn.boolean.careers/exercises/api/random/mail";

// Seleziono elementi dal DOM
const listaEmail = document.getElementById("lista-email");

// Ciclo per generare 10 email random
for (let i = 1; i <= 10; i++) {
    generaEmail()
}



/*************
    FUNZIONI 
**************/

// Funzione per generare 10 email random
function generaEmail() {

    // Chiamata Ajax con Axios
    axios.get(endpointEmail)
        .then((rispostaApiSuccess) => {
            const email = rispostaApiSuccess.data.response;                         // Recupero email da API

            const nuovoLi = document.createElement("li");                           // Creo tag <li> 
            nuovoLi.textContent = email;                                            // Inserisco email all'interno di <li>
            nuovoLi.classList.add("list-group-item", "list-group-item-danger");    // Aggiungo classi (di Bootstrap) ad li
            listaEmail.appendChild(nuovoLi);                                        // Appendo come ultimo figlio di <ul>

        })

        .catch((rispostaApiError) => {
            console.error(rispostaApiError);
        })
}