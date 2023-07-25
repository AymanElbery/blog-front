import Link from "next/link"


function PostPreview(props) {
  return (
    <div key={props._id} className="border border-violet-200 p-4 rounded-md mb-2 shadow-md bg-white overflow-hidden flex-wrap">
            <Link href={`/posts/${props._id}`}>
                <h2 className="font-bold text-violet-600 text-xl">{props.title}</h2>
            </Link>
            <p className="text-sm text-slate-400">{props.date}|{props.author}</p>

            <p className="text-slate-700">{props.content}</p>
        
            <div className="mt-12">

            <Link href={`/edit-post/${props._id}`}> <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
</Link>
            <span>|</span>
            <Link href={`/delete-post/${props._id}`} className="my-12"> <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
</Link>
            </div>
        </div>
  )
}

export default PostPreview