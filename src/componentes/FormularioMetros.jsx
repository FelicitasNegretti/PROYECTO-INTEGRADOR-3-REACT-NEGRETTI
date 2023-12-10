import React from 'react'
import './style.css'

export function FormularioMetros({cantidad, setCantidad}) {

  return (
    <div>
        <label for="metros2">Ingresa los Metros cuadrados:</label>
        <input type="number" id="metros2" placeholder="Ej: 20 (mín=20 y máx=500)" min="20" max="500" required 
          onChange={(e) =>setCantidad(parseInt(e.target.value))}
        />
    </div>
    
  )
}

