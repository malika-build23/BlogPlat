import React, { useState } from 'react'
import { useParams } from "react-router-dom"

const EditBlog = ({ blogs,setBlogs }) => {

    const { id } = useParams()

    const blog = blogs.find(
        (b) => b.id === Number(id)
    )
    const [updatedBlog, setUpdatedBlog] = useState({

        title: blog.title,
        image: blog.image,
        category: blog.category,
        content: blog.content

    })
    const handleChange = (e) => {

        setUpdatedBlog({

            ...updatedBlog,
            [e.target.name]: e.target.value

        })

    }
    const handleUpdate = (e) => {

        e.preventDefault()

        const updatedBlogs = blogs.map((b) =>

            b.id === Number(id)
                ? { ...b, ...updatedBlog }
                : b

        )

        setBlogs(updatedBlogs)

        alert("Blog Updated!")

    }

    return (

        <div className="min-h-screen bg-gray-900 text-white p-6">

            <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg">

                <h1 className="text-4xl font-bold mb-6">
                    Edit Blog
                </h1>

                <form
                    onSubmit={handleUpdate}
                    className="space-y-4"
                >

                    <input
                        type="text"
                        name="title"
                        value={updatedBlog.title}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700"
                    />

                    <input
                        type="text"
                        name="image"
                        value={updatedBlog.image}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700"
                    />

                    <input
                        type="text"
                        name="category"
                        value={updatedBlog.category}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700"
                    />

                    <textarea
                        rows="8"
                        name="content"
                        value={updatedBlog.content}
                        onChange={handleChange}
                        className="w-full p-3 rounded bg-gray-700"
                    />

                    <button className="btn btn-warning">
                        Update Blog
                    </button>

                </form>

            </div>

        </div>

    )
}

export default EditBlog