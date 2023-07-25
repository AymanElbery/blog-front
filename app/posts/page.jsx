
import {getAllPosts} from '../../utils/api';
import PostPreview from '@/components/PostPreview';

const PostsPage = async () => {

  let responce = await getAllPosts()
  
  const posts = responce
    

  return (
    <div>
      <h1>All Posts</h1>
      
      {posts.map((post) => (
        <PostPreview key={post._id} {...post}></PostPreview>
      ))}
    </div>
  );
};

export default PostsPage;
