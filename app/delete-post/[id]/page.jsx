"use client"
import DeletePost from "@/components/DeletePost"
import { handleDelete } from "@/components/handleDelete"
export default function DeletePage(props) {
  return (
    <>
    <h1>do you want to delete post </h1>
    <DeletePost id={props.params.id} > </DeletePost>
    </>
  )
}
