import React, { useState } from 'react'
import './style.css'


export function TablaHistorial() {

    const ObtenerLS = () => {
        let datosLS = localStorage.getItem("cotizaciones")    
//console.log(datosLS)
        let historialCotizaciones = JSON.parse(datosLS)
 //       console.log(historialCotizaciones)
        if(datosLS){
            return JSON.parse(datosLS)
          }else{
            return[]
          } 
}

const [datosTabla, setDatosTabla] = useState(ObtenerLS())
console.log(datosTabla)


//let datosLS = localStorage.getItem("cotizaciones")
//console.log(datos)

//const tablaHistorial = document.querySelector("tbody")

//const retornoTablaHTML = (fila)=> {
 //   return `<tr>
//<td>'7/12'</td>
//                <td>${fila.tipo}</td>
//                <td>${fila.ubicacion}</td>
 //               <td>${fila.cantidad}</td>
  //              <td>$ ${fila.total}</td>
 //           </tr>`
//}

//const cargoHistorial = ()=> {
 //   let tablaHTML = ""
//if (historialCotizaciones.length > 0) {
 //       historialCotizaciones.forEach(fila => tablaHTML += retornoTablaHTML(fila));
//        tablaHistorial.innerHTML = tablaHTML
//    }
//}


  
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
