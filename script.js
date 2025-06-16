const humberger = document.querySelector(".humberger")
const exit = document.querySelector(".exit")

humberger.addEventListener("click", () =>{
    document.querySelector(".righthumberger").style.display = "block"
})
exit.addEventListener("click", () =>{
    document.querySelector(".righthumberger").style.display = "none"
})