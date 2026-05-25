import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blogcard = (props) => {

    const author = props.author || {

        displayName: "Anonymous",

        photoURL: "https://i.pravatar.cc/100"

    };

    const getAuthorPhotoURL = () => {

        if (
            author.photoURL?.includes(
                "googleusercontent"
            )
        ) {

            return `https://images.weserv.nl/?url=${encodeURIComponent(author.photoURL)}`;

        }

        return author.photoURL;

    };

    const [comment, setComment] =
        useState("");

    return (

        <div className="hover:scale-105 transition-all duration-300 cursor-pointer">

            <div className="card w-96 bg-black text-white shadow-2xl overflow-hidden">

                {/* IMAGE */}
                <figure>

                    <img
                        src={props.image}
                        alt="blog"
                        className="h-56 w-full object-cover"
                    />

                </figure>

                <div className="card-body">

                    {/* CATEGORY */}
                    <div className="badge badge-primary inline-flex items-center align-middle p-3">

                        {props.category}

                    </div>

                    {/* TITLE */}
                    <h2 className="card-title text-2xl mt-2">

                        {props.title}

                    </h2>

                    {/* CONTENT */}
                    <p className="text-gray-300">

                        {props.content?.slice(0, 120)}...

                    </p>

                    {/* LIKE / DISLIKE */}
                    <div className="flex gap-2 mt-4">

                        <button
                            className="btn btn-outline btn-success"
                            disabled={!props.user}
                            onClick={() =>
                                props.handleLike(props.id)
                            }
                        >

                            👍 {props.likes || 0}

                        </button>

                        <button
                            className="btn btn-outline btn-error"
                            disabled={!props.user}
                            onClick={() =>
                                props.handleDislike(props.id)
                            }
                        >

                            👎 {props.dislikes || 0}

                        </button>

                    </div>

                    {/* LOGIN WARNING */}
                    {
                        !props.user && (

                            <p className="text-red-400 text-sm mt-2">

                                Login to like and comment

                            </p>

                        )
                    }

                    {/* COMMENT INPUT */}
                    <div className="mt-4 flex flex-col gap-2">

                        <input
                            type="text"
                            value={comment}
                            disabled={!props.user}
                            onChange={(e) =>
                                setComment(e.target.value)
                            }
                            placeholder={
                                props.user
                                    ? "Write a comment..."
                                    : "Login to comment"
                            }
                            className="input input-bordered w-full bg-gray-900 text-white"
                        />

                        <button
                            disabled={!props.user}
                            className="btn btn-outline btn-info"
                            onClick={() => {

                                if (!comment.trim())
                                    return;

                                props.addComment(
                                    props.id,
                                    comment,
                                    props.user
                                );

                                setComment("");

                            }}
                        >

                            Post

                        </button>

                    </div>

                    {/* COMMENTS */}
                    <div className="mt-4">

                        {(props.comments || []).map(
                            (c, i) => (

                                <div
                                    key={i}
                                    className="bg-gray-800 p-2 mt-2 rounded"
                                >

                                    <p>

                                        <span className="font-bold text-blue-400">

                                            {c.user || "User"}:

                                        </span>{" "}

                                        {c.text}

                                    </p>

                                </div>

                            )
                        )}

                    </div>

                    {/* FOOTER */}
                    <div className="flex justify-between items-center mt-4">

                        {/* AUTHOR */}
                        <div className="flex items-center gap-2">

                            <div className="avatar">

                                <div className="w-8 rounded-full">

                                    <img
                                        src={getAuthorPhotoURL()}
                                        alt={
                                            author.displayName
                                        }
                                        className="w-10 h-10 rounded-full"
                                    />

                                </div>

                            </div>

                            <span className="text-sm">

                                {author.displayName}

                            </span>

                        </div>

                        {/* READ MORE */}
                        <Link
                            to={`/blog/${props.id}`}
                            className="text-blue-400 hover:underline"
                        >

                            Read More

                        </Link>

                        {/* EDIT / DELETE */}
                        {
                            props.user?.uid ===
                            props.author?.uid && (

                                <div className="flex gap-3">

                                    <button
                                        className="text-gray-400 hover:text-red-500"
                                        onClick={() =>
                                            props.deleteBlog(
                                                props.id
                                            )
                                        }
                                    >

                                        Delete

                                    </button>

                                    <Link
                                        to={`/edit-blog/${props.id}`}
                                        className="text-gray-400 hover:text-blue-400"
                                    >

                                        Edit

                                    </Link>

                                </div>

                            )
                        }

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Blogcard;