


const formulario= document.forms[0]
formulario.addEventListener("submit", (e)=>{
    e.preventDefault() // para poder visualizar el mensaje que hay dentro del formulario en la consola. Si no hacemos esto el mensaje se envia 
                       // y se elimina almomento  
     console.log(e)
     console.log(e.target)
    // console.log("Evento submit")
    const nombre = e.target[1].value 
    console.log(nombre)

    const color = e.target[2].value
    console.log(color)

    const selccion = document.querySelector('input[name="selection"]:checked').value
    console.log(selccion)
    const divwall = document.querySelector("#divwall")
    divwall.innerHTML += crearCarta(nombre,color,selccion) 

    // Agregar event listeners a los spans recién creados
    const closeButtons = divwall.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.target.closest('div[name="carta"]').remove();
        });
    });

    formulario.reset()
} )


function crearCarta(texto, color, seleccion) {
    let estructuraCarta;
    
    if (seleccion === "opcion_1") {
        estructuraCarta = `
            <div name="carta" id="styleGrafitty" class="w-[300px] h-[300px] border border-black bg-[${color}] text-[40px] text-center">
            <div class="w-[100%] flex flex-row justify-end">
                <span class="close">X</span>
            </div>
            <h1>${texto}</h1>
            </div>
        `;
    } else {
        estructuraCarta = `
            <div name="carta" id="stylePoster" class="w-[300px] h-[300px] border border-black bg-[${color}] text-[40px] text-center">
            <div class="w-[100%] flex flex-row justify-end">
                <span class="close">X</span>
            </div>
            <h1>${texto}</h1>
            </div>
        `;
    }

    return estructuraCarta;
}