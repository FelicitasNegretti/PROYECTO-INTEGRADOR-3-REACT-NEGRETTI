import React from 'react'
import './style.css'

export function FormularioUbicacion({ubicacion, setUbicacion}) {

    const datosUbicacion = [{tipo: 'CABA', factor: 1.13},
                        {tipo: 'Tandil', factor: 1.04},
                        {tipo: 'Costa Atlántica', factor: 1.29},
                        {tipo: 'Patagonia', factor: 1.00},]


  return (
    <div>
        <label for="ubicacion">Selecciona su ubicacion</label>
        <select id="ubicacion" onChange={(e) => setUbicacion(parseFloat(e.target.value))}>
            <option selected value="0">...</option>
            <option selected value="1.13">CABA</option>
            <option selected value="1.04">Tandil</option>
            <option selected value="1.29">Costa Atlántica</option>
            <option selected value="1">Patagonia</option>
        </select>
    </div>
)
}
