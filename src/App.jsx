import { useState ,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";
import Navbar from "./components/Navbar";
import EditBlog from "./pages/EditBlog";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Home from "./pages/Home"
import CreateBlog from "./pages/CreateBlog"
import Login from "./pages/Login"
// import Profile from "./pages/Profile"
import BlogDetails from "./pages/BlogDetails"

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(auth, (currentUser) => {

        setUser(currentUser);

        console.log(currentUser);

      });

    return () => unsubscribe();

  }, []);




  const [blogs, setBlogs] = useState(() => {

    const storedBlogs = localStorage.getItem("blogs")

    return storedBlogs
      ? JSON.parse(storedBlogs)
      : [
        {
          id: 1,
          title: "Learning React",
          content: "Build modern frontend applications using React.",
          category: "React",
          image: "https://picsum.photos/400/200?1"
        },

        {
          id: 2,
          title: "Master Tailwind CSS",
          content: "Learn utility-first CSS styling.",
          category: "CSS",
          image: "https://picsum.photos/400/200?2"
        },

        {
          id: 3,
          title: "Using daisyUI",
          content: "Create modern UI components quickly.",
          category: "UI",
          image: "https://picsum.photos/400/200?3"
        }

      ]

  })

  const deleteBlog = (id) => {

    const updatedBlogs = blogs.filter(
      (blog) => blog.id !== id
    );

    setBlogs(updatedBlogs);

  };
  useEffect(() => {

    localStorage.setItem(
      "blogs",
      JSON.stringify(blogs)
    )

  }, [blogs])
  return (
    <BrowserRouter>

      <Navbar user={user} />

      <div className="pt-20">

        <Routes>

          <Route
            path="/"
            element={
              <Home
                blogs={blogs}
                deleteBlog={deleteBlog}
              />
            }
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
          <Route
            path="/edit-blog/:id"
            element={
              <EditBlog
                blogs={blogs}
                setBlogs={setBlogs}
              />
            }
          />

          <Route path="/login" element={<Login />} />
{/* 
          <Route path="/profile" element={<Profile />} /> */}

          <Route
            path="/blog/:id"
            element={<BlogDetails blogs={blogs} />}
          />

        </Routes>

      </div>
      <Footer />

    </BrowserRouter>
  );
}

export default App;