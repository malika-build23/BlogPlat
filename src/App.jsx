import { useState } from "react";
import Navbar from "./components/Navbar";

import Blogcard from "./components/Blogcard";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Home from "./pages/Home"
import CreateBlog from "./pages/CreateBlog"
// import Login from "./pages/Login"
// import Profile from "./pages/Profile"
// import BlogDetails from "./pages/BlogDetails"

function App() {

  const [blogs, setBlogs] = useState([

    {
      id: 1,
      title: "Learning React",
      content: "Build modern frontend applications using React.",
      image: "https://picsum.photos/400/200?1"
    },

    {
      id: 2,
      title: "Master Tailwind CSS",
      content: "Learn utility-first CSS styling.",
      image: "https://picsum.photos/400/200?2"
    },

    {
      id: 3,
      title: "Using daisyUI",
      content: "Create modern UI components quickly.",
      image: "https://picsum.photos/400/200?3"
    }

  ]);
  return (
    <BrowserRouter>

      <Navbar />

      <div className="pt-20">

        <Routes>

          <Route
            path="/"
            element={<Home blogs={blogs} />}
          />

          <Route
            path="/create-blog"
            element={
              <CreateBlog
                blogs={blogs}
                setBlogs={setBlogs}
              />
            }
          />

          {/* <Route path="/login" element={<Login />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/blog/:id" element={<BlogDetails />} /> */}

        </Routes>

      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;