// 1° esercizio //

let elementoLista = document.querySelector(".blog-sidebar div:nth-child(3) .list-unstyled li:nth-child(2)");
     document.addEventListener('DOMContentLoaded', () =>{
     elementoLista.remove();
});

/*
window.onload = function(){
    
    let elementoLista = document.querySelector(".blog-sidebar div:nth-child(3) .list-unstyled li:nth-child(2)");
     elementoLista.remove();
}*/


// 2°esercizio //
 // Opzione 1 
  let childs = document.querySelectorAll('.stretched-link');
        for (let i = 0; i < childs.length; i++) {
            childs[i].addEventListener('click', function () {
                  let genitore= this.parentNode.parentNode;
                  genitore.remove();
            })
        }
         
           /*  let parents = document.getElementsByClassName('col-md-6');
        for (let y = 0; y < parents.length; y++) {
             let genitore = document.getElementsByClassName('mb-4')
            if (genitore=== parents[y]) {
              genitore.remove();
            }
               // parents[y].remove();      
            }
        })
}
*/
        /*
       // Opzione 2
        for(let elemento of elementi){
           elemento.addEventListener('click', function () {
           elemento.closest('.mb-4').remove();
         })
       }
       // Opzione 3
       rimuoviPadre[0].onclick = function(event) {
               event.preventDefault(); //rimuove funzionalità di default dell'elemento
               //console.log(event);
               event.target.closest('.mb-4').remove(); // closest()= trova l'elemento tra parentesi,più vicino
           }
               rimuoviPadre[1].onclick = function(event) {
               event.preventDefault();
               //console.log(event);
               event.target.closest('.mb-4').remove();
       }
      */
        
       // 3° Esercizio //
        let autori = document.querySelectorAll('.blog-post-meta a ');

        for (let i = 0; i < autori.length; i++) {
            autori[i].addEventListener('mouseover', function () {
                alert(autori[i].innerHTML + " è l'autore del post");

            });
        }