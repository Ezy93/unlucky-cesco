/* creare un bottone che resetta il testo inserito e scrive il testo nuovo ogni volta in un p diverso */

/*

a) Creare un input type="text" per consentire all'utente di immettere dati

b) Creo una struttura HTML che consenta di avere molti p al suo interno che si comportino come ul>li

c) CREARE UN BOTTONE:
    -   event listener che ascolti gli eventi di click su se stesso
        *   inserire il testo presente nell'input dell'utente in un nuovo p
        *   aggiungere questo p alla lista dei p da mostrare
        *   resetto il testo presente nell'input dell'utente   
    

*/

// Aggiungo un event listener per i click sul bottone selezionato
document.querySelector("button").addEventListener('click', function(){ // una volta cliccato avremo:
    // iniziliazizziamo una nuova variabile newLi ovvero il nuovo elemento <li></li>
    let newLi = document.createElement("li");

    // assegnamo ad una nuova variabile il valore presente nell'input dell'utente
    const newPContent = document.getElementById('user-input');

    // modifichiamo il li appena creato con i contenuti dell'utente
    newLi.innerHTML = `<p>${newPContent.value}</p>`

    // aggiungiamo il li al nostro ul
    document.querySelector("ul").append(newLi);

    // resettiamo l'input dell'utente per permettere una nuova aggiunta
    newPContent.value = "";

});
