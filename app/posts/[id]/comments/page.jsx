
import styles from './page.module.css'

const fetchComments = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { 
      revalidate: 60
    },
  }).then((res) => res.json());
};

export default async function comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <div className={styles.containerComment}>  
      {comments.map(comment => (  
        <div key={comment.id}>
          <h2>{comment.name}</h2>
          <p className={styles.body}>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}