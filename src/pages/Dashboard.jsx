import React from "react";
import { Link } from "react-router-dom";
import FrontdeskImg from "../assets/dashboard/Frontdesk.png";
import PharmacyImg from "../assets/dashboard/Pharmacy.png";
import OPDImg from "../assets/dashboard/OPD.png";
import IPDImg from "../assets/dashboard/IPD.png";
import AccountsImg from "../assets/dashboard/Account.png";
import InventoryImg from "../assets/dashboard/Inventory.png";
import HRMSImg from "../assets/dashboard/HRMS.png";
import POSImg from "../assets/dashboard/POS.png";
import DiagnosisImg from "../assets/dashboard/Diagnosis.png";

export default function Dashboard() {
  const menuItems = [
    {nav:"IPD",bgColor:'bg-gray-100',bgImg:IPDImg},
    {nav:"Accounts",bgColor:'bg-blue-100',bgImg:AccountsImg},
    {nav:"Inventory",bgColor:'bg-green-100',bgImg:InventoryImg},
    {nav:"HRMS",bgColor:'bg-yellow-100',bgImg:HRMSImg},
    {nav:"POS",bgColor:'bg-red-100',bgImg:POSImg},
    {nav:"Diagnosis",bgColor:'bg-purple-100',bgImg:DiagnosisImg},
    {nav:"Front Desk",bgColor:'bg-indigo-100',bgImg:FrontdeskImg},
    {nav:"Pharmacy",bgColor:'bg-pink-100',bgImg:PharmacyImg},
    {nav:"OPD",bgColor:'bg-teal-100',bgImg:OPDImg},
    {nav:"VAYAM ERP",bgColor:'bg-orange-100',bgImg:null}
  ];

  return (
    <div className="circular-menu">
      {menuItems.map((item, index) => (
        <Link className="menu-item">
            <span className={`h-24 w-24 md:h-40 md:w-40 absolute rounded-full inset-0 translate-x-1.5 translate-y-1.5 ${item.bgColor} transition-transform group-hover:translate-x-0 group-hover:translate-y-0`}></span>
            <span title={item.nav} className="h-24 w-24 md:h-40 md:w-40 relative rounded-full flex border-2 border-current px-8 py-3 text-sm font-extrabold md:font-bold uppercase tracking-widest text-black group-active:text-opacity-75 justify-center items-center">
              {
              (item.bgImg) ? 
              <img src={item.bgImg}/> :
              item.nav
              }
            </span>
        </Link>
      ))}
    </div>
  );
}
