import React from 'react';
import App from '@/Layouts/App';
import { Head } from '@inertiajs/inertia-react';

export default function Home(props) {
    return (
        <>
            <Head title="Home" />
            home
        </ >
    ); 
}

Home.layout = page => <App children={page}/>
