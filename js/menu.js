let boton = document.getElementById('menu-btn')
let lista = document.getElementById('menu-items')

boton.addEventListener('cliack' ,()=>{
    lista.classList.toggle('active')
})