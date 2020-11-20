class Contacto{

constructor(contacto){
    this.contacto=contacto;

}
render=()=>{
    let component=document.createElement("div")
    let nombre=document.createElement("p")
    nombre.innerHTML=this.contacto.nombre
    let telefono=document.createElement("p")
    telefono.innerHTML=this.contacto.telefono
    let eliminar=document.createElement("button")
    eliminar.innerHTML="eliminar"
    component.appendChild(nombre)
    component.appendChild(telefono)
    component.appendChild(eliminar)
    eliminar.addEventListener("click",()=>{
    let database=firebase.database()
    database.ref("contactos/"+ this.contacto.id).set(null)

    
    })
    return component
}
}