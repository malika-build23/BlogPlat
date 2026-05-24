import React from "react";

const Profile = ({ user, blogs }) => {

    if (!user) {

        return (

            <div className="min-h-screen flex justify-center items-center">

                <h1 className="text-4xl text-red-500 font-bold">

                    Please Login First

                </h1>

            </div>

        );

    }

    // USER BLOGS
    const userBlogs = blogs.filter(

        (blog) =>

            blog.author?.uid === user.uid

    );
    const getPhotoURL = () => {
        if (!user?.photoURL) return "https://i.pravatar.cc/100";
        if (user.photoURL.includes('googleusercontent')) {
            return `https://images.weserv.nl/?url=${encodeURIComponent(user.photoURL)}`;
        }
        return user.photoURL;
    };

    return (

        <div className="min-h-screen bg-gray-900 text-white p-6">

            <div className="max-w-4xl mx-auto">

                {/* PROFILE CARD */}
                <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">

                    <div className="flex items-center gap-6">

                        <img
                            src={getPhotoURL()}
                            alt={user?.displayName || "user"}
                            className="w-10 h-10 rounded-full object-cover"
                        />

                        <div>

                            <h1 className="text-4xl font-bold">

                                {user.displayName}

                            </h1>

                            <p className="text-gray-400 mt-2">

                                {user.email}

                            </p>

                        </div>

                    </div>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                    <div className="bg-gray-800 p-6 rounded-xl text-center">

                        <h2 className="text-3xl font-bold">

                            {userBlogs.length}

                        </h2>

                        <p className="text-gray-400">

                            Total Blogs

                        </p>

                    </div>

                </div>

                {/* USER BLOGS */}
                <div className="mt-10">

                    <h2 className="text-3xl font-bold mb-6">

                        My Blogs

                    </h2>

                    <div className="space-y-4">

                        {userBlogs.map((blog) => (

                            <div
                                key={blog.id}
                                className="bg-gray-800 p-4 rounded-xl"
                            >

                                <h3 className="text-2xl font-bold">

                                    {blog.title}

                                </h3>

                                <p className="text-gray-400 mt-2">

                                    {blog.content.slice(0, 120)}...

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Profile;