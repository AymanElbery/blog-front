

import PostPreview from "@/components/PostPreview";
import {getAllPosts} from "@/utils/api";

export default async function HomePage() {
    const fpost = await getAllPosts()
    const postPreviews = fpost.map((post)=>{ 
    return(
        <PostPreview  key={post.id} {...post}></PostPreview>
    )})
    
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">{postPreviews}</div>    
  )
}
