//todos son componentes servidor por defecto en nextjs
//siempre intentar que el componente mas pequeño sea el de cliente
'use client'

import styles from './LikeButton.module.css'
import {useState} from 'react'

export const LikeButton = ()=> {     
    
    const [Liked, setLiked] = useState(false)

    return ( 
        <button className={styles.button} onClick={() => { setLiked(!Liked) }}>
            {Liked? '♥' : 'Like'}
        </button>
    )
}

//Hidratacion cuando hacemos un server rendering/ osea cuando renderizamos desde la parte del servidor, Lo que estamos devolviendo es un html estatico, como un string sin vida, lo que consiste la hidratacion es que a ese html estatico le daremos vida, en el cliente, le añadimos la interactividad,ejecutamos el ciclo de vida el use effect el useState, se llama hidratacion por que desde el cliente lo que hacemos es reutilizar todo ese html sin vida


//al hacer build nos genera una pagina estatica con los datos que obtuvimos en el fetching solo con los que solicitamos
