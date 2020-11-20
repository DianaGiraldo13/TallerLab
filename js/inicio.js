const database=firebase.database()
const autentificacion=firebase.auth()

const nombre=document.getElementById("nombre")
const nombredecontacto=document.getElementById("nombredecontacto")
const telefono=document.getElementById("telefono")
const botonagregar=document.getElementById("botonagregar")
const botoncerrarsesion=document.getElementById("botoncerrarsesion")
const contenedor=document.getElementById("contacto")
let usuarioT

autentificacion.onAuthStateChanged(
    (user)=>{
        if(user==null){
            window.location.href="index.html"
        }else{
            database.ref("usuarios/"+user.uid).once("value",(data)=>{
               usuarioT=data.val()      
                console.log(usuarioT)      
                nombre.innerHTML=usuarioT.nombre
                database.ref("contactos").orderByChild("idusuario").equalTo(usuarioT.id).on("value",(data)=>{
                    contenedor.innerHTML=""

                    data.forEach(
                        contacto=>{
                            let infocontacto=contacto.val()
                            let contactoT=new Contacto(infocontacto)
                            contenedor.appendChild(contactoT.render())
                        }
                    )
                })
            })
        }
    }
)
botonagregar.addEventListener("click",()=>{
    let referencia= database.ref("contactos").push()
    let contacto={
        id:referencia.key,
        idusuario: usuarioT.id,
        nombre:nombredecontacto.value,
        telefono:telefono.value
    }
    referencia.set(contacto)
}
)


botoncerrarsesion.addEventListener("click",()=>{
    autentificacion.signOut().then(
        ()=>{
            window.location.href="index.html"
        }
    )
})
