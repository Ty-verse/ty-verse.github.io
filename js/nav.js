const search = document.querySelector('.search')
const btn = document.querySelector('.searchbtn')
const input =document.querySelector('.input')

btn.addEventListener('click', () =>{
    search.classList.toggle('active')
    input.focus()
})

function gotop(){
    window.location.href="#";
}