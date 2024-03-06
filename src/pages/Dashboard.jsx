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
    { nav: "IPD", bgColor: "bg-gray-100", bgImg: IPDImg, navLink:'/ipd' },
    { nav: "Accounts", bgColor: "bg-blue-100", bgImg: AccountsImg, navLink:'/account' },
    { nav: "Inventory", bgColor: "bg-green-100", bgImg: InventoryImg, navLink:'/inventory' },
    { nav: "HRMS", bgColor: "bg-yellow-100", bgImg: HRMSImg, navLink:'/hrms' },
    { nav: "POS", bgColor: "bg-red-100", bgImg: POSImg, navLink:'/pos' },
    { nav: "Diagnosis", bgColor: "bg-purple-100", bgImg: DiagnosisImg, navLink:'/diagnosis' },
    { nav: "Front Desk", bgColor: "bg-indigo-100", bgImg: FrontdeskImg, navLink:'/frontdesk' },
    { nav: "Pharmacy", bgColor: "bg-pink-100", bgImg: PharmacyImg, navLink:'/pharmacy' },
    { nav: "OPD", bgColor: "bg-teal-100", bgImg: OPDImg, navLink:'/opd'},
    { nav: "VAYAM ERP", bgColor: "bg-orange-100", bgImg: null, navLink:'/admin-panel'},
  ];

  return (
    <div className="circular-menu">
      {menuItems.map((item, index) => (
        <Link className="menu-item" to={item.navLink}>
          <span
            className={`
            h-24 w-24 
            md:h-28 md:w-28 
            lg:h-32 lg:w-32
            2xl:h-40 2xl:w-40 
            absolute rounded-full inset-0 translate-x-1.5 translate-y-1.5 ${item.bgColor} transition-transform group-hover:translate-x-0 group-hover:translate-y-0`}
          ></span>
          <span
            title={item.nav}
            className="
            h-24 w-24 
            md:h-28 md:w-28 
            lg:h-32 lg:w-32
            2xl:h-40 2xl:w-40
            relative rounded-full flex border-2 border-current px-8 py-3 text-sm font-extrabold md:font-bold uppercase tracking-widest text-black group-active:text-opacity-75 justify-center items-center"
          >
            {item.bgImg ? <img src={item.bgImg} /> : item.nav}
          </span>
        </Link>
      ))}
    </div>
  );
}
