import React from 'react'

const Blogcard = (props) => {
    return (

        <div className="hover:scale-105 transition-all duration-300 cursor-pointer">

            <div className="card w-96 bg-black text-white shadow-2xl overflow-hidden">

                {/* Blog Image */}
                <figure>
                    <img
                        src={props.image}
                        alt="blog"
                        className="h-56 w-full object-cover"
                    />
                </figure>

                {/* Card Content */}
                <div className="card-body">

                    {/* Category */}
                    <div className="badge badge-primary">
                        Technology
                    </div>

                    {/* Title */}
                    <h2 className="card-title text-2xl mt-2">
                        {props.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300">
                        {props.description}
                    </p>

                    {/* Footer */}
                    <div className="flex justify-between items-center mt-4">

                        <div className="flex items-center gap-2">

                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src="https://i.pravatar.cc/100" />
                                </div>
                            </div>

                            <span className="text-sm">
                                Malik
                            </span>

                        </div>

                        <button className="btn btn-primary btn-sm">
                            Read More
                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Blogcard