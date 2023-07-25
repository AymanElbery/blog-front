

export const getAllPosts = async () => {
    const response = await fetch('https://asker-blog-api-86ba8ad114bc.herokuapp.com/posts',{
      next:{
        revalidate:2
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data

  };

export const getPostById = async (postId) => {
  const response = await fetch(`https://asker-blog-api-86ba8ad114bc.herokuapp.com/posts/${postId}`,{
    next:{
      revalidate:2
    }
  });
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  const data = await response.json();
  return data;
};


export const addPost = async (postData) => {
  const response = await fetch('https://asker-blog-api-86ba8ad114bc.herokuapp.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
 
  },);
  if (!response.ok) {
    throw new Error('Failed to add post');
  }
  const data = await response.json();
  return data;
};


export const editPost = async (postId, postData) => {
  try {
    const response = await fetch(`https://asker-blog-api-86ba8ad114bc.herokuapp.com/posts/${postId}`, {
      method: 'PUT', // or 'PATCH' depending on your server's API
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Failed to edit post');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to edit post');
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await fetch(`https://asker-blog-api-86ba8ad114bc.herokuapp.com/posts/${postId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete post');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to delete post');
  }
};


