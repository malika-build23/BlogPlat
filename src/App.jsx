import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";

import Navbar from "./components/Navbar";
import EditBlog from "./pages/EditBlog";
import Profile from "./pages/Profile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/Login";
import BlogDetails from "./pages/BlogDetails";

function App() {

  // USER STATE
  const [user, setUser] = useState(null);

  // AUTH CHECK
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {

        setUser(currentUser);

        console.log(currentUser);

      }
    );

    return () => unsubscribe();

  }, []);

  // BLOG STATE
  const [blogs, setBlogs] = useState(() => {

    const storedBlogs =
      localStorage.getItem("blogs");

    return storedBlogs
      ? JSON.parse(storedBlogs)
      : [

        {
          id: 1,
          title: "Learning React",
          content:
            "Build modern frontend applications using React.",

          category: "React",

          image:
            "https://picsum.photos/400/200?1",

          author: {
            displayName: "Admin",
            photoURL:
              "https://i.pravatar.cc/100?u=admin",
            uid: "admin123"
          },

          likes: 0,
          dislikes: 0,
          comments: [],
        },

        {
          id: 2,
          title: "Master Tailwind CSS",

          content:
            "Learn utility-first CSS styling.",

          category: "CSS",

          image:
            "https://picsum.photos/400/200?2",

          author: {
            displayName: "Admin",
            photoURL:
              "https://i.pravatar.cc/100?u=admin",
            uid: "admin123"
          },

          likes: 0,
          dislikes: 0,
          comments: [],
        },

        {
          id: 3,
          title: "Using daisyUI",

          content:
            "Create modern UI components quickly.",

          category: "UI",

          image:
            "https://picsum.photos/400/200?3",

          author: {
            displayName: "Admin",
            photoURL:
              "https://i.pravatar.cc/100?u=admin",
            uid: "admin123"
          },

          likes: 0,
          dislikes: 0,
          comments: [],
        }

      ];

  });

  // SAVE TO LOCAL STORAGE
  useEffect(() => {

    localStorage.setItem(
      "blogs",
      JSON.stringify(blogs)
    );

  }, [blogs]);

  // LIKE
  const handleLike = (id) => {

    setBlogs(

      blogs.map((blog) =>

        blog.id === id
          ? {
            ...blog,
            likes: (blog.likes || 0) + 1
          }
          : blog

      )

    );

  };

  // DISLIKE
  const handleDislike = (id) => {

    setBlogs(

      blogs.map((blog) =>

        blog.id === id
          ? {
            ...blog,
            dislikes: (blog.dislikes || 0) + 1
          }
          : blog

      )

    );

  };

  // ADD COMMENT
  const addComment = (
    id,
    commentText,
    user
  ) => {

    setBlogs(

      blogs.map((blog) =>

        blog.id === id
          ? {
            ...blog,

            comments: [

              ...(blog.comments || []),

              {
                text: commentText,
                user: user.displayName
              }

            ]

          }
          : blog

      )

    );

  };

  // DELETE BLOG
  const deleteBlog = (id) => {

    if (!user) {

      alert("Please login first");

      return;
    }

    const blogToDelete =
      blogs.find((blog) => blog.id === id);

    if (!blogToDelete) return;

    if (
      blogToDelete.author?.uid !== user.uid
    ) {

      alert(
        "You can delete only your own blogs"
      );

      return;
    }

    setBlogs(
      blogs.filter(
        (blog) => blog.id !== id
      )
    );

  };

  return (

    <BrowserRouter>

      <Navbar user={user} />

      <div className="pt-16">

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <Home
                blogs={blogs}
                user={user}
                deleteBlog={deleteBlog}
                handleLike={handleLike}
                handleDislike={handleDislike}
                addComment={addComment}
              />
            }
          />

          {/* CREATE BLOG */}
          <Route
            path="/create-blog"
            element={
              <CreateBlog
                blogs={blogs}
                setBlogs={setBlogs}
                user={user}
              />
            }
          />

          {/* EDIT BLOG */}
          <Route
            path="/edit-blog/:id"
            element={
              <EditBlog
                blogs={blogs}
                setBlogs={setBlogs}
              />
            }
          />

          {/* LOGIN */}
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                user={user}
                blogs={blogs}
              />
            }
          />

          {/* BLOG DETAILS */}
          <Route
            path="/blog/:id"
            element={
              <BlogDetails blogs={blogs} />
            }
          />

        </Routes>

      </div>

      <Footer />

    </BrowserRouter>

  );

}

export default App;