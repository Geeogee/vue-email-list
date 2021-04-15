// REPO: vue-email-list
// GOAL: Attraverso l'apposita API di Boolean generare 10 indirizzi 
// email e stamparli in pagina all'interno di una lista.

function createList() {


    $("#wrapper-list").append(`<ul id="list"></ul>`);
    const target = $("#list");

    for (let i=0; i<10; i++) {

        $.ajax({

            "url" : "https://flynn.boolean.careers/exercises/api/random/mail",
            "method" : "GET",
    
            success: function(data) {
                const email = data.response;
                console.log(i);
                target.append(`<li id="list-element${i}">${email}</li>`);
            },
    
            error: function() {
    
                console.log("Error!")
            }
        })
    }
    
}

function init() {

    createList();
    
}

document.addEventListener("DOMContentLoaded" , init);