// en nextjs 13 la manera correcta de llamar fetch es asi, es un react server component, es un componente que se esta ejecutando en el servidor

// a nivel de componente podemos hacer el fetching de datos desde el servidor/ en lugar del cliente
import Link from 'next/link';
import { LikeButton } from './LikeButton'
import styles from './ListOfPosts.module.css'

//podemos hacer peticiones sencillas sin necesidad del cliente/ useState
const fetchPost = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  res.json()
  );
};

export default async function PostsPage() {
  //resivimos los posts
  const Posts = await fetchPost();

  //retornamos el post
  return (
    <div className={styles.ContainerTargetsPost}> 
      {Posts.slice(0, 5).map((post) => (
      <div className={styles.TargetPost} key={post.id}>
        <Link className={styles.LinkPost} href='/posts/[id]' as={`/posts/${post.id}`}>
          <h2 className={styles.Title}>{post.title}</h2>
          <p className={styles.body}>{post.body}</p>
        </Link>
        <LikeButton/>
      </div>
      ))}
    </div>
    //usamos link para navegar entre rutas .slice()//sirve para poner limite de objetos u datos en este caso posts
  );
}

// si necesitamos crear componentes que integre interactividad que necesiten estado u/hook