import React, { useState } from "react";
const CreateBlog = ({ blogs, setBlogs }) => {


    const [blog, setBlog] = useState({
        title: "",
        image: "",
        category: "",
        content: "",
    });

    // input change
    const handleChange = (e) => {

        setBlog({
            ...blog,
            [e.target.name]: e.target.value,
        });

    };

    // submit
    const handleSubmit = (e) => {

        e.preventDefault();

        const newBlog = {
            id: Date.now(),
            title: blog.title,
            image: blog.image,
            category: blog.category,
            content: blog.content,
        };

        setBlogs([...blogs, newBlog]);

        console.log(newBlog);

        alert("Blog Created");
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-6">

            <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg">

                <h1 className="text-4xl font-bold mb-6">
                    Create Blog
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* title */}
                    <input
                        type="text"
                        name="title"
                        placeholder="Blog title"
                        className="w-full p-3 rounded bg-gray-700"
                        onChange={handleChange}
                    />

                    {/* image */}
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="w-full p-3 rounded bg-gray-700"
                        onChange={handleChange}
                    />

                    {/* category */}
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        className="w-full p-3 rounded bg-gray-700"
                        onChange={handleChange}
                    />

                    {/* content */}
                    <textarea
                        rows="8"
                        name="content"
                        placeholder="Write blog..."
                        className="w-full p-3 rounded bg-gray-700"
                        onChange={handleChange}
                    />

                    <button className="bg-blue-500 px-6 py-3 rounded">
                        Publish
                    </button>

                </form>

            </div>

        </div>
    );
};

export default CreateBlog;