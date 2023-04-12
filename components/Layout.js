import { Children, useState } from 'react';
import Sidebar from './Sidebar';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

export default function Layout({ children }) {
    const session = useSession();
    const margin = !session ? null : "ml-[80px]";
    
    return (
        <div className='relative'>
            {session && 
            <div className='fixed h-screen flex flex-row justify-start '>
                <Sidebar />
            </div>
            }
            <div className={`p-12 text-white border-1 border-dashed ${margin} h-full`}>
                {children}
            </div>


        </div>
    )
}