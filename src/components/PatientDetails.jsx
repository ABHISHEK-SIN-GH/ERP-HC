import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export default function PatientDetails() {
    const navigate = useNavigate(); 
  return (
    <>
        <h1 className='text-2xl font-bold text-center mb-6'>Patient Details</h1>
        
        <form class="max-w-md mx-auto">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" class="block sm:hidden w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Search ID, Phone, Email-ID..." required />
                <input type="search" id="default-search" class="hidden sm:block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Search Patient-ID, Phone, Email Address..." required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Search</button>
            </div>
        </form>

        <div class="bg-gray-100 rounded-xl mt-8">
            <div class="container mx-auto py-8">
                <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div class="col-span-12 xl:col-span-4 2xl:col-span-3">
                        <div class="bg-white shadow rounded-lg p-6">
                            <div class="flex flex-col items-center">
                                <img src="https://randomuser.me/api/portraits/men/94.jpg" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"/>
                                <h1 class="text-xl font-bold">John Doe</h1>
                                <p class="text-gray-700">Patient ID: #123</p>
                                <div class="mt-3 flex flex-wrap gap-4 justify-center">
                                    <a href="#" class="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">Contact</a>
                                    <a href="#" class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Report</a>
                                </div>
                            </div>
                            <hr class="mt-6 border-t border-gray-300"/>
                            <div class="flex flex-col">
                                <span class="text-gray-700 uppercase font-bold tracking-wider my-3">Medical History</span>
                                <hr class="mb-3 border-t border-gray-300"/>
                                <small><b>Allergies:</b> <br />Penicillin</small>
                                <hr class="my-2 border-t border-gray-300"/>
                                <small><b>Pre-existing Conditions:</b> <br />Hypertension, Diabetes</small>
                                <hr class="my-2 border-t border-gray-300"/>
                                <small><b>Medications:</b> <br />Aspirin (81mg), Metformin (500mg)</small>
                                <hr class="my-2 border-t border-gray-300"/>
                                <small><b>Surgical History:</b> <br />Appendectomy (2010)</small>
                                <hr class="my-2 border-t border-gray-300"/>
                                <small><b>Family Medical History:</b> <br />Heart Disease (Father), Breast Cancer (Mother)</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-12 xl:col-span-8 2xl:col-span-9">
                        <div>
                            <div class="sm:hidden">
                                <label for="Tab" class="sr-only">Tab</label>
                                <select id="Tab" class="w-full rounded-md border-gray-200 p-4" onChange={(e)=>{navigate(e.target.value)}}>
                                    <option selected value={'/admin-panel/patient-details/vital-signs'}>Vital Signs</option>
                                    <option value={'/admin-panel/patient-details/treatment-plan'}>Treatment Plan</option>
                                    <option value={'/admin-panel/patient-details/current-medications'}>Current Medications</option>
                                    <option value={'/admin-panel/patient-details/appointment-history'}>Appointment History</option>
                                    <option value={'/admin-panel/patient-details/notes'}>Notes and Comments</option>
                                </select>
                            </div>
                            <div class="hidden sm:block">
                                <div class="border-b border-gray-200">
                                    <nav class="-mb-px flex gap-6">
                                        <NavLink
                                        to={'/admin-panel/patient-details/vital-signs'}
                                        className={({isActive})=>isActive ? "shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600" : "shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"} 
                                        >
                                        Vital Signs
                                        </NavLink>

                                        <NavLink
                                        to={'/admin-panel/patient-details/treatment-plan'}
                                        className={({isActive})=>isActive ? "shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600" : "shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"} 
                                        >
                                        Treatment Plan
                                        </NavLink>

                                        <NavLink
                                        to={'/admin-panel/patient-details/current-medications'}
                                        className={({isActive})=>isActive ? "shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600" : "shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"} 
                                        >
                                        Current Medications
                                        </NavLink>

                                        <NavLink
                                        to={'/admin-panel/patient-details/appointment-history'}
                                        className={({isActive})=>isActive ? "shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600" : "shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"} 
                                        >
                                        Visits History
                                        </NavLink>

                                        <NavLink
                                        to={'/admin-panel/patient-details/notes'}
                                        className={({isActive})=>isActive ? "shrink-0 rounded-t-lg border border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600" : "shrink-0 border border-transparent p-3 text-sm font-medium text-gray-500 hover:text-gray-700"} 
                                        >
                                        Notes
                                        </NavLink>
                                    </nav>
                                </div>
                            </div>
                            <div className='overflow-y-auto bg-white p-6 rounded-lg' style={{height:'600px'}}>
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
