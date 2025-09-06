import React from "react";
import appwriteService from "../appwrite/config";
import {Link} from 'react-router-dom'

function PostCard({$id , title , featuredImage}) {
    return (
        <div className="border rounded-lg overflow-hidden">
            <Link to={`/post/${$id}`}>
                
                <div className="w-full bg-gray-400 rounded-xl p-4">
                    <div className="w-full justify-center m-4"></div>
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="w-full h-48 object-cover" />
                </div>
                <h2 className="text-xl font-bold">
                    {title}</h2>
            </Link>
        </div>
    )
}

export default PostCard;
export { PostCard };