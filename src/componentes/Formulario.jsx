import React, { useState } from 'react'

export function Formulario() {

const [persona, setPersona] = useState({
    nombre: '',
    apellido: '',
    email: ''
})

//const NombreIngresado = (e) => {
//    setPersona ({...persona, nombre: e.target.value})
//}

//const ApellidoIngresado = (e) => {
//    setPersona ({...persona, apellido: e.target.value})
//}

//const EmailIngresado = (e) => {
//    setPersona ({...persona, email: e.target.value})
//}

const DatosIngresados = (e) => {
    setPersona ({...persona, [e.target.name]: e.target.value})
}


return (
    <div className=" center div-cotizador">
        <h2 className="center separador">Completá con tus datos</h2>

        <form>
            <label for="nombre">Nombre</label>
            <input id="nombre" type="text" value={persona.nombre} onChange={(e) => DatosIngresados(e)} name='nombre' />

            <label for="apellido">Apellido</label>
            <input id="apellido" type="text"value={persona.apellido} onChange={(e) => DatosIngresados(e)} name='apellido' />

            <label for="email">Email</label>
            <input id="email" type="email" value={persona.email} onChange={(e) => DatosIngresados(e)} name='email' />
        </form>
        <button className="button button-outline">Crear usuario</button>
        <p className="importe">
            Tu ticket será emitido a nombre de: {persona.nombre} {persona.apellido}
        </p>

        


    </div>
  )
}
