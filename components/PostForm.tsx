"use client"
import { addPost, editPost } from "@/utils/api";
import router from "next/router";
import { useState } from "react";
import { toast } from "react-toastify";


export default function PostForm(props:any) {

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        author: '',
        date: '',
        tags: '',
      });
    
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
    
    const handleSubmit = async(e: { preventDefault: () => void; }) => {
        e.preventDefault();
            if (props.method=="add"){
                const data =await addPost(formData)
                alert("post created ")
                return data
            }

            if(props.method == "edit"){
                console.log(props.id)
            try{

               const d= await editPost(props.id,formData)
                
                
                console.log(d)
                alert('post edit sucessfully');
             
            }catch(err){
                console.log(err)
                alert('Failed to edit post');
            }

            }
            if(props.method=="delete" && props.id){
                // const data =await deletePost(formData)

            }
      };
  return (
    <form className="w-full" onSubmit={handleSubmit}>

    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="title">
          Title
        </label>
      </div>
      <div className="md:w-2/3">
        <input value={formData.title}
              onChange={handleChange} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="title" type="text"  name="title" placeholder=" Please Enter Post Title Here"/>
        
      </div>
    </div>
  
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="author">
        Author
        </label>
      </div>
      <div className="md:w-2/3">
        <input value={formData.author}
              onChange={handleChange}
               className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="author" name='author' type="text" placeholder="Abdallah Askar"/>
        
      </div>
    </div>
  
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="date">
          date
        </label>
      </div>
      <div className="md:w-2/3">
        <input value={formData.date}
              onChange={handleChange}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="date" name="date" type="date"/>
        
      </div>
    </div>
  
  
    <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
  
            <label  className = "block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" htmlFor="tags">Tags (comma-separated):</label>
            </div>
            <div className="md:w-2/3">
  
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              />
              </div>
          </div>
  
  
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-left mb-12 md:mb-0 pr-4" htmlFor="content">
          Post Content
        </label>
      </div>
      <div className="md:w-2/3">
        <input value={formData.content}
              onChange={handleChange}
               className="resize bg-gray-200 appearance-none border-2 min-h-max h-48  border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-purple-500" id="content" name="content" type="textarea" placeholder="..."/>
      </div>
    </div>
  
    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
          submit
        </button>
      </div>
    </div>
  </form>
     
  )
}
