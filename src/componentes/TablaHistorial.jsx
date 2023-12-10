import React, { useState } from 'react'
import './style.css'


export function TablaHistorial() {

    const ObtenerLS = () => {
        let datosLS = localStorage.getItem("cotizaciones")    

        let historialCotizaciones = JSON.parse(datosLS)
 
        if(datosLS){
            return JSON.parse(datosLS)
          }else{
            return[]
          } 
}

const [datosTabla, setDatosTabla] = useState(ObtenerLS())
console.log(datosTabla)
  
    return (


    <div>
        <h1 className="center separador">Historial </h1>
        <div className=" center div-cotizador">
            <table id='tabla'>
                <thead>
                    <tr>
                        <th>Fecha de cotización</th>
                        <th>Propiedad</th>
                        <th>Ubicación</th>
                        <th>Metros cuadrados</th>
                        <th>Póliza mensual</th>
                    </tr>
                </thead>
                <tbody>
                        {datosTabla.map(dato => <tr>
                            <td key={dato.tipo}>{dato.tipo}</td>
                            <td key={dato.tipo}>{dato.cantidad}</td>
                            <td key={dato.tipo}>{dato.tipo}</td>
                            <td key={dato.tipo}>{dato.ubicacion}</td>
                            <td key={dato.tipo}>{dato.total.toFixed(2)}</td>
                            </tr>)}
                </tbody>
            </table>
        </div>
        
    </div>
  )
}
