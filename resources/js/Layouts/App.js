import Navbar from '@/Components/Navbar';
import React from 'react';
import { Head } from '@inertiajs/inertia-react';



export default function App({ title, children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title={title}/>
            <Navbar/>
            <main>{children}</main>
        </div>
    );
}
