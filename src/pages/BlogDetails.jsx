import React from 'react'
import { useParams } from "react-router-dom"




const BlogDetails = ({ blogs }) => {
    const { id } = useParams()
    const blog = blogs.find(
        (b) => String(b.id) === String(id)
    )

    if (!blog) {
        return <h1>Blog not found</h1>
    }


    
    return (

        <div className="min-h-screen pt-15 px-6 bg-base-200">

            <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden">

                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-96 object-cover"
                />

                <div className="p-8">

                    <h1 className="text-5xl font-bold">
                        {blog.title}
                    </h1>

                    <p className="mt-6 text-lg leading-8">
                        {blog.content}
                    </p>

                    <div className="mt-8 flex items-center gap-4">

                        <div className="avatar">
                            <div className="w-14 rounded-full">
                                <img src="https://i.pravatar.cc/100" />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold">
                                Malik
                            </h3>

                            <p className="text-sm opacity-70">
                                Blog Author
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )


}

export default BlogDetails
