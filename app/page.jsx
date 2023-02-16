//siempre para crear una ruta debemos hacer la carpeta y adentro tener nuestro archivo page.jsx
import style from './page.module.css'

export default function HomePage() {    
    return ( 
        <div className={style.Home}>Esta es nuestra app por ahora</div>
    )
}