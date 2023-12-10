import React, {useState, useEffect} from 'react'
import './style.css'

export function Boton({cantidad, ubicacion, tipo, total, setTotal}) {

  const obtenerCotizaciones = () => {
    let datos = localStorage.getItem("cotizaciones")
    console.log(datos)

   if(datos){
      return JSON.parse(datos)
    }else{
      return[]
    } 
  }

  const [error, setError] = useState (false);
  const [cotizaciones, setCotizaciones] = useState(obtenerCotizaciones())

  const calcularCotizacion = e => {
    e.preventDefault();
    if (cantidad === 0 || ubicacion === 0 || tipo === 0 || cantidad < 20 || cantidad > 500){
    
      setError(true);
      return;
    } else{
      setError(false)
            
    const total = CalcularTotal(cantidad, ubicacion, tipo);
    setTotal(total)
    console.log(total);
    }
   }
   
   const guardarHistorial = (e) => {
    e.preventDefault()
    alert("Información guardada en historial")
   
    let objeto = {cantidad, ubicacion, tipo, total}
    console.log(objeto)
    setCotizaciones([...cotizaciones, objeto])
    console.log(cotizaciones)
   }

   useEffect(() => {
    localStorage.setItem("cotizaciones", JSON.stringify(cotizaciones))
    }, [cotizaciones])

    
  return (
    <div>
        <button className="button button-outline" onClick={calcularCotizacion}>Cotizar</button>
        {(error) ? <p className='importe text-rojo'>Verificar que todos los campos estén completos o que la cantidad de metros cuadrados sea correcta...</p> : <p className="importe">Precio estimado: $ <span id="valorPoliza">{total.toFixed(2)}</span>
        <span className="guardar " title="Guardar en historial" onClick={guardarHistorial}>💾</span>
        </p> }
    </div>
  )
}


function CalcularTotal(cantidad, ubicacion, tipo) {
  let total;
  const costoM2 = 35.86

  return cantidad * ubicacion * tipo * costoM2;
}