
const buscarForm = document.querySelector('.buscartexto')
const inputForm = document.getElementById('inputForm')
const locationForm = document.querySelector('.buscarlocation')
const locationInput = document.getElementById('inputLocation')
const fulltimeForm = document.querySelector('.buscar')
const checkFulltime = document.getElementById('checkFulltime')

const formularioCliente = (data) =>{
    buscarForm.addEventListener('keyup',e=>{
        e.preventDefault()

        const letraCliente = inputForm.value.toLowerCase()
        // console.log(letraCliente);

        const arrayFiltrado = data.filter(item =>{
            const letraApiTitle = item.title.toLowerCase()
            const letraApiCompany = item.company.toLowerCase()
            const letraApiDesc = item.description.toLowerCase()
            if(letraApiTitle.indexOf(letraCliente) !== -1 || 
            letraApiCompany.indexOf(letraCliente) !== -1 || 
            letraApiDesc.indexOf(letraCliente) !== -1){
                return item
            }
        })
        pintarData(arrayFiltrado)
        // console.log(arrayFiltrado);
    })
}

const formularioLocation =(ciudad) => {
    locationForm.addEventListener('keyup',e =>{
        e.preventDefault()

        const letraLocation = locationInput.value.toLowerCase()

        const locationFiltrado = ciudad.filter(item => {
            const letraLocationAPI = item.location.toLowerCase()

            if(letraLocationAPI.indexOf(letraLocation)!== -1){
                return item
            }
        })
        pintarData(locationFiltrado)
    })
}

const formChecked = (data) =>{
checkFulltime.addEventListener('change',(e)=>{
    e.preventDefault()

    const tiempoFiltrado = data.filter(item=>{
        const check = checkFulltime.checked
        const letra = "full time"
        const letraChecked = item.type.toLowerCase()

        if(check){
            // console.log('checked');
            if(letraChecked.indexOf(letra)!== -1){
                 return item
                 }
        }else{
            // console.log('unchecked');
                return item
        }
       
    })
    pintarData(tiempoFiltrado)
    // console.log(tiempoFiltrado);
})
}
