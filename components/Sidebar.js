import { useMemo, useState } from "react";
import Logo from "./icons/Logo";
import CollapseIcon from "./icons/CollapseIcon";
import HomeIcon from "./icons/HomeIcon";
import ServicesIcon from "./icons/ServicesIcon";
import YachtsIcon from "./icons/YachtsIcon";
import InvoicesIcon from "./icons/InvoicesIcon";
import LogoutIcon from "./icons/LogoutIcon";
import ProposalIcon from "./icons/ProposalIcon";
import SettingsIcon from "./icons/SettingsIcon";

import { useRouter } from "next/router";
import Link from "next/link";
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';



const menuItems = [
    { id: 1, label: "Home", icon: HomeIcon, link: "/" },
    { id: 2, label: "Proposals", icon: ProposalIcon, link: "/proposals" },
    { id: 3, label: "Yachts", icon: YachtsIcon, link: "/yachts" },
    { id: 4, label: "Services", icon: ServicesIcon, link: "/services" },
    { id: 5, label: "Invoices", icon: InvoicesIcon, link: "/invoices" },
    { id: 6, label: "Settings", icon: SettingsIcon, link: "/settings" }
];

export default function Sidebar(props) {
    const router = useRouter()
    const session = useSession()
    const supabase = useSupabaseClient()

    // Component State
    const [toggleCollapse, setToggleCollapse] = useState(true);
    const [isCollapible, setIsCollapsible] = useState(false);

    // Active Menu Items
    // const router = useRouter();
    // const activeMenu = useMemo(()=>
    //     menuItems.find(menu => menu.link === router.pathname), [router.pathname]
    // ) -- Todo

    // Dynamic Styling Changes
    const width = !toggleCollapse ? "w-80" : "w-20";
    const hidden = !toggleCollapse ? null : "hidden";
    const rotate = !toggleCollapse ? null : "rotate-180";
    // const active = activeMenu.id === menu.id ? "bg-light-lighter" : null; -- Todo

    // Event Handlers
    const onMouseOver = () => {
        setIsCollapsible(!isCollapible);
    }

    const handleClick = () => {
        setToggleCollapse(!toggleCollapse);
    }

    async function signOut() {
        try {
            const { error } = await supabase.auth.signOut()
                .then(() => { router.push('/') })
        } catch (error) {
            alert('There has been an error')
        }
    }

    return (

        <div className={`h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col ${width}`} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver} style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s" }}>
            <div className="flex flex-col">
                <div className=" flex items-center justify-between relative">
                    <div className="flex items-center pl-1 gap-4">
                        <Link href="/">
                            <Logo />
                        </Link>
                            {!toggleCollapse && (
                                <span className="text-md font-medium text-text-light">
                                    Oceanskies
                                </span>
                            )}
                        
                    </div>

                    {isCollapible && (
                        <button className={`p-4 rounded bg-light-lighter absolute right-0 ${rotate}`} onClick={handleClick}>
                            <CollapseIcon />
                        </button>
                    )}
                </div>



                <div className="flex flex-col items-start mt-24">
                    {menuItems.map(({ icon: Icon, ...menu }) => {
                        return (
                            <div className={`menu flex items-center cursor-pointer-hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap`}>
                                <Link href={menu.link}>
                                    <div className="flex py-4 px-3 items-center w-full h-full">
                                        <div style={{ width: '2.6rem' }}>
                                            <Icon />
                                        </div>
                                        {!toggleCollapse && (
                                            <span className="text-md font-medium text-text-light">
                                                {menu.label}
                                            </span>
                                        )}
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="menu flex items-center cursor-pointer-hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap">
                <div className="flex px-3 py-4 items-end w-full h-full">
                    <div style={{ width: '2.6rem' }}>
                        <a onClick={signOut}>
                            <LogoutIcon />
                        </a>
                    </div>
                    {!toggleCollapse && (
                        <a onClick={signOut}>
                            <span className="text-md font-medium text-text-light">
                                Logout
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>


    );
}