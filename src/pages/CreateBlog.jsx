import React, { useState } from "react";

const CreateBlog = ({
    blogs,
    setBlogs,
    user
}) => {

    const [blog, setBlog] = useState({
        title: "",
        image: "",
        category: "",
        content: "",
    });

    // INPUT CHANGE
    const handleChange = (e) => {

        setBlog({
            ...blog,
            [e.target.name]: e.target.value,
        });

    };

    // SUBMIT
    const handleSubmit = (e) => {

        e.preventDefault();

        // VALIDATION
        if (
            !blog.title ||
            !blog.image ||
            !blog.category ||
            !blog.content
        ) {

            alert("Please fill all fields");

            return;
        }

        // USER CHECK
        if (!user) {

            alert("Please login first");

            return;
        }

        // NEW BLOG
        const newBlog = {

            id: Date.now(),

            title: blog.title,

            image: blog.image,

            category: blog.category,

            content: blog.content,

            likes: 0,

            dislikes: 0,
            likedBy: [],
            dislikedBy: [],

            comments: [],

            createdAt: new Date().toISOString(),

            author: {

                uid: user.uid,

                displayName:
                    user.displayName || "Anonymous",

                photoURL:
                    user.photoURL ||
                    "https://i.pravatar.cc/100"

            }

        };

        // ADD BLOG
        setBlogs([...blogs, newBlog]);

        // RESET FORM
        setBlog({

            title: "",

            image: "",

            category: "",

            content: "",

        });

        // POPUP
        alert("✅ Blog Created Successfully!");

        // REDIRECT
        setTimeout(() => {

            window.location.href = "/";

        }, 500);

    };

    // LOGIN CHECK UI
    if (!user) {

        return (

            <div className="min-h-screen flex justify-center items-center">

                <h1 className="text-4xl font-bold text-red-500">

                    Please Login First

                </h1>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-gray-900 text-white p-6">

            <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg">

                <h1 className="text-4xl font-bold mb-6">

                    Create Blog

                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    {/* TITLE */}
                    <input
                        type="text"
                        name="title"
                        placeholder="Blog title"
                        className="w-full p-3 rounded bg-gray-700"

                        value={blog.title}

                        onChange={handleChange}
                    />

                    {/* IMAGE */}
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        className="w-full p-3 rounded bg-gray-700"

                        value={blog.image}

                        onChange={handleChange}
                    />

                    {/* CATEGORY */}
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        className="w-full p-3 rounded bg-gray-700"

                        value={blog.category}

                        onChange={handleChange}
                    />

                    {/* CONTENT */}
                    <textarea
                        rows="8"
                        name="content"
                        placeholder="Write blog..."
                        className="w-full p-3 rounded bg-gray-700"

                        value={blog.content}

                        onChange={handleChange}
                    />

                    {/* BUTTON */}
                    <button
                        type="submit"
                        className="bg-blue-500 px-6 py-3 rounded text-white font-semibold hover:bg-blue-600"
                    >

                        Publish

                    </button>

                </form>

            </div>

        </div>

    );

};

export default CreateBlog;