import React, { useRef } from 'react'
import Blogcard from "../components/blogcard"

const Home = ({ blogs, deleteBlog }) => {
    const blogSectionRef = useRef(null);

 
    const scrollToBlogs = () => {
        if (blogSectionRef.current) {
            // Calculates absolute top position to bypass any CSS layout traps
            const topPosition = blogSectionRef.current.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: topPosition,
                behavior: 'smooth'
            });
        }

        
    };

    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1779128013308-fa4bf035a4cf?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Where Great Ideas Find Their Voice!!</h1>
                        <p className="mb-5">
                            We don't do clickbait here. Instead, you'll find independent voices, honest expert insights, and unfiltered deep dives into the stuff you actually care about. Find your next favorite writer, learn something new, and see where your curiosity takes you
                        </p>
                        <button onClick={scrollToBlogs} type="button" className="btn btn-dash">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            <div ref={blogSectionRef} className="min-h-screen bg-gray-900 p-6">

                <div className="flex flex-wrap gap-6 justify-center">

                    {blogs.map((blog,index) => (

                        <Blogcard
                            key={`${blog.id}-${index}`}
                            id={blog.id}
                            title={blog.title}
                            image={blog.image}
                            content={blog.content}
                            category={blog.category}
                            deleteBlog={deleteBlog}
                            author={blog.author}
                        />

                    ))}

                </div>

            </div>

        </div>
    )
}

export default Home