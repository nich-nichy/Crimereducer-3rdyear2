import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import GoogleMap2 from './GoogleMap';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';
import Header from './Header';
import Carousel from './Carousel';
import Section from './Section.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import './Main.css';
import chat from '../src/images/Chat.png';
import one from './images/1.jpg';
import sreenivedan from './images/Sreenivedan.jpeg';
import nishath from './images/Nishath4.jpg';
import gokul from './images/Gokul.jpeg';

const Main = () => {
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))
    return (

      // Basic section


        <div>
        <Header />
        <Section />
        <Navbar />
        {user?.result ? (
          <Link to="/chat">
          <div className="sticky">
            <div onLoad="myFunction()">
            <p className="chatpar" id="hide">Hello!... User</p>
            </div>
          <img src={chat} alt="" className="chatim"/>  
          </div>
        </Link>
        ) : (
          <Link to="/auth">
          <div className="sticky">
            <div onLoad="myFunction()">
            <p className="chatpar" id="hide">Hello!... User</p>
            </div>
          <img src={chat} alt="" className="chatim"/>  
          </div>
        </Link>
        )}
          
      <p className="hider">Hider</p>
        <div className="Contents">
          <div className="bg-white text-gray-600 p-28 pt-20 pb-56 body-font">
      <div className="container px-5 py-26 mx-auto">
        <div className="text-center mb-20">
          <div className="parafont">
            

          <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-4">When we are strong enough in our vissions</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Then we are pretty enough to be succesfull in the missions.</p>
          </div>
          <div className="flex mt-6 justify-center">
            <div className="text-10 text-red-500 bg-red-400 inline-flex"></div>
            <i class="fas fa-ellipsis-h fa-2x"></i>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-yellow-300 bg-gray-700 mb-5 flex-shrink-0">
              <i className="fas fa-hands-helping fa-2x"></i>
            </div>
            <div className="flex-grow">
              <div className="parafont">
              <h2 className="text-gray-900 text-lg font-medium mb-3">Trustable</h2>
              <p className="leading-relaxed text-base">We are trustfull enough to give your complain here. We respect every women as concern and we may guarantee your privacy.</p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-yellow-300 bg-gray-700 mb-5 flex-shrink-0">
               <i class="fas fa-trophy fa-2x"></i>
            </div>
            <div className="flex-grow">
            <div className="parafont">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Gentle</h2>
              <p className="leading-relaxed text-base">We provide a high stable data collection where the user can able to access their complaints anytime and anywhere</p>
            </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full text-yellow-300 bg-gray-700 mb-5 flex-shrink-0">
            <i class="fas fa-lock fa-2x"></i>
            </div>
            <div className="flex-grow">
            <div className="parafont">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Privacy</h2>
              <p className="leading-relaxed text-base">We keep your complaints private and you can trust usin every aspects and you can view it anytime and anywhere.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Section on knowables */}


    <div class="bg-gray-700 text-white body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow flex flex-col md:items-start md:text-left ml-24 mb-16 md:mb-0 items-center text-center">
    <h1 className="text-3xl pb-2">Here are some references:</h1>
      <ul class="fa-ul">
      <li className="pl-3"><span class="fa-li fa-lg"><i class="fas fa-female"></i></span>Rape / Attempt to rape</li>
      <li className="pl-3"><span class="fa-li fa-lg"><i class="fas fa-female"></i></span>Acid Attack</li>
      <li className="pl-3"><span class="fa-li fa-lg"><i class="fas fa-female"></i></span>Harassments</li>
      <li className="pl-3"><span class="fa-li fa-lg"><i class="fas fa-female"></i></span>Outraging modesty of women / Molestation </li>
      <li className="pl-3"><span class="fa-li fa-lg"><i class="fas fa-female"></i></span>Cyber crimes against women</li>
      <li className="pl-3"><span class="fa-li fa-lg"><i class="fas fa-female"></i></span>Harassment of married women </li>
      <li className="pl-3"><span class="fa-li fa-lg"><i class="fas fa-female"></i></span>Dowry Harassment</li>
      <li className="pl-3"><span class="fa-li fa-lg"><i class="fas fa-female"></i></span>Rather not say</li>
      </ul>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <img src={one} alt="Reference image" className="shadow-none"/>
    </div>
    </div>
    </div>
    <div className="p-48">
      <Chart />
      </div>
      <div>
      <div className="bg-gray-700 text-white body-font">
   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img src={one} alt="Reference image" className="shadow-none"/>
    </div>

    {/* Reference section */}


    <div className="ml-32">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <h1 className="text-3xl pb-4 -pl-9">We have genuine choice to work with:</h1>
    <p className="pr-2"><i class="fas fa-female pr-2"></i>We are genuine enough to keep your problem simple and we have epic system management which has a large data to store with.</p>
    <p className="pr-2"><i class="fas fa-female pr-2"></i>So push all of your worries away and we will solve your problem as much as possible.</p>
    </div>
    </div>
     </div>
    </div>
    </div>

    {/* Acts section */}


    <div className="p-24">
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <h2 class="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Come along and view the Acts section</h2>
    <div class="md:w-3/5 md:pl-6">
      <p class="leading-relaxed text-base">We have given an acts section to make the user feel comfy to know about the rules and regulations to be known in our country. So feel free to come and know some of the basic women acts.</p>
      <div class="flex md:mt-4 mt-6">
        <button class="inline-flex text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded">Visit</button>
        <a class="text-yellow-500 inline-flex items-center ml-4">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>
</div>    

{/* Complain section */}


    <div class=" bg-gray-700 text-white body-font">
   <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Dont hesitate to complain and give chance for criminals to make more crimes complain here</p>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-red-300 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 ml-5 mt-1 mr-3" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Dont hesitate</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-red-300 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 ml-5 mt-1 mr-3" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Be stronger</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-red-300 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 ml-5 mt-1 mr-3" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">This is your staying power</span>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full">
        <div class="bg-red-300 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-red-500 w-6 h-6 flex-shrink-0 ml-5 mt-1 mr-3" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">You got persistence</span>
        </div>
      </div>
    </div>
    {user?.result ? (
    <Link to="complain">
    <div className="compbtn">
    <button className="items-center bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500 text-white rounded-full border-0 px-8 py-3 text-base -mt-4 md:mt-0 ml-16">Complain</button>
    </div>
    </Link>
    ) : (
    <Link to="auth">
    <div className="compbtn">
    <button className="items-center bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500 text-white rounded-full border-0 px-8 py-3 text-base -mt-4 md:mt-0 ml-16">Complain</button>
    </div>
    </Link>
    )
  }
    </div>
    </div>
    </div>
    <div className="p-10 pl-40 pr-40">


    {/* Google api section */}


    <h2 className="text-center font-semibold">Check here for your instance</h2>
    <p className="text-center">Here is your location just check for instances occurring in your place.</p>
    <div className="border-solid border-8 border-red-400 shadow-2xl"><GoogleMap2 /></div>
    </div>

      {/* Admin section */}


    <div className="bg-gray-700 p-7 pl-20 pr-20">
    <div className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-12">
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-red-50 text-red-500 text-xs font-medium tracking-widest">ADMIN</span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Admin 1 - The head</h2>
        <p className="leading-relaxed mb-8">He can view and furnish the details of the complains provided by the user. And he can able to manage and monitor the complaints as well. After succesfull submissions he will be falicitating all of the resourses and he will validate the things. The entire system of this project is in charge of this person. And from him we are just making things to work.</p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a className="text-red-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>4 views
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>2 chats
          </span>
        </div>
        <a className="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">Sample name</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">Main Admin</span>
          </span>
        </a>
      </div>
      <div className="p-12 md:w-1/2 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded bg-red-50 text-red-500 text-xs font-medium tracking-widest">ADMIN</span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">Admin 2 - Co admin</h2>
        <p className="leading-relaxed mb-8">He is an helper of main admin they both are incharge of monitor and make the complaints efficient they both work on validating complaints and transmitting it to the higher officials. He is also a major contributor of our project. And from them we are just making things to work in a faster as well as in a efficient manner.</p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a className="text-red-500 inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>4 views
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>2 chats
          </span>
        </div>
        <a className="inline-flex items-center">
          <img alt="blog" src="https://dummyimage.com/103x103" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">Sample name</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">Co-Admin</span>
          </span>
        </a>
      </div>
    </div>
  </div>
</div>
    </div>

    {/* Developers section */}

    
    <div className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col"> 
    </div>
    <div className="p-3 -pt-7">
    <h2 className="text-center -mt-4">Developers section</h2>
    <div className="flex flex-wrap p-6">
      <div className="p-4 md:w-1/3">
        <div className="h-3/6 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={gokul} />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Sarvesh Gokul</h2>
        <p className="text-base leading-relaxed mt-2 mb-2">The idea initiator of our project crime reducer. And he gives us idea.</p>
        <span className="inline-flex">
        <p className="mr-4 -ml-4 mt-5 font-semibold">Follow on:</p>
        <div className="mt-4 ml-2">
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="rounded p-1 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        </a>
      </span>
      </div>
            </span> <br />        
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-3/6 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={nishath} />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Mohamed Nishath</h2>
        <p class="text-base leading-relaxed mt-2 mb-2">Developer of this project. Performed front end and back end by gathering ideas.</p>
        <span class="inline-flex">
        <p className="mr-4 -ml-4 mt-5 font-semibold">Follow on:</p>
        <div className="mt-4 ml-2">
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="rounded p-1 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        </a>
      </span>
      </div>
            </span> <br />
      </div>
      <div class="p-4 md:w-1/3">
        <div class="h-3/6 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src={sreenivedan} />
        </div>
        <h2 class="text-xl font-medium title-font text-gray-900 mt-5">Sreenivedan</h2>
        <p class="text-base leading-relaxed mt-2 mb-2">Idea provider of our project. And he helped in giving ideas.</p>
        <span class="inline-flex">
        <p className="mr-4 -ml-4 mt-5 font-semibold">Follow on:</p>
        <div className="mt-4 ml-2">
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="rounded p-1 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
          <svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="rounded p-1 ml-3 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="white" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        </a>
      </span>
      </div>
            </span> <br />
      </div>
  </div>
</div>
</div>
    </div>

      {/* An react carousel */}

    <div className="-mt-96 pl-48 pr-48 -pt-14 pb-10 bg-gray-500">
      <h2 className="text-white text-center text-semibold mt-6 pt-6">Here is our progress of Crime reducer</h2>
    <div className="mt-5">
      {/* <Carousel items={items} active={0}/> */}
    <ImageSlider slides={SliderData}/>
    </div>
    </div>

    {/* Just an simple outro */}


    <div className=" py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div>
          <h2 className="h-7 text-center sm:h-8">Crime reducer</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            <p>We are a trustable product with excellent social mission. We can feel every ones pain and we can fix their problem.</p>
            <ul className="list-disc space-y-2">
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p className="ml-2">
                  Trustworthy believe 
                  <code className="text-sm font-bold text-gray-900"> in us </code> we are incredibles
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p className="ml-2">
                  We respond to you
                  <code className="text-sm font-bold text-gray-900"> within a week</code>
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-6 flex items-center sm:h-7">
                  <svg className="flex-shrink-0 h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <p className="ml-2">We have a great chat community to clear your doubts</p>
              </li>
            </ul>
            <p>We are the master of our fate and greater in our souls</p>
          </div>
          <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
            <p className="text-center">Thanks for visiting our web page... Be persistable</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer />
</div>
    )
  }

export default Main;

