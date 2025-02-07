// boton hamburguesa
const menuButton = document.querySelector('#menu-button');

// menu
const menuItems = document.querySelector('#menu')

// enlaces
const links = document.querySelectorAll('#menu a')

// menu hamburguesa para aparecer y desaparecer el contenido
menuButton.addEventListener('click', () => {

    menuItems.classList.toggle('hidden')

    cambiarIconoCierreMenuBoton()
    
})

// Cerrar el menu de opciones cuando se clikea un enlace
links.forEach((link) => {
    // Cuando un enlace se le da clikc se oculta el menu
    link.addEventListener('click', ()=> {
        menuItems.classList.add('hidden')

        cambiarIconoCierreMenuBoton()
    })
})

const cambiarIconoCierreMenuBoton = () => {
    if (!menuItems.classList.contains('hidden')) {
        menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-black dark:text-white md:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
      `
    } else {
        menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6 text-black dark:text-white md:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>`
    }
}

// cerrar el menu cuando se maximice la pantalla
window.onresize = function(){
    let w = window.outerWidth
    if (w>768){
        menuItems.classList.add('hidden')
        cambiarIconoCierreMenuBoton()
    }
}

// Dark mode
const redesSociales = document.querySelectorAll('#redSocial a svg')
const darkButton = document.querySelector('#darkButton')
darkButton.addEventListener('click', function() {

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');

            // cambiar los colores a las redes sociales
            redesSociales.forEach(redSocial => {
                redSocial.firstElementChild.attributes[0].value = '#64748B'
            })
            
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            
            // cambiar los colores a las redes sociales
            redesSociales.forEach(redSocial => {
                redSocial.firstElementChild.attributes[0].value = '#64748B'
            })
            
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
             // cambiar los colores a las redes sociales
             redesSociales.forEach(redSocial => {
                redSocial.firstElementChild.attributes[0].value = '#00000'
            })
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
             // cambiar los colores a las redes sociales
             redesSociales.forEach(redSocial => {
                redSocial.firstElementChild.attributes[0].value = '#ffffff'
            })
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

const jobSection = document.querySelector('#jobSection')
const articles = document.querySelectorAll('#jobSection article')


jobSection.addEventListener('click', e => {

    //obtiene el id del botton presionado en su atributo data-id
    const id = e.target.dataset.id

    //si existe un id....
    if(id){

        //...agregarle a todos los articles la clase hidden...
        articles.forEach((article)=>{
            article.classList.add('hidden')
        })

        //...buscar el elemento con el id...
        const element = document.getElementById(id);
        //... y removerle la clase hidden
        element.classList.remove('hidden')
    }
})

const jobLinks = document.querySelectorAll('#jobSection button')
const firstLink = document.querySelector('#link1')

jobLinks.forEach((link)=>{
    link.addEventListener('click', ()=> {
        firstLink.classList.remove('border-sky-500', 'bg-white', 'dark:bg-slate-700')
        firstLink.classList.add('dark:border-slate-700')
    })
})


