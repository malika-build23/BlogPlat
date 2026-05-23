import React from 'react'
import { Link } from "react-router-dom"

const Navbar = ({ user }) => {
    const getPhotoURL = () => {
        if (!user?.photoURL) return "https://i.pravatar.cc/100";
        if (user.photoURL.includes('googleusercontent')) {
            return `https://images.weserv.nl/?url=${encodeURIComponent(user.photoURL)}`;
        }
        return user.photoURL;
    };
    return (

        <div className="fixed top-0 left-0 right-0 z-[9999] bg-base-100 shadow-md">

            <div className="navbar px-6">

                <div className="navbar-start">
                    <div className="dropdown dropdown-bottom">

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">

                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">

                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />

                            </svg>

                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >

                            <li>
                                <Link to="/">
                                    Homepage
                                </Link>
                            </li>

                            <li>
                                <Link to="/create-blog">
                                    Create Blog
                                </Link>
                            </li>

                            <li>
                                <Link to="/profile">
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>

                        </ul>

                    </div>



                </div>

                <div className="navbar-center">
                    <Link to="/" className="btn btn-ghost text-xl">
                        BlogPlat
                    </Link>
                </div>

                <div className="navbar-end">

                    <button className="btn btn-ghost btn-circle">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">

                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />

                        </svg>

                    </button>
                    {
                        user && (

                            <div className="flex items-center gap-2">

                                <img
                                    src={getPhotoURL()}
                                    alt={user?.displayName || "user"}
                                    className="w-10 h-10 rounded-full object-cover"
                                />

                                <p className="font-semibold">
                                    {user.displayName || "User"}
                                </p>

                            </div>

                        )
                    }

                </div>

            </div>

        </div>
        

    )
}

export default Navbar