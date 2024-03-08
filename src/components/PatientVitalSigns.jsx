import React from 'react'
import CapUp from './CapUp'

export default function PatientVitalSigns() {
  return (
    <div className='h-full'>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 h-full">
        <div className="rounded-lg">
          <h1 className='text-2xl'>No Patient Vital Signs Records Found..</h1>
        </div>
        <div className="rounded-lg hidden sm:block">
          <CapUp uid={'desktop'}/>
        </div>
      </div>
    </div>
  )
}
