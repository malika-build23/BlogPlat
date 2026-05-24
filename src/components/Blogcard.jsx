

import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Blogcard = (props) => {
    const author = props.author || {
        displayName: "Anonymous",
        photoURL: "https://i.pravatar.cc/100"
    };
    
    const getAuthorPhotoURL = () => {
        if (author.photoURL.includes('googleusercontent')) {
            return `https://images.weserv.nl/?url=${encodeURIComponent(author.photoURL)}`;
        }
        return author.photoURL;
    };
    
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    const [replyIndex, setReplyIndex] = useState(null);
    const [replyText, setReplyText] = useState("");

    return (

        <div className="hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="card w-96 bg-black text-white shadow-2xl overflow-hidden">

                {/* Image */}
                <figure>
                    <img
                        src={props.image}
                        alt="blog"
                        className="h-56 w-full object-cover"
                    />
                </figure>

                <div className="card-body">

                    {/* Category */}
                    <div className="badge badge-primary inline-flex items-center align-middle p-3">
                        {props.category}
                    </div>
                    {/* Title */}
                    <h2 className="card-title text-2xl mt-2">
                        {props.title}
                    </h2>

                    {/* content */}
                    <p className="text-gray-300">
                        {props.content.slice(0, 120)}...
                    </p>

                    {/* Likes / Dislikes */}
                    
                    <div className="flex gap-2 mt-4">
                        <button className="btn btn-outline btn-success"
                            disabled={!props.user}
                            onClick={() => setLikes(prev => prev + 1)}
                        >
                            ❤️ {likes}
                        </button>


                        <button className="btn btn-outline"
                            disabled={!props.user}
                            onClick={() => setDislikes(prev => prev + 1)}
                        >
                            ❌ {dislikes}
                        </button>
                    </div>
                    {
                        !props.user && (
                            <p className="text-red-400 text-sm mt-2">
                                Login to like blogs
                            </p>
                        )
                    }

                    {/* Comment Input */}
                    <div className="mt-4 flex flex-col gap-2">
                        <input
                            type="text"
                            value={comment}
                            disabled={!props.user}
                            onChange={(e) => setComment(e.target.value)}
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
                                if (!comment.trim()) return;

                                setComments([
                                    ...comments,
                                    { text: comment, replies: [] }
                                ]);

                                setComment("");
                            }}
                        >
                            Post
                        </button>
                    </div>

                    {/* Comments */}
                    <div className="mt-4">
                        {comments.map((c, i) => (
                            <div key={i} className="bg-gray-800 p-2 mt-2 rounded">

                                {/* Comment text */}
                                <p>{c.text}</p>

                                {/* Reply button */}
                                <button
                                    disabled={!props.user}
                                    className="text-blue-400 text-sm mt-1"
                                    onClick={() => {
                                        setReplyIndex(i);
                                        setReplyText("");
                                    }}
                                >
                                    Reply
                                </button>

                                {/* Replies */}
                                {c.replies.map((r, j) => (
                                    <p key={j} className="ml-4 text-sm text-gray-300">
                                        ↳ {r.text}
                                    </p>
                                ))}

                                {/* Reply input */}
                                {replyIndex === i && (
                                    <div className="mt-2">
                                        <input
                                            disabled={!props.user}
                                            type="text"
                                            value={replyText}
                                            onChange={(e) => setReplyText(e.target.value)}
                                            placeholder="Write a reply..."
                                            className="input input-bordered w-full bg-gray-900 text-white"
                                        />

                                        <button
                                            disabled={!props.user}
                                            className="btn btn-sm btn-primary mt-1"
                                            onClick={() => {
                                                if (!replyText.trim()) return;

                                                const updated = [...comments];
                                                updated[i].replies.push({
                                                    text: replyText
                                                });

                                                setComments(updated);
                                                setReplyText("");
                                                setReplyIndex(null);
                                            }}
                                        >
                                            Send Reply
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img
                                        src={getAuthorPhotoURL()}
                                        alt={author.displayName}
                                        className="w-10 h-10 rounded-full"
                                    />


                                </div>
                            </div>

                            <span className="text-sm">
                                {author.displayName}
                            </span>
                        </div>
                        <Link
                            to={`/blog/${props.id}`}
                            className="text-blue-400 hover:underline"
                        >
                            Read More
                        </Link>

                        {
                            props.user?.uid === props.author?.uid && (
                                <>

                                    <button
                                        className="text-gray-400 hover:text-red-500"
                                        onClick={() => props.deleteBlog(props.id)}
                                    >
                                        Delete
                                    </button>

                                    <Link
                                        to={`/edit-blog/${props.id}`}
                                        className="text-gray-400 hover:text-blue-400"
                                    >
                                        Edit
                                    </Link>

                                </>
                            )
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};


export default Blogcard;