import React from 'react'
import { useParams } from "react-router-dom"

const BlogDetails = () => {

    const { id } = useParams()

    return (

        <div className="min-h-screen p-10">

            <h1 className="text-5xl font-bold">
                Blog Details Page
            </h1>

            <p className="mt-6 text-2xl">
                Blog ID: {id}
            </p>

        </div>

    )
}

export default BlogDetails
