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
            "React is one of the most popular JavaScript libraries used for building modern user interfaces. It helps developers create reusable components and manage application state efficiently. React makes frontend development faster and cleaner.",

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

          likedBy: [],
          dislikedBy: [],

          comments: [],
        },

        {
          id: 2,

          title: "Master Tailwind CSS",

          content:
            "Tailwind CSS is a utility-first CSS framework that allows developers to create beautiful responsive designs quickly. Instead of writing custom CSS repeatedly, Tailwind provides ready-made utility classes that speed up UI development.",

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

          likedBy: [],
          dislikedBy: [],

          comments: [],
        },

        {
          id: 3,

          title: "Using daisyUI",

          content:
            "daisyUI is a component library built on top of Tailwind CSS. It provides pre-designed UI components like buttons, cards, navbars, and modals which help developers build stylish applications faster without writing repetitive code.",

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

          likedBy: [],
          dislikedBy: [],

          comments: [],
        }

      ];

  });

  // SAVE BLOGS
  useEffect(() => {

    localStorage.setItem(
      "blogs",
      JSON.stringify(blogs)
    );

  }, [blogs]);

  // LIKE BLOG
  const handleLike = (id) => {

    if (!user) {
      alert("Login first");
      return;
    }

    setBlogs(

      blogs.map((blog) => {

        if (blog.id !== id) return blog;

        const alreadyLiked =
          blog.likedBy?.includes(user.uid);

        const alreadyDisliked =
          blog.dislikedBy?.includes(user.uid);

        // REMOVE LIKE
        if (alreadyLiked) {

          return {

            ...blog,

            likes: blog.likes - 1,

            likedBy: (blog.likedBy || []).filter(
              (uid) => uid !== user.uid
            )

          };

        }

        // REMOVE DISLIKE + ADD LIKE
        if (alreadyDisliked) {

          return {

            ...blog,

            likes: blog.likes + 1,

            dislikes: blog.dislikes - 1,

            likedBy: [
              ...(blog.likedBy || []),
              user.uid
            ],

            dislikedBy: (blog.dislikedBy || []).filter(
              (uid) => uid !== user.uid
            )

          };

        }

        // NORMAL LIKE
        return {

          ...blog,

          likes: blog.likes + 1,

          likedBy: [
            ...(blog.likedBy || []),
            user.uid
          ]

        };

      })

    );

  };

  // DISLIKE BLOG
  const handleDislike = (id) => {

    if (!user) {
      alert("Login first");
      return;
    }

    setBlogs(

      blogs.map((blog) => {

        if (blog.id !== id) return blog;

        const alreadyLiked =
          blog.likedBy?.includes(user.uid);

        const alreadyDisliked =
          blog.dislikedBy?.includes(user.uid);

        // REMOVE DISLIKE
        if (alreadyDisliked) {

          return {

            ...blog,

            dislikes: blog.dislikes - 1,

            dislikedBy: (blog.dislikedBy || []).filter(
              (uid) => uid !== user.uid
            )

          };

        }

        // REMOVE LIKE + ADD DISLIKE
        if (alreadyLiked) {

          return {

            ...blog,

            dislikes: blog.dislikes + 1,

            likes: blog.likes - 1,

            dislikedBy: [
              ...(blog.dislikedBy || []),
              user.uid
            ],

            likedBy: (blog.likedBy || []).filter(
              (uid) => uid !== user.uid
            )

          };

        }

        // NORMAL DISLIKE
        return {

          ...blog,

          dislikes: blog.dislikes + 1,

          dislikedBy: [
            ...(blog.dislikedBy || []),
            user.uid
          ]

        };

      })

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

    // only owner can delete
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

          {/* PROFILE */}
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