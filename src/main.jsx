import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import Dashboard from './pages/Dashboard.jsx'
import IPD from "./pages/ipd/IPD";
import OPD from "./pages/opd/OPD";
import Account from "./pages/accounts/Account";
import Inventory from "./pages/inventory/Inventory";
import HRMS from "./pages/hrms/HRMS";
import POS from "./pages/pos/POS";
import Diagnosis from "./pages/diagnosis/Diagnosis";
import FrontDesk from "./pages/frontdesk/FrontDesk";
import Pharmacy from "./pages/pharmacy/Pharmacy";
import Panel from './components/Panel.jsx'
import PatientRegistration from './components/PatientRegistration.jsx'
import AllPatients from './components/AllPatients.jsx'
import PrintPage from './components/PrintPage.jsx'
import CapUp from './components/CapUp.jsx'
import PatientDetails from './components/PatientDetails.jsx'
import PatientDetails404 from './components/PatientDetails404.jsx'
import PatientVitalSigns from './components/PatientVitalSigns.jsx'
import PatientTreatmentPlan from './components/PatientTreatmentPlan.jsx'
import PatientCurrentMedications from './components/PatientCurrentMedications.jsx'
import PatientAppointmentsHistory from './components/PatientAppointmentsHistory.jsx'
import PatientNotes from './components/PatientNotes.jsx'
const router = createBrowserRouter([
  {
    path:'/cap-up-page',
    element:<CapUp/>
  },
  {
    path:'/print-page',
    element:<PrintPage/>
  },
  {
    path:'/',
    element:<Auth/>
  },
  {
    path:'/auth',
    element:<Auth/>
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  },
  {
    path:'/ipd',
    element:<IPD/>
  },
  {
    path:'/opd',
    element:<OPD/>
  },
  {
    path:'/account',
    element:<Account/>
  },
  {
    path:'/inventory',
    element:<Inventory/>
  },
  {
    path:'/hrms',
    element:<HRMS/>
  },
  {
    path:'/pos',
    element:<POS/>
  },
  {
    path:'/diagnosis',
    element:<Diagnosis/>
  },
  {
    path:'/frontdesk',
    element:<FrontDesk/>
  },
  {
    path:'/pharmacy',
    element:<Pharmacy/>
  },
  {
    path:'/admin-panel',
    element:<Panel/>,
    children:[
      {
        path:'/admin-panel',
        element:<PatientRegistration/>
      },
      {
        path:'/admin-panel/registration',
        element:<PatientRegistration/>
      },
      {
        path:'/admin-panel/all-patients',
        element:<AllPatients/>
      },
      {
        path:'/admin-panel/patient-details',
        element:<PatientDetails/>,
        children:[
          {
            path:'/admin-panel/patient-details',
            element:<PatientVitalSigns/>
          },
          {
            path:'/admin-panel/patient-details/vital-signs',
            element:<PatientVitalSigns/>
          },
          {
            path:'/admin-panel/patient-details/treatment-plan',
            element:<PatientTreatmentPlan/>
          },
          {
            path:'/admin-panel/patient-details/current-medications',
            element:<PatientCurrentMedications/>
          },
          {
            path:'/admin-panel/patient-details/appointment-history',
            element:<PatientAppointmentsHistory/>
          },
          {
            path:'/admin-panel/patient-details/notes',
            element:<PatientNotes/>
          }
        ]
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
