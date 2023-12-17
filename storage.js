let form=document.getElementById("form")

form.addEventListener('submit',(e)=>{
e.preventDefault()

let txt1=document.getElementById("txt1").value
let txt2=document.getElementById("txt2").value

let max1=window.localStorage.setItem("name",`${txt1}`)
let max2=window.localStorage.setItem("password",`${txt2}`)

})