import { supabase } from "../lib/supabase";
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Logo from "./icons/Logo";



export default function Auth() {
    const supabase = useSupabaseClient()

    const signIn = (event) => {
        event.preventDefault()
        const email = event.target[0].value
        const password = event.target[1].value

        supabase.auth
            .signInWithPassword({ email, password })
            .catch((err) => {
                alert(err)
            })
    }


    return (
        
            <div className="bg-light rounded py-16 w-4/12 mx-auto my-20 flex flex-col items-center justify-center">
                <Logo size={"large"} />
                <form onSubmit={signIn} className="mt-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="userEmail" className="sr-only">Email address</label>
                        <input className="border-solid border border-gray-400 rounded px-2 py-3" type="email" name="email" placeholder="Email address" required />
                    </div>
                    <div>
                        <label htmlFor="userEmail" className="sr-only">Password</label>
                        <input className="border-solid border border-gray-400 rounded px-2 py-3" type="password" name="password" placeholder="Password" required />
                    </div>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold w-full py-3" type="submit">Sign in</button>
                </form>
                <a href="#" className="place-self-center">Forgot the password?</a>
            </div>
    )
}