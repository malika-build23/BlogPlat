import React, { useState } from "react";
const CreateBlog = ({ blogs, setBlogs, user }) => {


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
            id: blogs.length + 1,
            title: blog.title,
            image: blog.image,
            category: blog.category,
            content: blog.content,
            author: {
                displayName: user?.displayName || "Anonymous",
                photoURL: user?.photoURL || "https://i.pravatar.cc/100"
            }
        };

        setBlogs([...blogs, newBlog]);
        setBlog({
            title: "",
            image: "",
            category: "",
            content: "",

        })
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
                        value={blog.title}
                        onChange={handleChange}
                    />

                    {/* image */}
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="w-full p-3 rounded bg-gray-700"
                        
                        value={blog.image}

                        onChange={handleChange}
                    />

                    {/* category */}
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        className="w-full p-3 rounded bg-gray-700"
                        value={blog.category}
                        onChange={handleChange}
                    />

                    {/* content */}
                    <textarea
                        rows="8"
                        name="content"
                        placeholder="Write blog..."
                        className="w-full p-3 rounded bg-gray-700"
                        value={blog.content}
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