import { useEffect, useState } from "react"

const FollowMouse = ()=> {
  const[enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  //window.addEventListener() <----- no es recomendable, debido a que se ejecutara siempre que se renderiza el componente 
  //es mas recomendable usar un UseEffect para tener el control de cuando queremos suscribirnos a un evento, cuando hacer un track, cuando hago un fetching  de datos... etc
  

  // pointer move
  useEffect(()=>{
    console.log('effect',{enabled})
    
    const handleMove = (event)=>{
      const { clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    } 
    // { clientX, ClientY} = posicion donde estara ubicado el puntero de nuestro cliente
    if (enabled){
      window.addEventListener('pointermove', handleMove)
    }
    // Cleanup
    // se ejecuta :
    // --> cuando el componente se desmonta
    // --> cuando cambian las dependencias
    // --> antes de ejecutar el efecto de nuevo

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])

  useEffect(()=>{
    document.body.classList.toggle('no-cursor', enabled)

    return()=>{
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  // [] --> solo se ejecuta una vez, cuando se monta el componente
  // [enable, ...(se pueden asignar mas dependencias)] --> se ejecuta cuando cambia enable y cuando se monta componente
  // undefined --> se ejecuta cada vez que se renderiza el componente
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        //transform: 'translate(0px,0px)'
        transform: `translate(${position.x}px, ${position.y}px)`
      }}/>

      <button onClick={()=>setEnabled(!enabled)}>
        {enabled ? 'Desactivar':'Activar'} seguir puntero
      </button>
    </>
  )
}

function App() {

  return (
    <main>
      <FollowMouse/>
    </main>
  )
}

export default App
