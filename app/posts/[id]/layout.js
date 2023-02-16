import Link from "next/link";
import styles from './layout.module.css'


const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { 
      revalidate: 60
    },
  }).then((res) => res.json());
};

export default async function post({ children,params }) {
  const { id } = params;
  const posts = await fetchPost(id);

  return (
    <div className={styles.ContainerPost}>
      <div> 
        <h2 >{posts.title}</h2>
        <p className={styles.body}>{posts.body}</p>
      </div>
      <Link href={`/posts/${id}/comments`}>Commentary</Link>
      <div> 
        {children}  
      </div>
    </div>
  );
}
