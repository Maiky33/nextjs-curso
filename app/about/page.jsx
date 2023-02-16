//podemos crear rutas poniendo dentro de una carpeta un archivo page con esto creamos rutas
import style from './page.module.css'

export default function AboutPage() {    
    return ( 
        <div className={style.About}> Este es el About</div>
    )
}