const dropdown = document.getElementById('dropdown-servicos')
const dropdownMenu = document.getElementById('dropdown-menu')

dropdown.addEventListener('mouseenter', () =>{
    dropdownMenu.classList.add('show')                
})

dropdown.addEventListener('mouseleave', ()=>{
    dropdownMenu.classList.remove('show')                
})