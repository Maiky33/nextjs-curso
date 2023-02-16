//hacemos el layout lo cual es un fragmento de componente que no desaparece de sus hijos hasta ir a otra ruta/ o hasta que este elemento se desaga
import styles from './layout.module.css'


export default function PostLayout({ children }) {
  return (
    <div className={styles.layoutPosts}>
      <small>Home &bull; posts</small>
      {children}
    </div>
  );//ponemos children los hijos// que son los posts
}

//GetStaticProps vs GetServerSideProps vs ISR
