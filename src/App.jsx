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
          title: "How Edge Computing is Quietly Rewriting the Internet",
          category: "Technology & Innovation",
          content: "For decades, our relationship with the internet has followed a familiar, centralized pattern. You tap a button on your smartphone, that request travels thousands of miles to a massive, warehouse-sized data center owned by a tech giant, the data center processes the request, and then it beams the answer all the way back to your screen. It happens in the blink of an eye, but as our world becomes increasingly crowded with smart devices, this old model is hitting a hard physical limit: the speed of light. Enter edge computing. Instead of relying entirely on cloud servers thousands of miles away, edge computing pushes data processing closer to the 'edge' of the network—right where the data is actually being generated. This could mean a local micro-data center at the base of a cell tower, a smart router inside your home, or even the onboard computer of a self-driving car. By eliminating the round-trip journey to a distant cloud server, edge computing reduces latency down to near-zero. Consider a modern self-driving car. It generates roughly 4,000 gigabytes of data every single day from its cameras, radar, and LIDAR sensors. If that car had to wait for a cloud server to tell it whether a shadow on the road is a plastic bag or a pedestrian, it would simply be too slow to be safe. Edge computing allows the vehicle to make split-second driving decisions locally, using the cloud only for non-urgent tasks like updating maps or logging maintenance data. The implications stretch far beyond autonomous transport. In smart cities, traffic lights can analyze congestion and adjust their intervals in real-time without crashing if the central network goes down. In healthcare, wearable devices can detect anomalous heart rhythms and alert medical staff instantly, bypassing the delays of standard cloud processing. We aren't completely abandoning the cloud, though. Instead, we are entering a hybrid era. The cloud will remain the heavy lifter for massive data storage and training complex AI models. Meanwhile, the edge will handle the fast, immediate actions. It is a quiet, invisible architecture shift, but it is the exact foundation required to make the next generation of real-time technology actually work.",
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
          author: {
            displayName: "Admin",
            photoURL: "https://i.pravatar.cc/100?u=admin",
            uid: "admin123"
          },
          likes: 0,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          comments: []
        },
        {
          id: 2,
          title: "The Real Science of Chronobiologyn",
          category: "Health & Wellness",
          content: "We live in a culture that treats sleep like a luxury or, worse, a sign of weakness. We are bombarded with 'hustle culture' mantras urging us to wake up at 4:00 AM, crush our goals, and outwork everyone else. But modern science is uncovering a stark reality: fighting your biological clock is a losing battle. At the center of this research is chronobiology—the study of natural internal rhythms in living organisms. Every single tissue and organ in your body operates on an internal 24-hour clock known as a circadian rhythm. This rhythm is dictated by a master clock in your brain called the suprachiasmatic nucleus (SCN), a tiny cluster of about 20,000 neurons that responds directly to environmental light cues. When your circadian rhythm is aligned properly, your body naturally floods your system with cortisol in the morning to wake you up and releases melatonin at night to wind you down. However, our modern lifestyle—flooded with artificial blue light from screens, erratic eating schedules, and indoor living—has thrown these delicate internal clocks into absolute chaos. When you consistently sleep out of sync with your natural chronotype (whether you are a natural 'morning lark' or a 'night owl'), you experience what scientists call 'social jetlag.' The consequences go far beyond feeling groggy or needing an extra espresso. Chronic circadian disruption is linked to systemic inflammation, insulin resistance, weakened immune function, and a significant drop in cognitive performance. So, how do we fix it? It doesn’t require expensive gadgets or strict sleep supplements. The most powerful tool for resetting your master biological clock is entirely free: natural sunlight. Viewing bright daylight within 30 to 60 minutes of waking signals the SCN to start its daytime timer, which perfectly sets up your melatonin production roughly 16 hours later. Conversely, dimming household lights and avoiding bright screens two hours before bed prevents the suppression of that vital sleep hormone. Prioritizing your biological rhythm isn’t about being lazy; it's about optimizing human biology. When you work with your internal clock instead of against it, deep sleep, high energy, and mental clarity become the baseline, not the exception.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGhelj2jCF_FcBdUDVT1TItn-YZzoM5XmFg&s",
          author: {
            displayName: "Admin",
            photoURL: "https://i.pravatar.cc/100?u=admin",
            uid: "admin123"
          },
          likes: 0,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          comments: []
        },
        {
          id: 3,
          title: "The Micro-Habit Movement",
          category: "Lifestyle & Sustainability",
          content: "If you scroll through sustainability hashtags on social media, it’s easy to feel an immediate sense of inadequacy. You're met with images of pristine, hyper-organized pantries filled with matching glass jars, or people proudly showing off an entire year's worth of trash packed neatly into a single mason jar. It looks beautiful, but for the average person juggling a job, family, and a budget, it feels completely unachievable. The dirty secret of the zero-waste movement is that 'perfect' zero-waste is a myth. Striving for perfection usually leads to burnout, causing people to give up entirely. The real, lasting change happens through the micro-habit movement—making small, imperfect, highly sustainable adjustments to our daily routines that compound over time. The best place to start this transition is the kitchen, which is typically the primary source of household waste. Instead of throwing out all your plastic containers to buy trendy glass replacements (which actually creates more waste), true sustainability starts with a paradigm shift: using what you already have. Consider the humble paper towel. Many households go through multiple rolls a week for cleaning spills, wiping counters, and drying hands. By simply cutting up old, worn-out cotton t-shirts or bath towels into small rags and keeping them in a designated basket on your counter, you can eliminate paper towel reliance almost overnight. When they get dirty, you toss them into the washing machine with your normal laundry. It costs zero dollars, keeps textiles out of landfills, and slashes your grocery bill. Another massive area of impact is tackling food waste. Roughly one-third of all food produced globally goes to waste, and in developed nations, the vast majority of that happens at home. Food rotting in landfills releases methane, a greenhouse gas significantly more potent than carbon dioxide. You can combat this with a simple shift in how you organize your refrigerator. Designate a specific shelf or container as the 'Eat First' zone. Whenever you notice produce getting slightly soft, leftovers nearing their expiration, or half-used cans of ingredients, move them to this spot. It removes the decision fatigue of cooking and ensures you use the food you’ve already invested your hard-earned money in. Living a sustainable life isn't about buying new eco-friendly products or transforming your entire lifestyle in a weekend. It's about looking at your daily habits with a bit more mindfulness and realizing that a million people doing low-waste imperfectly will always have a greater impact than a handful of people doing it perfectly.",
          image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
          author: {
            displayName: "Admin",
            photoURL: "https://i.pravatar.cc/100?u=admin",
            uid: "admin123"
          },
          likes: 0,
          dislikes: 0,
          likedBy: [],
          dislikedBy: [],
          comments: []
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