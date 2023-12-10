import React from 'react'
import { useState } from 'react'
import { FormularioTipo } from '../src/componentes/FormularioTipo'
import { FormularioUbicacion } from '../src/componentes/FormularioUbicacion'
import { FormularioMetros } from '../src/componentes/FormularioMetros'
import { Header } from '../src/componentes/Header'
import '../src/componentes/style.css'
import { Boton } from '../src/componentes/Boton'


export function Inicio() {

const [tipo, setTipo] = useState("")
const [cantidad, setCantidad] = useState(0) 
const [ubicacion, setUbicacion] = useState("")
const [total, setTotal] = useState(0)


  return (
    <div>
      <Header />
      <div className=" center div-cotizador">
        <h2 className="center separador">Completa los datos solicitados</h2>
        <form id='formulario'>
          <FormularioUbicacion ubicacion={ubicacion} setUbicacion={setUbicacion}/>
          <FormularioTipo tipo={tipo} setTipo={setTipo} />
          <FormularioMetros cantidad={cantidad} setCantidad={setCantidad} />
          <Boton cantidad={cantidad} ubicacion={ubicacion} tipo={tipo} total={total} setTotal={setTotal} />  
        </form>
      </div>
    </div>


  )
}