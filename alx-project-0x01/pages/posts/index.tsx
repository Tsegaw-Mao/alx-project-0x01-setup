// pages/posts/index.tsx


// index page for Posts related pages
import React from 'react';
import Header from "@/components/layout/Header";


const Post: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-7xl font-thin">Posts Page</h1>
            </div>
        </div>
    );
}
export default Post;