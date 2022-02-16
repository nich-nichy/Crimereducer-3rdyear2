import React from 'react';
import './Section.css';


function Section() {

    return (
     <div className="text-gray-600 body-font bg-gray-700 ">
     <div className="container px-8 py-40 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
        <i class="fas fa-quote-right fa-3x"></i>
        <div className="leading-relaxed pt-4 text-white">
        <p className="parasec">The chief problem in any community cursed with crime is not the punishment of the criminals, but the preventing of the young from being trained to crime</p>
        </div>
      <span className="inline-block mt-1 ml-4 mb-4">
      <div className="dots">
      <i class="fas fa-ellipsis-h fa-3x"></i>
      </div>
      </span>
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Du bois</h2>
      <p className="text-gray-500">Socialist</p>
            </div>
        </div>
    </div>
    );
    
}

export default Section;