const nombre=document.getElementById("nombre")
const telefono=document.getElementById("telefono")
const correo=document.getElementById("correo")
const contraseña=document.getElementById("contraseña")
const repetircontraseña=document.getElementById("repetircontraseña")
const registrar=document.getElementById("registrar")
const ingresar=document.getElementById("ingresar")

const database= firebase.database()
const autentificación= firebase.auth()

ingresar.addEventListener("click",()=>{
    window.location.href="inicio sesion.html"
})

registrar.addEventListener("click",()=>{
    if(nombre.value==""||telefono.value==""||correo.value==""||contraseña.value==""||repetircontraseña.value==""){
    
        alert("Complete este campo")
    } else{
        if(contraseña.value===repetircontraseña.value){
           
            autentificación.createUserWithEmailAndPassword(correo.value,contraseña.value).then(
                (data)=>{
                    console.log(data)
                    let usuario={
                        id:data.user.uid,
                        nombre:nombre.value,telefono:telefono.value,correo:correo.value,contraseña:contraseña.value
                    }
                    database.ref("usuarios/"+usuario.id).set(usuario).then(
                        ()=>{
                            window.location.href="inicio.html"
                        }
                        
                    )
                }
            )
        
        }
    }
})

