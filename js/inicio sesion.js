const correo=document.getElementById("correo")
const contraseña=document.getElementById("contraseña")
const iniciarsesion=document.getElementById("iniciarsesion")
const database=firebase.database()
const autentificacion=firebase.auth()



iniciarsesion.addEventListener("click",()=>{
    
        autentificacion.signInWithEmailAndPassword(correo.value,contraseña.value).then(
            ()=>{
                window.location.href="inicio.html"
            }
        )


})
