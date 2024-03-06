import React, { useEffect, useState } from "react";

export default function PatientRegistration() {
  var currentTab = 0;
  
  const [print,setPrint] = useState(false);

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

  function printPage(){
    console.log('printing..');
    html2canvas(document.getElementById('printable-area')).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");
    });
  }

  useEffect(()=>{
    showTab(currentTab);
  },[]);

  return (
    <div
      id="signUpForm"
      class="p-6 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8"
    >

      {/* <div id="default-modal" tabindex="-1" class={`${(print)?'':'hidden'} overflow-y-auto overflow-x-hidden fixed z-50 flex justify-center items-center w-screen md:inset-0 h-screen max-h-full bg-white`}>
        <div class="relative bg-white rounded-lg dark:bg-gray-700 shadow-2xl">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Patient's Details
                </h3>
                <button type="button" onClick={()=>{setPrint(!print)}} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div id="printable-area" class="p-4 md:p-5 space-y-4 printable" style={{height:'29.7cm',width:'21cm'}}>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>{printPage()}}>Print Form</button>
                <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={()=>{setPrint(!print)}}>Cancel</button>
            </div>
        </div>
      </div> */}

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
  );
}
