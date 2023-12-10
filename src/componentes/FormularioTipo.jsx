import React from 'react'
import './style.css'

export function FormularioTipo({tipo, setTipo}) {

  const datosPropiedad = [{tipo: 'Casa', factor: 1.09},
  {tipo: 'P.H.', factor: 1.05},
  {tipo: 'Depto. Edificio', factor: 1.02},
  {tipo: 'Barrio Privado', factor: 1.19},
  {tipo: 'Oficina', factor: 2.39},
  {tipo: 'Local Comercial', factor: 1.41},
  {tipo: 'Depósito Logística', factor: 1.92}]


  return (
    <div>
        <label for="propiedad">Selecciona el tipo de propiedad</label>
        <select id="propiedad" onChange={(e) => setTipo(parseFloat(e.target.value))}>
            <option selected value="0" >...</option>
            <option selected value="1.09" >Casa</option>
            <option selected value="1.05" >P.H.</option>
            <option selected value="1.02" >Depto. Edificio</option>
            <option selected value="1.19" >Barrio Privado</option>
            <option selected value="2.39" >Oficina</option>
            <option selected value="1.41" >Local Comercial</option>
            <option selected value="1.92" >Depósito Logística</option>
        </select>      
    </div>
  )
}
