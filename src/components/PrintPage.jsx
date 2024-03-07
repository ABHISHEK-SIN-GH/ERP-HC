import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function PrintPage() {
    const {state} = useLocation();
    const navigate = useNavigate();
    return (
    <div id="content">
        <div className="lg:col-span-3 relative border-4 border-indigo-900 hidden" style={{height:'calc(29.7cm - 2px)',width:'calc(21cm - 2px)'}} id='section-to-print'>

            <div className='h-36 bg-indigo-900 flex items-center justify-between'>
                <div className='bg-white h-18 ms-2 rounded-full px-6'>
                    <img src={logo} className='h-full'/>
                </div>
                <div className='h-18 text-white text-end me-4 '>
                    <small className='font-bold mb-4'>LICENSE NO.: DURG0375/NH</small>
                    <h1 className='text-2xl font-bold'>वयम हेल्थ केयर-मल्टीस्पेशलिटी हॉस्पिटल</h1>
                    <h1 className='text-lg'>VAYAM HEALTH CARE-MULTISPECIALITY HOSPITAL</h1>
                    <small className='font-bold'>4/1, Priyadarshini Parisar, Opp. Supela Police Station, Bhilai (C.G.)</small>
                </div>
            </div>

            <h1 className='py-6 text-xl text-center font-bold'>Registration Form</h1>

            <form action="#" className="space-y-4 px-8 lg:px-12">

                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                    />
                    </div>

                    <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                    <label
                        htmlFor="Option1"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 1 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option2"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 2 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option3"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 3 </span>
                    </label>
                    </div>
                </div>

                <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    ></textarea>
                </div>

                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                    />
                    </div>

                    <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                    <label
                        htmlFor="Option1"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 1 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option2"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 2 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option3"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 3 </span>
                    </label>
                    </div>
                </div>
            </form>

            <div className='h-12 w-full bg-indigo-900 absolute bottom-0 text-white flex justify-center items-center'>
                <small className='text-base me-4'><i class="fa-solid fa-globe"></i> <span className='font-bold'>Website:</span> vayamhospital.com</small>
                <small className='text-base me-4'><i class="fa-regular fa-envelope"></i> <span className='font-bold'>Email:</span> vayamhospital@gmail.com</small>
                <small className='text-base me-4'><i class="fa-solid fa-square-phone"></i> 7880082991, 7880082992</small>
            </div>

        </div>
        <div className="p-8 lg:col-span-3 mt-0 md:mt-8 max-w-3xl border-2 border-black mx-auto rounded-xl">

            <h1 className='pb-6 text-xl text-center font-bold'>Registration Form</h1>

            <form action="#" className="space-y-4"  id='printJS-form'>

                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                    />
                    </div>

                    <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                    <label
                        htmlFor="Option1"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 1 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option2"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 2 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option3"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 3 </span>
                    </label>
                    </div>
                </div>

                <div>
                    <label className="sr-only" htmlFor="message">Message</label>

                    <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    ></textarea>
                </div>

                <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                    />
                    </div>

                    <div>
                    <label className="sr-only" htmlFor="phone">Phone</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                    />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <div>
                    <label
                        htmlFor="Option1"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 1 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option2"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 2 </span>
                    </label>
                    </div>

                    <div>
                    <label
                        htmlFor="Option3"
                        className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                        tabIndex="0"
                    >
                        <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />

                        <span className="text-sm"> Option 3 </span>
                    </label>
                    </div>
                </div>
            </form>
        </div>
        <div className='flex justify-center my-8 '>
            <div class="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
                <button
                    class="inline-block border-e px-4 py-2 text-xl font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                    onClick={()=>{window.print()}}
                >
                    Print
                </button>

                <button
                    class="inline-block border-e px-4 py-2 text-xl font-medium text-gray-700 hover:bg-gray-50 focus:relative"
                    onClick={()=>{navigate('/admin-panel')}}
                >
                    Close
                </button>
            </div>
        </div>
    </div>
  )
}
