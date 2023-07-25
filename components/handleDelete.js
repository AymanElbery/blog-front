
import { deletePost } from "@/utils/api";

export const handleDelete = async (id) => {
    try {
      await deletePost(id);
      alert('Post deleted successfully!');
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
   
  };

}