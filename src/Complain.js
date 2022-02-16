import React, {useState} from 'react';
import './Complain.css';
import './circle.css';
import TextField from '@material-ui/core/TextField';
import Select from './Select';
function complain() {
  
    // const [category, myCategory] = useState("Category");
    // const handleChange = (event) => {
    //   myCategory(event.target.value);
    // };
    return (
      <div>
      <div class=" -mt-8 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-10 sm:max-w-xl sm:mx-auto">
          <div class="mt-7 absolute inset-0 border border-red-100 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative bg-white border border-red-100 shadow-lg sm:rounded-3xl sm:px-14">
            <div class="max-w-md mx-auto">
              <div class="divide-y divide-gray-200">
                <div class="py-8 space-y-4 text-gray-700">
                  <h2 className="text-md text-center mt-4">You can give your complain here</h2>
                  <p className="text-center text-sm text-gray-300 pl-20 pr-20">This web is 100% sensitive you can give your complain without delay</p>
                </div>
                <form className="">
                  <p className="mt-2 text-center text-xl font-semibold mb-1">Personal details</p>
                  <p className="mt-2 mb-1">Name:</p>
                  <div className="space-x-4">
                    <input id="name" type="text" placeholder="First name" label="Name" className="border border-red-100 inline-block p-2" />
                    <input id="name" type="text" placeholder="Last name" className="border border-red-100 inline-block p-2" />
                  </div>
                  <p className="mt-2 mb-1">Parents Name:</p>
                  <div className="space-x-4">
                    <input id="name" type="text" placeholder="Any one" label="Name" className="border border-red-100 inline-block p-2" />
                  </div>
                  <p className="mt-2 mb-1">Phone number:</p>
                  <input type="tel" placeholder="Phone number" className="border border-red-100 mt-2 mr-3 p-2" /><br />
                  <div className="-mt-24 ml-56 mb-16">
                    <TextField
                      id="date"
                      label="Date of birth"
                      type="date"
                      InputLabelProps={{ shrink: true, }} />
                  </div>

                  <p className="mb-3">Add your address:</p>
                  <textarea name="address" rows="5" cols="50" placeholder="Residential address" className="border border-red-100 p-3 mt-2" />
                  {/* <select value={category} onChange={handleChange}>
                    <option value="">Rape or attempt to rape</option>
                    <option value="">Acid attack</option>
                    <option value="">Harrassments</option>
                    <option value="">Outraging modestyof women</option>
                    <option value="">Cyber based crime</option>
                    <option value="">Harassments of married women</option>
                    <option value="">Dowry harassments</option>
                  </select> */}
                <p className="mt-2 text-center text-xl font-semibold mb-1">Complain details</p>
                <div className="mb-2">
                  <p className="mt-3 -mb-3">Select an category down:</p>
                    <Select />
                  </div>
                  <p className="mb-3">Short note:</p>
                  <textarea type="text" rows="2" cols="50" placeholder="Just give an short note" className="border border-red-100 mr-3 p-2" /><br />
                  <div className="ml-32">
                    <button className="btn-hover color-7">
                      <div className="icons">
                        <p className="paragoog mb-7">Submit</p>
                        <br />
                        <br />
                      </div>
                    </button>
                  </div>


                </form>


                <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                  <p className="text-center">Thanks for giving your complain here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="loader">
        <div className="women">
        <i class="fas fa-female fa-10x"></i>
        </div>
        <span><i></i></span>
      </div>
      <div class="loader2">
        <div className="women2">
        <i class="fas fa-female fa-10x"></i>
        </div>
        <span><i></i></span>
      </div>
      </div>
      
    );
  }

export default complain;
