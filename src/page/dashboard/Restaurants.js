import React from 'react';
import MyLocation from './MyLocation';

const Restaurants = () => {
    return (
        <div className='px-2 grid grid-cols-5 gap-4'>
            <div className='col-span-3'>
                {/* card */}
            <div className="card lg:card-side bg-base-100 shadow-xl mb-4">
           {/* card body image and title */}
           <div className='grid grid-cols-2 gap-2'>
           <div>
            <figure ><img src="https://images.unsplash.com/photo-1600891965050-6da6bad77c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" className='rounded-l-lg ' alt="Album"/></figure>
            </div>
            <div>
                <div className='flex justify-between p-2 '>
                <div ><h2 className='font-extrabold'>Avoburger <br /> Mackey Street 7, NY</h2>
                </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#48E3AB" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                </div>
                </div>
                <p className='text-xs px-2 mb-2 text-[#AEAEAE]'>Open 10:00am - 09:00pm, Mon-Sat </p>

                {/* btn */}
                <div className='flex justify-between p-2 gap-2 items-center '>
                    <button className='border-2 p-2 text-xs font-extrabold rounded-md '>
                        Manage restaurant
                    </button>
                    <button className='border-2 p-2 rounded-md '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    </button>
                    <button className='border-2 p-2 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </button>
                </div>
            </div>
           </div>
            </div>









            {/* card 2 */}

            <div className="card lg:card-side bg-base-100 shadow-xl mb-4">
           {/* card body image and title */}
           <div className='grid grid-cols-2 gap-2'>
           <div>
            <figure ><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3R1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" className='rounded-l-lg ' alt="Album"/></figure>
            </div>
            <div>
                <div className='flex justify-between p-2 '>
                <div ><h2 className='font-extrabold'>Avoburger <br /> Mackey Street 7, NY</h2>
                </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#48E3AB" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                </div>
                </div>
                <p className='text-xs px-2 mb-2 text-[#AEAEAE]'>Open 10:00am - 09:00pm, Mon-Sat </p>

                {/* btn */}
                <div className='flex justify-between p-2 gap-2 items-center '>
                    <button className='border-2 p-2 text-xs font-extrabold rounded-md '>
                        Manage restaurant
                    </button>
                    <button className='border-2 p-2 rounded-md '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    </button>
                    <button className='border-2 p-2 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </button>
                </div>
            </div>
           </div>
            </div>

            {/* card 3 */}

            <div className="card lg:card-side bg-base-100 shadow-xl mb-4">
           {/* card body image and title */}
           <div className='grid grid-cols-2 gap-2'>
           <div>
            <figure ><img src="https://images.unsplash.com/photo-1555992457-b8fefdd09069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdHVyYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" className='rounded-l-lg ' alt="Album"/></figure>
            </div>
            <div>
                <div className='flex justify-between p-2 '>
                <div ><h2 className='font-extrabold'>Avoburger <br /> Mackey Street 7, NY</h2>
                </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#48E3AB" className="w-6 h-6">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                </div>
                </div>
                <p className='text-xs px-2 mb-2 text-[#AEAEAE]'>Open 10:00am - 09:00pm, Mon-Sat </p>

                {/* btn */}
                <div className='flex justify-between p-2 gap-2 items-center '>
                    <button className='border-2 p-2 text-xs font-extrabold rounded-md '>
                        Manage restaurant
                    </button>
                    <button className='border-2 p-2 rounded-md '><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    </button>
                    <button className='border-2 p-2 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </button>
                </div>
            </div>
           </div>
            </div>

            {/* CARD    4 */}
           



            </div>
            {/* map page dont touch now */}
            <div className='-mt-12'>
                <iframe title='location'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.4404865817828!2d91.80406522857352!3d22.36261575979807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8f0f0b0326d%3A0x73e15709d8d8790f!2sYousuf%20Chowdhury%20Building!5e0!3m2!1sen!2sbd!4v1677187280579!5m2!1sen!2sbd"
        width="300"
        height="550"
        style={{ border: "0" ,backgroundColor:"snow" }}
        allowfullscreen="true"
        allowtransparency="true"
        loading="lazy"
      ></iframe>        
            </div>
        </div>
    );
};

export default Restaurants;