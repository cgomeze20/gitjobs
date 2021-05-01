



        
    const input = document.getElementById('searchjob')
    const searchBtn = document.getElementById('searchbtn')
    const jobs = document.querySelector('.jobs-cards')
    const plantilla = document.getElementById('plantilla').content
    const fragment = document.createDocumentFragment()


    //Obtener valores de la API e insertarlos en el DOM
        window.addEventListener('DOMContentLoaded',async(e)=>{

            try {
                const job = `https://jobs.github.com/positions.json?`
                const res = await fetch(job)
                const data = await res.json()
                pintarData(data)
                formularioCliente(data)
                formularioLocation(data)
                formChecked(data)
            } catch (error) {
                console.log(error);
            }
            
        })

        const pintarData = (data) =>{

            data.forEach(element => {
                // console.log(element);
                plantilla.querySelector('img').src = element.company_logo;
                plantilla.querySelector('img').alt = element.company_url;
                plantilla.querySelector('p:nth-child(2)').textContent = moment(new Date(element.created_at)).startOf('day').fromNow()
                plantilla.querySelector('p:nth-child(3)').textContent = element.type;
                plantilla.querySelector('p:nth-child(4)').textContent = element.title;
                plantilla.querySelector('p:nth-child(5)').textContent = element.company;
                plantilla.querySelector('p:nth-child(6)').textContent = element.location;
                plantilla.querySelector('a').href = `detailjob.html?job=${element.id}`
                
                let clone = document.importNode(plantilla,true)
                fragment.appendChild(clone)
            });
            jobs.innerHTML = ''
            jobs.appendChild(fragment);  

        }