const card = document.querySelector('.container')


const query = new URLSearchParams(window.location.search)
const params = query.get('job')

document.addEventListener('DOMContentLoaded',(e)=>{
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch(`https://jobs.github.com/positions.json`)
        const data = await res.json();

        const filtroData = data.filter(item=> item.id === params)
        pintarData(filtroData)

    } catch (error) {
        console.log(error);
    }
}

const pintarData = data => {
    let elementos = '';
    data.forEach(item => {

        let time = moment(new Date(item.created_at)).startOf('d').fromNow();

        elementos += `
        <div class="encabezado ">
            <div class="encabezado_imagen">
                <img src=${item.company_logo} alt="">
            </div>
            <div class="encabezado_detalle">
                <p>${item.company}</p>
                <p>${item.company_url}</p>
            </div>
            <div class="encabezado_boton">
                <a href=${item.company_url} target="_blank">Company Site</a>
            </div>
        </div> 

        <div class="main">
        <div class="informacion">
            <div class="info_detalle">
                <span>${time}</span> <span>*</span>
                <span>${item.type}</span>
                <p>${item.title}</p>
                <p>${item.location}</p>
            </div>
            <div class="info_boton">
                <a href=${item.company_url} target="_blank">Apply Now</a>
            </div>
        </div>

        <div class="descripcion">
            ${item.description}
        </div>

        <div class="aplicar">
            <p>How to Apply</p>
            <p>${item.how_to_apply}</p>
        </div>

        <div class="footer">
            <div class="footer_texto">
                <p>${item.title}</p>
                <p>${item.company}</p>
            </div>
            <div class="footer_boton">
                <a href=${item.company_url}>Apply Now</a>
            </div>

        </div>

    </div>
        `
    })
    card.innerHTML = elementos
}