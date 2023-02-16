//si no ponemos ningun archivo page dentro de la carpeta esta acruara como un componente
import Link from "next/link"
//nav.module.css lo usamos para poder saber que el archivo es de css.module/ lo cual nos permite importarlo y usarlo en expecificadas partes 

import styles from './Nav.module.css' 

export const Nav = () => {

    const links = [{  
    label: 'Home',
    route: '/'
    }, 
    {  
    label: 'About',
    route: '/about'
    }, 
    { 
      label: 'Posts',
      route: '/posts'
    }
      
    ]

    return (    
        <header>  
          <nav className={styles.nav}> 
            <h2 className={styles.title}>Nav</h2>
            <ul className={styles.ul}>  
              {
                links.map(({ label, route }) => ( 
                  <li className={styles.li} key={route}>
                    <Link className={styles.Link} href={route}>{label}</Link>
                  </li>
                )) 
              }
            </ul>
          </nav>
        </header>
    )
}