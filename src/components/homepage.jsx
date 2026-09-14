import React from 'react';
import wedding from '../assets/pexels-rebornfilmes-31562256.jpg';
import birthday from '../assets/pexels-rebornfilmes-33038820.jpg';
import event from '../assets/pexels-mogomotsi-makolo-85583351-33411205.jpg';
import other from '../assets/pexels-alivhi-29226161.jpg';
import group from '../assets/pexels-bertellifotografia-3764314.jpg';

const Hero = () => {
  return (
    <div className='max-h-screen'>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse items-center justify-center pt-15 pb-20">
          <img
            alt="Tailwind CSS hero component"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="w-full max-w-[400px] max-h-[500px] rounded-lg shadow-2xl lg:mr-5 mb-5 transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
          />
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start p-5">
            <h1 className="text-6xl/18 font-bold p-2">
              Capture every Moment, Share the Memories.<br />
              <span className="bg-sky-300/50 px-3 py-1 rounded-md inline-block mt-2">
                In One Private Gallery.
              </span>
            </h1>
            <p className="pr-2 pl-2 pt-5 pb-10 text-m/5">
              AirCam helps you collect every moment and share the memories in one private online album.<br />No app download, no sign-up.
            </p>
            <button className="btn btn-primary text-m pr-8 pl-8 rounded-box transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">Create My Gallery</button>
          </div>
        </div>
      </div>

      {/* Events Title Section */}
      <div className="hero">
        <div className="hero-content flex-col items-center justify-center pt-10 pb-10">
          <h1 className='text-5xl/18 font-bold text-center'>What kind of event are you hosting?</h1>
          <p className='pr-2 pl-2 text-m text-center'>Pick your event type and see exactly how AirCam works for you.</p>
        </div>
      </div>
          
      {/* Event Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-4 px-4 pb-30 pl-5 pr-5 place-items-center max-w-7xl mx-auto">
        {/* Card 1: Weddings */}
        <div className="hover-3d w-full max-w-[512px] aspect-[3/4] cursor-pointer">
          <figure className="w-full h-full rounded-2xl relative shadow-xl overflow-hidden">
            <img src={wedding} alt="Wedding" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
              <h2 className="card-title text-white text-lg md:text-xl">Weddings</h2>
              <p className="text-gray-200 text-xs md:text-sm mt-1 md:mt-2 line-clamp-2">
                A beautiful way to collect memories from your special day.
              </p>
            </div>
          </figure>
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>  

        {/* Card 2: Parties & Birthdays */}
        <div className="hover-3d w-full max-w-[512px] aspect-[3/4] cursor-pointer">
          <figure className="w-full h-full rounded-2xl relative shadow-xl overflow-hidden">
            <img src={birthday} alt="Parties & Birthdays" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
              <h2 className="card-title text-white text-lg md:text-xl">Parties & Birthdays</h2>
              <p className="text-gray-200 text-xs md:text-sm mt-1 md:mt-2 line-clamp-2">
                Gather all the fun snaps from your friends in one place.
              </p>
            </div>
          </figure>
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>

        {/* Card 3: Corporate Events */}
        <div className="hover-3d w-full max-w-[512px] aspect-[3/4] cursor-pointer">
          <figure className="w-full h-full rounded-2xl relative shadow-xl overflow-hidden">
            <img src={event} alt="Corporate Events" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
              <h2 className="card-title text-white text-lg md:text-xl">Corporate Events</h2>
              <p className="text-gray-200 text-xs md:text-sm mt-1 md:mt-2 line-clamp-2">
                Gather photos from attendees effortlessly.
              </p>
            </div>
          </figure>
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>

        {/* Card 4: All Other Events */}
        <div className="hover-3d w-full max-w-[512px] aspect-[3/4] cursor-pointer">
          <figure className="w-full h-full rounded-2xl relative shadow-xl overflow-hidden">
            <img src={other} alt="All Other Events" className="absolute inset-0 w-full h-full object-cover z-0" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 md:p-6">
              <h2 className="card-title text-white text-lg md:text-xl">All Other Events</h2>
              <p className="text-gray-200 text-xs md:text-sm mt-1 md:mt-2 line-clamp-2">
                Perfect for gatherings, retreats, and more.
              </p>
            </div>
          </figure>
          <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>

      {/* Info Section */}
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row items-center justify-center pt-30 pb-20 pr-10 pl-10 mt-10">
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start p-5">
            <h1 className="text-6xl/18 font-bold p-2">
              Capture Photos and Videos.<br/> One Platform. All included.
            </h1>
            <p className="pr-2 pl-2 pt-5 pb-10 text-m/5">
              Every AirCam plan comes with photo and video sharing, at no extra cost.
            </p>
          </div>

          <div className="card bg-base-100 w-384 shadow-xl rounded-xl">
            <div className="card-body items-left text-left m-5">
              <h2 className="card-title font-bold text-xl">Every guest becomes your photographer.</h2>
              <p className='mt-2 text-m'>Guests scan a QR code or tap a link and instantly upload their photos and videos to your private album. Original quality, unlimited uploads, organized exactly how you want.</p>
              <div className="card-actions">
                <a className="link link-primary mt-5">Learn more about photo and video sharing.</a>
              </div>
            </div>
            <figure className="px-10 pb-10">
              <img src={group} alt="Group Photo" className="rounded-xl" />
            </figure>
          </div>
        </div>
      </div>

      {/* Features Title Section */}
      <div className="hero mt-10">
        <div className="hero-content flex-col items-center justify-center pt-10 pb-4">
          <h1 className='text-4xl md:text-5xl font-bold text-center'>Built for the way real events actually work.</h1>
          <p className='pr-2 pl-2 mt-4 text-m text-center text-gray-500 max-w-3xl'>
            The right event photo sharing platform feels effortless for guests and organized for hosts. AirCam is built to be both.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Feature Card 1 */}
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body flex-row gap-4 items-start p-8">
              <div className="text-blue-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
              </div>
              <div className="flex flex-col">
                <h2 className="card-title text-xl mb-2">No app. No sign-up. No friction.</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Guests scan and upload in seconds from any device. No account creation, no download prompt, no confusion. When the moment is happening, the last thing anyone wants is an app install.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body flex-row gap-4 items-start p-8">
              <div className="text-green-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
              </div>
              <div className="flex flex-col">
                <h2 className="card-title text-xl mb-2">No Rush. Upload for months, keep for longer.</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Guests who missed the moment can still add photos weeks later. Your gallery stays live long after the event ends.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body flex-row gap-4 items-start p-8">
              <div className="text-yellow-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" /></svg>
              </div>
              <div className="flex flex-col">
                <h2 className="card-title text-xl mb-2">Galleries for every day, moment, or location</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Create standalone galleries or nest sub-galleries inside a main one. Separate the ceremony from the reception, day one from day three, or the guest uploads from the professional ones.
                </p>
              </div>
            </div>
          </div>

          {/* Feature Card 4: Custom Branding */}
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body flex-row gap-4 items-start p-8">
              <div className="text-pink-500 mt-1">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.813-6.843m-11.628 11.628l-.108-.053m11.736-11.575a1.5 1.5 0 11-2.121-2.121 1.5 1.5 0 012.121 2.121z" /></svg>
              </div>
              <div className="flex flex-col">
                <h2 className="card-title text-xl mb-2">Custom Branding</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Make the gallery your own. Add custom colors, logos, and a personalized welcome message for your guests.
                </p>
                <a href="#" className="text-primary text-sm mt-3 hover:underline">See customization options</a>
              </div>
            </div>
          </div>

          {/* Feature Card 5 */}
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body flex-row gap-4 items-start p-8">
              <div className="text-purple-500 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" /></svg>
              </div>
              <div className="flex flex-col">
                <h2 className="card-title text-xl mb-2">Live photo slideshow at your event</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Display guest uploads in real time on a screen at your venue as they happen.
                </p>
                <a href="#" className="text-primary text-sm mt-3 hover:underline">Learn about Live Photo Slideshow</a>
              </div>
            </div>
          </div>

          {/* Feature Card 7 (Moved from position 6, Digital Guestbook removed) */}
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body flex-row gap-4 items-start p-8">
              <div className="text-orange-400 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" /></svg>
              </div>
              <div className="flex flex-col">
                <h2 className="card-title text-xl mb-2">1-click ZIP download</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Download every photo, video, and voicemail in one click. Everything in one folder, original quality, yours forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="hero mt-10">
        <div className="hero-content flex-col items-center justify-center pt-10 pb-4">
          <h1 className='text-4xl md:text-5xl font-bold text-center max-w-4xl'>
            More thoughtful than a shared album. Easier than piecing tools together.
          </h1>
          <p className='pr-2 pl-2 mt-4 text-m text-center text-base-500 max-w-3xl'>
            AirCam is built for real events, where you need one smooth experience for guests and one organized place for everything afterward.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto shadow-xl my-auto rounded-box">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="bg-base-300 uppercase text-xs">
                <th className="rounded-tl-lg">What Matters</th>
                <th className='text-primary'>AirCam</th>
                <th className="rounded-tr-lg">Generic Alternatives</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {/* row 1 */}
              <tr className="hover">
                <td className="font-semibold text-base">Guest experience</td>
                <td className="text-primary">No app needed, simple QR code or link</td>
                <td className="text-gray-400">Often requires extra steps, accounts, or scattered sharing</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <td className="font-semibold text-base">Storage window</td>
                <td className="text-primary">Up to 14 months</td>
                <td className="text-gray-400">Often shorter or less event-friendly</td>
              </tr>
              {/* row 4 */}
              <tr className="hover">
                <td className="font-semibold text-base">Custom Branding</td>
                <td className="text-primary ">Add custom colors, logos, and a personalized welcome message</td>
                <td className="text-gray-400">Limited or unavailable</td>
              </tr>
              {/* row 6 */}
              <tr className="hover">
                <td className="font-semibold text-base">Event-focused setup</td>
                <td className="text-primary">Designed specifically for weddings, parties, and events</td>
                <td className="text-gray-400">Often adapted from general-purpose tools</td>
              </tr>
              {/* row 7 */}
              <tr className="hover border-b-0">
                <td className="font-semibold text-base rounded-bl-lg">Final download</td>
                <td className="text-primary ">1-click ZIP export</td>
                <td className="text-gray-400 rounded-br-lg">Often more manual or fragmented</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className='pb-50'></div>
      {/* FAQ Section */}
      <div className="card bg-base-100 shadow-md max-w-6xl mx-auto px-8 py-16 mb-20 flex flex-col md:flex-row gap-12 rounded-2xl">
        
        {/* Left Side: Title */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-bold sticky top-8">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Right Side: Accordion Questions */}
        <div className="md:w-2/3 flex flex-col space-y-4">
          
          {/* FAQ Item 1 */}
          {/* 
            Using tabIndex={0} allows the user to click the element to open it. 
            Because it relies on the :focus state, clicking it again (or clicking away) removes focus and closes it.
            group class lets us style child elements based on the parent's state.
          */}
          <div tabIndex={0} className="collapse border-b border-base-300 rounded-none group bg-base-100">
            <div className="collapse-title text-xl font-medium px-0 flex justify-between items-center cursor-pointer">
              Do guests need to download an app?
              
              {/* 
                Icon styling: 
                - Default state: gray chevron pointing down.
                - group-focus: (when the accordion is open) rotates 180deg, background becomes primary purple, text becomes white.
              */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 rounded-full p-1.5 transition-all duration-300 ease-in-out text-gray-600 group-focus:bg-primary group-focus:text-white group-focus:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div className="collapse-content px-0 text-gray-500 transition-all duration-300 ease-in-out"> 
              <p>No. Guests simply scan your QR code or open your event link in their browser to upload photos and videos or leave an audio message.</p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div tabIndex={0} className="collapse border-b border-base-300 rounded-none group bg-base-100">
            <div className="collapse-title text-xl font-medium px-0 flex justify-between items-center cursor-pointer">
              Can I buy AirCam months before my event?
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 rounded-full p-1.5 transition-all duration-300 ease-in-out text-gray-600 group-focus:bg-primary group-focus:text-white group-focus:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="collapse-content px-0 text-gray-500 transition-all duration-300 ease-in-out"> 
              <p>Yes, absolutely. You can set up your gallery early, customize it, and share the link with guests on your invitations. The gallery remains active for up to 14 months depending on your plan.</p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div tabIndex={0} className="collapse border-b border-base-300 rounded-none group bg-base-100">
            <div className="collapse-title text-xl font-medium px-0 flex justify-between items-center cursor-pointer">
              My event already happened. Can I still use AirCam?
               <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 rounded-full p-1.5 transition-all duration-300 ease-in-out text-gray-600 group-focus:bg-primary group-focus:text-white group-focus:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="collapse-content px-0 text-gray-500 transition-all duration-300 ease-in-out"> 
              <p>Yes. AirCam is a great way to collect photos after the fact. Just create a gallery and send the link to everyone who attended so they can upload their pictures and videos.</p>
            </div>
          </div>
         
        {/* FAQ Item 5 (New) */}
          <div tabIndex={0} className="collapse border-b border-base-300 rounded-none group bg-base-100">
            <div className="collapse-title text-xl font-medium px-0 flex justify-between items-center cursor-pointer">
              Are the photos and videos compressed?
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 rounded-full p-1.5 transition-all duration-300 ease-in-out text-gray-600 group-focus:bg-primary group-focus:text-white group-focus:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="collapse-content px-0 text-gray-500 transition-all duration-300 ease-in-out"> 
              <p>No, we preserve the original quality of the photos and videos uploaded by your guests. You can download and print them without worrying about pixelation or loss of detail.</p>
            </div>
          </div>
         
         {/* FAQ Item 6 (New) */}
          <div tabIndex={0} className="collapse border-b border-base-300 rounded-none group bg-base-100">
            <div className="collapse-title text-xl font-medium px-0 flex justify-between items-center cursor-pointer">
              Can I download everything all at once?
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 rounded-full p-1.5 transition-all duration-300 ease-in-out text-gray-600 group-focus:bg-primary group-focus:text-white group-focus:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="collapse-content px-0 text-gray-500 transition-all duration-300 ease-in-out"> 
              <p>Absolutely. With a single click, you can generate and download a ZIP file containing every photo, video, and audio message uploaded to your gallery.</p>
            </div>
          </div>
         
         {/* FAQ Item 7 (New) */}
          <div tabIndex={0} className="collapse border-b border-base-300 rounded-none group bg-base-100">
            <div className="collapse-title text-xl font-medium px-0 flex justify-between items-center cursor-pointer">
              Is there a limit to how many guests can upload?
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 rounded-full p-1.5 transition-all duration-300 ease-in-out text-gray-600 group-focus:bg-primary group-focus:text-white group-focus:rotate-180" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="collapse-content px-0 text-gray-500 transition-all duration-300 ease-in-out"> 
              <p>Not at all. There are no caps on the number of guests who can access your gallery and contribute their memories. Invite as many friends and family members as you want!</p>
            </div>
          </div>

        </div>
      </div>

      <div className='pb-5'></div>
      
    </div>
  );
};

export default Hero;