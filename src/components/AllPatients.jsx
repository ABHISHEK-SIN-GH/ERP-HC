import React from 'react'

const Record = ({name,age,sex,phone,date}) => {
  return (
    <tr className="odd:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{name}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{age}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{sex}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{phone}</td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700">{date}</td>
      <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
      </td>
    </tr> 
  );
}

export default function AllPatients() {
  return (
    <>
      <h1 className='text-2xl font-bold text-center mb-6'>All Patients Records</h1>
      <div className="overflow-x-auto max-w-screen-sm mx-auto shadow-md mb-8 border border-gray-200 rounded-xl">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Age</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Sex</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Phone</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Date</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <Record name={'Abhishek'} age={'24 years'} sex={'male'} phone={'+91-7999456558'} date={'24/04/2023'}/>
            <Record name={'Abhishek'} age={'24 years'} sex={'male'} phone={'+91-7999456558'} date={'24/04/2023'}/>
            <Record name={'Abhishek'} age={'24 years'} sex={'male'} phone={'+91-7999456558'} date={'24/04/2023'}/>
            <Record name={'Abhishek'} age={'24 years'} sex={'male'} phone={'+91-7999456558'} date={'24/04/2023'}/>
            <Record name={'Abhishek'} age={'24 years'} sex={'male'} phone={'+91-7999456558'} date={'24/04/2023'}/>
          </tbody>
        </table>
      </div>
    </>
  )
}
