import { handleDelete } from "./handleDelete";


const DeletePost = (props) => {



  return (
    
<>
   
      <button onClick={()=>handleDelete(props.id)}>
        Delete
      </button>
</>
  );
}


export default DeletePost;