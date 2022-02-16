import React from 'react';
import './Footer.css';


function Footer() {
    return(
    <footer className="text-gray-600 body-font bg-gray-700">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

        <span className="ml-3 text-2xl">Crime reducer</span>
      </a>
      <p className="mt-1 ml-3 text-sm text-gray-500">An trustable platform to share your emotions</p>
      
      {/* The social media section da */}
      <div className="mt-8 ml-10">
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="rounded p-1 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        </a>
      </span>
      </div>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About contents</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Header</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Mission and vission</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Complain criteria</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Graph on women crime</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">View acts</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Complain</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Map part</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Developers section</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Carousel</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Thanks for visiting</a>
          </li>
          {/* <li>
            <a className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li> */}
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Acts</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Acid attack</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Harassments</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Outraging modesty of women</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Cyber based crime</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Rape or attempt to rape</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Dowry harassments</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Admin contents</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">View</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Modify information</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">About us</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Social media</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Other web's</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Integrations</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Serializations</a>
          </li>
        </nav> 
      </div>
    </div>
  </div>
  <div className="bg-gray-900">
    <div className="container py-4 flex flex-wrap flex-col sm:flex-row">
      <p className="footpara">© 2021 Crime reporter</p>
    </div>
  </div>
</footer>
);
}

export default Footer;