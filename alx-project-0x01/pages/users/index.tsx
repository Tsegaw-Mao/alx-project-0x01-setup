// pages/users/index.tsx


// index page for Users related pages
import React from 'react';
import Header from "@/components/layout/Header";


const Users: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-7xl font-thin">Users Page</h1>
            </div>
        </div>
    );
}
export default Users;
