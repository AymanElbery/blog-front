import PostPreview from '@/components/PostPreview';
import { getPostById } from '@/utils/api';



export default async function postPage(props) {
    const id = props.params.id
    console.log(id)
    const post = await getPostById(id)
    console.log(post)
  return (
    <div>
        <PostPreview key={post._id} {...post}></PostPreview>
        {/* <h1 className=' mb-3 after:underline after:decoration-wavy'>{post.title }</h1>

        <article className='prose lg:prose-l'>{post.content}</article> */}
    </div>

  )
}
