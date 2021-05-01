
//Toggle DarkMode- LightMode
const boton = document.querySelector('.circle')
const contenedorToggle = document.querySelector('.toggle')

boton.addEventListener('click',(e)=>{
        const contenedorToggle = document.querySelector('.toggle')
        contenedorToggle.classList.toggle('active');
        document.body.classList.toggle('darkMode');

        if(document.body.classList.contains('darkMode')){
            localStorage.setItem('darkMode','true')
        }else {
            localStorage.setItem('darkMode','false')
        }
    });

    if(localStorage.getItem('darkMode')=== 'true'){
        document.body.classList.add('darkMode');
        contenedorToggle.classList.add('active')
    } else{
        document.body.classList.remove('darkMode');
        contenedorToggle.classList.remove('active')
    }
    