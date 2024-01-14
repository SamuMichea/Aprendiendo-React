
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    // Practicando con array

    const users= [
        {
            userName: 'Midudev',
            name: 'Miguel Angel Duran',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo Heraldo',
            isFollowing: true
        },
        {
            userName: 'PacoHdezs',
            name: 'Paco Hdez',
            isFollowing: true
        },
        {
            userName: 'TMChein',
            name: 'Tomas',
            isFollowing: true
        }
    ]


    //-----------------

    // se define por defecto que al iniciar la app el valor del estado sea midudev
    // El useState devuelve un array de 2 posiciones, primera posicion con valor del estado recibido 
    // la segunda con la forma de como actualizar actualizar el estado

    //const [name, setName] = useState('midudev') 

    //const midudev = { userName: 'midudev'} // se pasan parametros por defecto

    return (
        <section className='App'>
            {/* <TwitterFollowCard {...midudev}>  // llama a todos los parametros definidos dentro de la const */}
            
            {/* 
            ----COMPONENTES PRE-DEFINIDOS---- 
            
            <TwitterFollowCard userName="midudev" initialIsFollowing = {false}>  

                Miguel Angel Duran
            
            </TwitterFollowCard>

            
            <TwitterFollowCard userName= "pheralb">  
                
                Pablo Hernandez
                
            </TwitterFollowCard> 

            --------------------------------
            */}

            {/* 
            <button onClick={ () => setName('pedromichel')}> // cada vez que se pulse se cambiara nombre
                Cambio Nombre
            </button> 
            */}

            {/* RECORRIENDO EL ARRAY CON JS */}

            {
                users.map(({ userName, name, isFollowing }) => (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }

        </section>
    )
}