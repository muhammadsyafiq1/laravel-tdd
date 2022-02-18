import React from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';

export default function Navbar() {

    const {auth} = usePage().props;

    return (
        <nav className="bg-white border-b border-gray-100">

            {auth.user ? 
            
            <div className="flex items-center gap-x-4">
                <Link href="/threads/create">Create Thread</Link>
                <Link method="post" href={route('logout')} as="button">
                    Log Out
                </Link>
            </div>
            
            
            :
            
            <div className="flex items-center gap-x-4">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>

            }
 

        </nav>
    );
}
