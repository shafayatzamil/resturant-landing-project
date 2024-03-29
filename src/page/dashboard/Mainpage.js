import React from 'react';
import devivalybike from "../../image/asset/food-delivery.png";
const Mainpage = () => {
    return (
        <div className='px-2 grid grid-cols-5 gap-4'>
            {/* grap and order box */}
            <div className='col-span-3'>

                <div className='p-2 bg-base-100 rounded-lg'>
                    <div className='flex gap-3'>
                        <h2>Sales</h2>
                        <button  className='text-sm border px-3 py-1'>This Month</button>
                    </div>
                    <div className='flex'>
                        {/* grap */}
                        <div className='w-3/5'>Grap in array</div>

                        {/* icons */}
                        <div className=''>
                            <div className='flex mb-2'>
                                <div className='bg-[#D8F3E0] rounded-md px-2 py-3 mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#22DD56" className="w-4 h-4">
                                <path fillRule="evenodd" d="M1.72 5.47a.75.75 0 011.06 0L9 11.69l3.756-3.756a.75.75 0 01.985-.066 12.698 12.698 0 014.575 6.832l.308 1.149 2.277-3.943a.75.75 0 111.299.75l-3.182 5.51a.75.75 0 01-1.025.275l-5.511-3.181a.75.75 0 01.75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 00-3.528-5.617l-3.809 3.81a.75.75 0 01-1.06 0L1.72 6.53a.75.75 0 010-1.061z" clipRule="evenodd" />
                                </svg></div>
                                <div>
                                    <h2>$1280</h2>
                                    <p className='text-xs'>Sales Today</p>
                                </div>
                            </div>

                            <div className='flex mb-2'>
                                <div className='bg-[#F3DBD8] rounded-md px-2 py-3 mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#DD4422" className="w-4 h-4">
                                <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" clipRule="evenodd" />
                                </svg></div>
                                <div>
                                    <h2>$45,283</h2>
                                    <p className='text-xs'>Sales Sales This Month</p>
                                </div>
                            </div>

                            <div className='flex mb-2'>
                                <div className='bg-[#D8F3E0] rounded-md px-2 py-3 mr-2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#22DD56" className="w-4 h-4">
                                <path fillRule="evenodd" d="M1.72 5.47a.75.75 0 011.06 0L9 11.69l3.756-3.756a.75.75 0 01.985-.066 12.698 12.698 0 014.575 6.832l.308 1.149 2.277-3.943a.75.75 0 111.299.75l-3.182 5.51a.75.75 0 01-1.025.275l-5.511-3.181a.75.75 0 01.75-1.3l3.943 2.277-.308-1.149a11.194 11.194 0 00-3.528-5.617l-3.809 3.81a.75.75 0 01-1.06 0L1.72 6.53a.75.75 0 010-1.061z" clipRule="evenodd" />
                                </svg></div>
                                <div>
                                    <h2>$3,39,754</h2>
                                    <p className='text-xs'>Sales This Year</p>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>


                {/* orders main page */}
                <div>
                <div className='mt-8'>
            <div className="overflow-x-auto bg-base-100 rounded-lg">
         <h2 className='p-2 text-xl font-semibold'>Orders</h2>
         <div className="navbar bg-base-100 rounded-md">
            <div className="flex-1">
           <div className='p-2 bg-[#D8F3E9] rounded-md mr-2'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
            </svg>
           </div>
           <div>
            <h3 className='font-bold' >64</h3>
            <h5 className='text-xs'>Ongoing</h5>
             </div>
            </div>


            <div className="flex-1">
           <div className='p-2 bg-[#EFF1A7] rounded-md mr-2'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
            </svg>

           </div>
           <div>
            <h3 className='font-bold' >137</h3>
            <h5 className='text-xs'>Delivered</h5>
             </div>
            </div>


            <div className="flex-1">
           <div className='p-2 bg-[#E6E6E6] rounded-md mr-2'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>

           </div>
           <div>
            <h3 className='font-bold' >201</h3>
            <h5 className='text-xs'>Total orders</h5>
             </div>
            </div>
            </div>
         <hr />
  <table className="table table-compact w-full">
    {/* table header */}
      <tr className='text-[#ADADAD]' >
        <th>Restaurant</th> 
        <th>Order</th> 
        <th>Order ID</th> 
        <th>Client name</th> 
        <th>Delivery address</th> 
        <th>Value</th> 
        <th>ETA</th>
        <th>Driver</th>
        <th>Status</th>
      </tr>

      <tr >
        <td className='text-[#ADADAD]'>Sultan dine</td>
        <td>2xkhacci,..</td> 
        <td>ML6528</td> 
        <td>Polash</td> 
        <td>2 College Gate st.</td> 
        <td>$25</td> 
        <td>2:03s</td>
        <td>Kim
           {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
      </svg> */}
      </td>
        <td>Delivered</td>
      </tr>
      <tr>
        <td className='text-[#ADADAD]'>Star kabab</td>
        <td>3xtanduri</td> 
        <td>JK3584</td> 
        <td>Eva</td> 
        <td>15, 23rd ave </td> 
        <td>$40</td> 
        <td>5:13s</td>
        <td>Nick</td>
        <td>In-delivery</td>
      </tr>
      <tr>
        <td className='text-[#ADADAD]'>Chilox food</td>
        <td>2xburger</td> 
        <td>BE5487</td> 
        <td>Badon</td> 
        <td>31 Winston st.</td> 
        <td>$30</td> 
        <td>- </td>
        <td>Adam</td>
        <td>Pending </td>
      </tr>
      <tr>
        <td className='text-[#ADADAD]'>Burger King</td>
        <td>4xburger</td> 
        <td>EZ1276</td> 
        <td>Adam</td> 
        <td>17/562 Basurhat Dock st.</td> 
        <td>$125</td> 
        <td>13:23s</td>
        <td>Jon</td>
        <td>Ordered</td>
      </tr>
      <tr>

        <td className='text-[#ADADAD]'>Yancy Tear</td> 
        <td>2xLargePizza</td> 
        <td>EZ1276</td> 
        <td>Eva</td> 
        <td>15, 23rd ave </td> 
        <td>$40</td>
        <td>5:13s</td>
        <td>Nick</td>
        <td>In-delivery</td>
      </tr>
      
  </table>
</div>
            </div>
                </div>
            </div>



            {/* advatagment box+ driver box */}
            <div className='col-span-2'>
                <div className='bg-slate-600 p-4 rounded-lg text-white mb-4'>
                    <h2 className='text-md mb-3'>Current offer</h2>
                    <p className='text-xs mb-3'>Every purchase of $100 of above you 
                    will be getting a 15% discount.</p>
                    <button className=" px-4 py-2 rounded-md bg-[#21D997] text-white flex items-center gap-1"> 
                  <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg></div>

                    <div>Manage offer! </div></button>
                </div>
                {/* driver */}
                <div className='bg-base-100 px-4 py-2 rounded-lg mb-4' >
                   <div className='flex justify-between p-2'>
                    <h2>Drivers</h2>
                    <button>
                        See All  >
                    </button>
                   </div>
                   <hr />
                   <div className='flex justify-between gap-2 p-2'>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" className='w-8 rounded-full' alt="" />
                    <div>
                        <h2>Monirul Polash</h2>
                        <p className='text-xs'>2 orders being delivered</p>
                    </div>
                    <div>
                        <img src={devivalybike} className='w-8' alt="" />
                    </div>
                   </div>
                   <div className='flex justify-between gap-2 p-2'>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" className='w-8 rounded-full' alt="" />
                    <div>
                        <h2>Monkey D Luffy</h2>
                        <p className='text-xs'>2 orders being delivered</p>
                    </div>
                    <div>
                        <img src={devivalybike} className='w-8' alt="" />
                    </div>
                   </div>
                   <div className='flex justify-between gap-2 p-2'>
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60" className='w-8 rounded-full' alt="" />
                    <div>
                        <h2>Roronoa Zoro</h2>
                        <p className='text-xs'>On a break now</p>
                    </div>
                    <div>
                        <img src={devivalybike} className='w-8' alt="" />
                    </div>
                   </div>
                </div>
                {/* map */}
                <div className='bg-slate-600 rounded-lg' >
                <iframe title='location'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d922.4404865817828!2d91.80406522857352!3d22.36261575979807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8f0f0b0326d%3A0x73e15709d8d8790f!2sYousuf%20Chowdhury%20Building!5e0!3m2!1sen!2sbd!4v1677187280579!5m2!1sen!2sbd"
                    width="320"
                    height="150"
                    style={{ border: "0" ,backgroundColor:"snow" }}
                    allowFullScreen={false}
                    allowtransparency="false"
                    loading="lazy"
                ></iframe>        
                </div>
            </div>
           
        </div>
    );
};

export default Mainpage;