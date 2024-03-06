import React, { useState } from 'react'
import { useEffect } from 'react';
import PatientRegistration from './PatientRegistration';
import { Link, Outlet } from 'react-router-dom';

const SideBarLink = ({url,name,icon}) => {
    return (
        <>
            <li>
                <Link to={url} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    {icon}
                    <span class="ms-3">{name}</span>
                </Link>
            </li>
        </>
    );
}

export default function Panel() {
    const [ham,setHam] = useState(false);
    return (
        <>

            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" onClick={()=>{setHam(!ham)}} aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="#" class="flex ms-2 md:me-24">
                                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Dreel Technologies</span>
                            </a>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ms-3">
                                <div>
                                <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                    <span class="sr-only">Open user menu</span>
                                    <img class="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <aside id="logo-sidebar" class={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${(!ham)?'-translate-x-full':'translate-none'} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`} aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium" onClick={()=>{setHam(!ham)}}>
                        <SideBarLink url={'/dashboard'} name={'Dashboard'} icon={<i class="fa-solid fa-chart-pie"></i>}/>
                        <SideBarLink url={'/admin-panel/registration'} name={'Registration'}  icon={<i class="fa-solid fa-file-signature"></i>}/>
                        <SideBarLink url={'/admin-panel/all-patients'} name={'All Patients'}  icon={<i class="fa-solid fa-users"></i>}/>
                    </ul>
                </div>
            </aside>

            <div class="p-4 sm:ml-64">
                <div class="pt-4 border-0 md:p-4 md:pt-10 md:border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <Outlet/>
                </div>
            </div>

        </>
    )
}
