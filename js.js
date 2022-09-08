const bar = document.getElementById("bar-icon")
const nav = document.getElementById("navbar")
const clos= document.getElementById("close")

if (bar){
    bar.addEventListener("click" , () => {
        nav.classList.add("ativo")
    })
}
   
if(close) {
    clos.addEventListener("click" , () => {
        nav.classList.remove("ativo")
    })
}

