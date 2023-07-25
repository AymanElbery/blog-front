import React from 'react';
import PostForm from '@/components/PostForm';
import Link from 'next/link';

export default async function EditPostPage(props) {
  

  return (

    <div>
      
     <h1 className='text-xl text-center my-4 '>

      <Link href={`/posts/${props.params.id}`}> return to  the post</Link>
     </h1>
        <PostForm method="edit" id={props.params.id}></PostForm>
    </div>

  )
}
