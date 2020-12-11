document.addEventListener('readystatechange', () => {
    if (document.readyState == 'complete') {
        Iniciar();
    }
});
function Iniciar() {
    let elementosNegrita=document.getElementsByClassName("negrita");
    let divN = [];
    function listadoNegrita(objeto) {
       for (let i = 0; i < objeto.length ; i++) {
        divN[i] = objeto[i];
        
       }
    }
    listadoNegrita(elementosNegrita);

    function pintarNegrita() {
        for (let i = 0; i < divN.length; i++) {
            let padres = divN[i].children;
            for (let hijo of padres) {
                if (hijo.tagName === "P") {
                    let pos = hijo.innerText.indexOf(':');
                    if (pos !== -1) {
                        hijo.innerHTML = "<b>" + hijo.innerHTML.substr(0,pos+1) +"</b>" + hijo.innerHTML.substr(pos+1);
                    }
                }
           }
        }
    }

    pintarNegrita();
    let puestos = [];
    const elementosExtras = document.getElementsByTagName('h4');
    for (let i = 3; i<elementosExtras.length; i++) {
        puestos.push(elementosExtras[i]);
    }
    const divsExtras = document.getElementsByClassName("informacion-extra");
    for (let divDinamicas in puestos) {
        puestos[divDinamicas].addEventListener('click', function() {
        if (divsExtras[divDinamicas].style.display =='none') {
           divsExtras[divDinamicas].style.display ='block';
        } else {
                divsExtras[divDinamicas].style.display = 'none';
              }
        })
        divsExtras[divDinamicas].style.display ='none';
    }
}
