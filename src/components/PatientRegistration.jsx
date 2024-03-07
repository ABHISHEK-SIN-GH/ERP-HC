import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientRegistration() {
  var currentTab = 0;
  
  const [print,setPrint] = useState(false);

  const navigate = useNavigate();

  function showTab(n) {
    var x = document.getElementsByClassName("step");
    x[n].style.display = "block";
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == x.length - 1) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n);
  }

  function nextPrev(n) {
    var x = document.getElementsByClassName("step");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
      setPrint(!print);
      currentTab = 0;
      showTab(currentTab);
      resetStepIndicator();
      navigate('/print-page',{state:{data:'form ka data'}});
      return false;
    }
    showTab(currentTab);
  }

  function validateForm() {
    var valid = true;
    document.getElementsByClassName("stepIndicator")[currentTab].className += " finish";
    return valid;
  }

  function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("stepIndicator");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
  }

  function resetStepIndicator(){
    var i, x = document.getElementsByClassName("stepIndicator");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" finish", "");
    }
  }

  useEffect(()=>{
    showTab(currentTab);
  },[]);

  return (
    <>
      <h1 className='text-2xl font-bold text-center mb-6'>New Patient Registration</h1>
      <div
        id="signUpForm"
        class="p-6 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
      >

        <div class="form-header gap-3 mb-4 text-xs text-center hidden md:flex">
          <span class="stepIndicator flex-1 pb-8 relative">Basic Information</span>
          <span class="stepIndicator flex-1 pb-8 relative">Contact Information</span>
          <span class="stepIndicator flex-1 pb-8 relative">Insurance Information</span>
          <span class="stepIndicator flex-1 pb-8 relative">Emergency Contacts</span>
          <span class="stepIndicator flex-1 pb-8 relative">Medical History</span>
          <span class="stepIndicator flex-1 pb-8 relative">Consent Agreement</span>
        </div>

        <div class="step md:mt-9">
          <p class="text-2xl md:hidden text-gray-700 leading-tight text-center mb-5">
            Basic Information
          </p>
          <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Patient's Name" />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Patient's Age" />
            <select id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3">
              <option selected disabled>Choose Patient's Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        <div class="step md:mt-9">
          <p class="text-2xl md:hidden text-gray-700 leading-tight text-center mb-5">
            Contact Information
          </p>
          <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Phone Number" />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Email Address" />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Residential Address" />
          </div>
        </div>

        <div class="step md:mt-9">
          <p class="text-2xl md:hidden text-gray-700 leading-tight text-center mb-5">
            Insurance Information
          </p>
          <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Patient's Insurance Provider" />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Insurance Policy Number" />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Group Number (If Applicable)" />
          </div>
        </div>

        <div class="step md:mt-9">
          <p class="text-2xl md:hidden text-gray-700 leading-tight text-center mb-5">
            Emergency Contacts
          </p>
          <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Emergency Contact Name" />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Relationship to the Patient" />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Emergency Contact Phone Number" />
          </div>
        </div>

        <div class="step md:mt-9">
          <p class="text-2xl md:hidden text-gray-700 leading-tight text-center mb-5">
            Medical History
          </p>
          <div>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Allergies (If Applicable)" />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Medication (If Applicable)" />
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3" placeholder="Enter Surgical History (If Applicable)" />
          </div>
        </div>

        <div class="step md:mt-9">
          <p class="text-2xl md:hidden text-gray-700 leading-tight text-center mb-5">
            Consent Agreement
          </p>
          <div className="my-6">
            <p className="mb-3">I hereby consent to receive medical treatment and agree to the clinic's privacy policy regarding my personal information.</p>
            <div class="flex items-center mb-3">
              <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I consent to receive medical treatment..</label>
            </div>  
            <div class="flex items-center">
              <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> I agree to the clinic's privacy policy.</label>
            </div>  
          </div>
        </div>

        <div class="form-footer flex gap-3">
          <button
            type="button"
            id="prevBtn"
            class="flex-1 focus:outline-none border border-gray-300 py-2 px-5 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-lg"
            onClick={()=>{nextPrev(-1)}}
          >
            Previous
          </button>
          <button
            type="button"
            id="nextBtn"
            class="flex-1 border border-transparent focus:outline-none p-3 rounded-md text-center text-white bg-indigo-600 hover:bg-indigo-700 text-lg"
            onClick={()=>{nextPrev(1)}}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
