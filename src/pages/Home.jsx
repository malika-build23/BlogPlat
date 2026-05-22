import React from 'react'
import Blogcard from "../components/blogcard"

const Home = () => {
    const blogs = [

        {
            id: 1,
            title: "Learning React",
            description: "Build modern frontend applications using React.",
            image: "https://picsum.photos/400/200?1"
        },

        {
            id: 2,
            title: "Master Tailwind CSS",
            description: "Learn utility-first CSS styling.",
            image: "https://picsum.photos/400/200?2"
        },

        {
            id: 3,
            title: "Using daisyUI",
            description: "Create modern UI components quickly.",
            image: "https://picsum.photos/400/200?3"
        }

    ]
    return (
    <div>   
          <div
              className="hero min-h-screen"
              style={{
                  backgroundImage:
                      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
              }}
          >
              <div className="hero-overlay"></div>
              <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                      <p className="mb-5">
                          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                          quasi. In deleniti eaque aut repudiandae et a id nisi.
                      </p>
                      <button className="btn btn-primary">Get Started</button>
                  </div>
              </div>
          </div>
          <div className="p-10 flex flex-wrap justify-center gap-8">

              {
                  blogs.map((blog) => (

                      <Blogcard
                          key={blog.id}
                          title={blog.title}
                          description={blog.description}
                          image={blog.image}
                      />

                  ))
              }

          </div>
    </div>
  )
}

export default Home