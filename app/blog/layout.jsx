import Link from "next/link"
import BlogPage from "./page"

export const metadata = {
    title: 'Abdallah blog ',
    description: 'share some blog posts',
  }
  
  export default function BlogLayout(){
    return (
      <html lang="en">
        <body>
            <Link href="/">return to home page </Link>
            <BlogPage></BlogPage>
        </body>
      </html>
    )
  }
  