import ListOfPost from './ListOfPosts'
import {Suspense} from 'react'

export default async function PostsPage () {    

  //podemos usar suspense en caso de no querrer usar el loading de nextjs 
  
  return (
    <section> 
      <Suspense fallback={<p>cargandooo....</p>}>  
        <ListOfPost/>
      </Suspense>
    </section>
  );
}