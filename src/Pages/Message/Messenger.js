// import React from "react";
// import chat from "./img/chat.png";
// import group from "./img/group.png";
// // import status from "./img/status.png";
// import setting from "./img/setting.png";
// import addUser from "./img/addUser.png";
// import phone from "./img/phone.png";
// import addContact from "./img/addContact.png";
// import user from "./img/user.png";
// import user2 from "./img/user2.png";
// import user3 from "./img/user3.png";
// import user4 from "./img/user4.png";
// import recentChat from "./img/recentChat.png";
// // import Responsive from "./Responsive.css";

// const Messenger = () => {
//   return (
//     <div>
//       <div className="flex flex-row">
//         <div className="basis-1/20  flex-col space-y-8 icon pt-4">
//           <div className="w-12 h-12 border  rounded-lg drop-shadow-lg ">
//             <img src={chat} alt="" className=" p-2 " />
//           </div>
//           <div className="w-12 h-12 border  rounded-lg drop-shadow-lg">
//             <img src={group} alt="" className=" p-2 " />
//           </div>
//           <div className="w-12 h-12 border  rounded-lg drop-shadow-lg">
//             <img src={phone} alt="" className=" p-2 " />
//           </div>

//           <div className="w-12 h-12 border  rounded-lg drop-shadow-lg mb-12">
//             <img src={addContact} alt="" className=" p-2 " />
//           </div>
//           <div className="w-12 h-12 border  rounded-lg drop-shadow-lg">
//             <img src={addUser} alt="" className=" p-2 " />
//           </div>
//           <div className="w-12 h-12 border  rounded-lg drop-shadow-lg">
//             <img src={setting} alt="" className="  p-2 " />
//           </div>
//         </div>
//         <div className="basis-1/4   h-full bg-[#FAFBFF] pt-4 recentChat">
//           <div className="pl-4 pr-4">
//             <div className="flex justify-between">
//               <div className="uppercase">chats</div>
//               <div className="flex space-x-4">
//                 <img src={addContact} alt="" className=" w-10 h-10 " />
//                 <img src={group} alt="" className=" w-10 h-10 " />
//               </div>
//             </div>
//             <div className="mt-4">
//               <input
//                 type="search"
//                 className="w-full h-12 shadow-xl rounded-xl outline-offset-2 pl-4"
//                 placeholder="Search Contacts"
//               ></input>
//             </div>
//             <div className="flex flex-wrap justify-between mt-2 space-x-2 space-y-3">
//               <div className="flex-col text-center border rounded-lg shadow-xl w-20">
//                 <div className="rounded p-2 avatar online w-20 h-20">
//                   <img src={user} alt="" className=" rounded-lg" />
//                 </div>
//                 <p className="p-2 text-center">Scott Albright</p>
//               </div>
//               <div className="flex-col text-center border rounded-lg shadow-xl w-20">
//                 <div className="rounded p-2 avatar online w-20 h-20">
//                   <img src={user2} alt="" className=" rounded-lg" />
//                 </div>
//                 <p className="p-2">Andhokar</p>
//               </div>
//               <div className="flex-col text-center border rounded-lg shadow-xl w-20">
//                 <div className="rounded p-2 avatar online w-20 h-20">
//                   <img src={user3} alt="" className=" rounded-lg" />
//                 </div>
//                 <p className="p-2">Prodip</p>
//               </div>
//               <div className="flex-col text-center border rounded-lg shadow-xl w-20">
//                 <div className="rounded p-2 avatar online w-20 h-20">
//                   <img src={user4} alt="" className=" rounded-lg" />
//                 </div>
//                 <p className="p-2">Tom</p>
//               </div>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <h1 className="text-2xl font-semibold">Recent Chats</h1>
//               <img src={recentChat} alt="" className="w-10 h-10" />
//             </div>
//             <div className="mt-4 space-y-4 ">
//               <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
//                 <div className="pr-2">
//                   <img src={user} alt="" className="rounded-full w-12 h-12" />
//                 </div>
//                 <div className="pr-2">
//                   <h1 className="font-bold">Scott Albright</h1>
//                   <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
//                 </div>
//                 <div>
//                   <p>5 mins ago </p>
//                 </div>
//               </div>
//               <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
//                 <div className="pr-2">
//                   <img src={user3} alt="" className="rounded-full w-12 h-12" />
//                 </div>
//                 <div className="pr-2">
//                   <h1 className="font-bold">Prodip</h1>
//                   <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
//                 </div>
//                 <div>
//                   <p>2 hrs ago </p>
//                 </div>
//               </div>
//               <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
//                 <div className="pr-2">
//                   <img src={user2} alt="" className="rounded-full w-12 h-12" />
//                 </div>
//                 <div className="pr-2">
//                   <h1 className="font-bold">Andhokar</h1>
//                   <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
//                 </div>
//                 <div>
//                   <p>Yesterday </p>
//                 </div>
//               </div>
//               <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
//                 <div className="pr-2">
//                   <img src={user4} alt="" className="rounded-full w-12 h-12" />
//                 </div>
//                 <div className="pr-2">
//                   <h1 className="font-bold">Tom</h1>
//                   <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
//                 </div>
//                 <div>
//                   <p>Yesterday </p>
//                 </div>
//               </div>
//               <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
//                 <div className="pr-2">
//                   <img src={user} alt="" className="rounded-full w-12 h-12" />
//                 </div>
//                 <div className="pr-2">
//                   <h1 className="font-bold">Scott Albright</h1>
//                   <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
//                 </div>
//                 <div>
//                   <p>Yesterday </p>
//                 </div>
//               </div>
//               <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
//                 <div className="pr-2">
//                   <img src={user2} alt="" className="rounded-full w-12 h-12" />
//                 </div>
//                 <div className="pr-2">
//                   <h1 className="font-bold">Andhokar</h1>
//                   <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
//                 </div>
//                 <div>
//                   <p>Yesterday </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="basis-1/2   mt-4 pl-2 pr-2 chat">
//           <div className="flex justify-between border shadow-xl p-3  rounded-lg">
//             <div className="flex space-x-2">
//               <img src={user} alt="" className=" w-12 h-12 " />
//               <div>
//                 <p>Scott Albright</p>
//                 <p>Online</p>
//               </div>
//             </div>
//             <div className="flex space-x-2">
//               <img src={phone} alt="" className=" w-12 h-12" />
//               <img src={chat} alt="" className=" w-12 h-12" />
//             </div>
//           </div>
//           <div className="mt-8 flex-col justify-between">
//             <div className="flex space-x-4">
//               <img src={user} alt="" className=" w-12 h-12 " />
//               <p>Something will be written</p>
//             </div>
//             <div className="mt-96">
//               <input
//                 type="search"
//                 className="w-full h-12 shadow-xl rounded-3xl pl-4"
//                 placeholder="Enter Message"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="basis-1/5   mt-4 pl-2 pr-2  profile">
//           <div className="flex justify-between border shadow-xl rounded-xl p-2">
//             <h1 className="text-2xl">Profile</h1>
//             <p className="border rounded-full p-2">X</p>
//           </div>
//           <div>
//             <div className="flex justify-center items-center bg-[#F1FBFF] rounded-lg shadow-xl">
//               <div className="flex-col p-4 ">
//                 <div className="avatar online w-20 h-20">
//                   <img src={user} className="" alt=""/>
//                 </div>
//                 <p className="text-center">Scott Albright</p>
//               </div>
//             </div>
//             <div className="p-4">
//               <p className="text-center text-2xl font-bold">About</p>
//               <p className="leading-6 text-justify">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
//                 reprehenderit ab dolor delectus quia. Sint culpa repellat
//                 reiciendis optio soluta deleniti corporis, ut pariatur nam
//                 veritatis accusamus quae distinctio quo. Error dignissimos
//                 tempora sequi cum ex ad? Necessitatibus aut esse quaerat, ut
//                 architecto quis nemo laboriosam enim possimus aspernatur
//                 reprehenderit?
//               </p>
//               <p className="text-xl font-medium mt-2">Phone</p>
//               <p className="text-normal">333 444 555</p>
//               <p className="text-xl font-medium mt-2">Nickname</p>
//               <p className="text-normal">Alberywo</p>
//               <p className="text-xl font-medium mt-2">Email</p>
//               <p className="text-normal">alberywo@gmail.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messenger;






import React from 'react';

const Messenger = () => {
  return (
    <div class="p-5  w-full bg-blue-600">
      <div class=" h-full bg-white overflow-hidden flex flex-col rounded-xl overflow-hidden shadow-xl"  >
        {/* <!-- navbar --> */}
        <div class=" border-b px-5 py-1 flex justify-between items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="-149.1 -248.49675 1292.2 1490.9805">
              <g transform="translate(-15 -11.5)">
                <linearGradient y2="1005.5" x2="512" y1="11.5" x1="512" gradientUnits="userSpaceOnUse" id="a">
                  <stop offset="0" stop-color="#00b2ff" />
                  <stop offset="1" stop-color="#006aff" />
                </linearGradient>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5   mr-4  stroke-blue-500" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </g>
            </svg></span>
          {/* <!-- search --> */}
          <div class=" w-1/2 relative focus-within:shadow-lg" x-data="{ search : false }">
            <div class="flex items-center w-full focus-within:border px-3 py-2  focus-within:border-b-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300 mr-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Search.."
                class=" w-full outline-none placeholder:text-slate-300 font-semibold"></input>
            </div>
          </div>
          {/* <!-- profile --> */}
          <div class="flex space-x-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400 " fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <img src="https://i.ibb.co/WthYKKN/rana1.jpg" class="h-10 w-10 rounded-full" alt="" />

          </div>

        </div>
        {/* <!-- body --> */}
        <div class="h-full flex">
          {/* <!-- sidebar 2 --> */}
          <div class="h-full w-96 bg-slate-50 border-r flex flex-col">
            <div class="h-16 border-b px-4 flex items-center justify-center space-x-4">
              <div class="px-4 py-4 border-b-4 border-b-blue-500">All</div>
              <div class="px-4 py-4 ">Archived</div>
            </div>
            <div class="h-full">

              <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                <img src="https://i.ibb.co/DzxVNxR/293929767-755191202236359-2522477008241228207-n.png"
                  class="h-12 w-12 border-2 border-white rounded-full" alt="" />
                <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Md Emran Hossain
                  </p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                    avaliable...</p>
                </div>
              </div>

              <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                <img src="https://i.ibb.co/4dQ9YRC/285660174-1147310632573281-4290096358933552062-n.jpg"
                  class="h-12 w-12 border-2 border-white rounded-full" alt="" />
                <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Shahriar Fahim
                  </p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
                </div>
              </div>

              <div
                class="px-5 py-4   flex items-center bg-white cursor-pointer border-l-4 border-l-blue-500 border-t border-b">
                <img src="https://i.ibb.co/xj6gsFf/ihsan.jpg"
                  class="h-12 w-12 border-2 border-white rounded-full" alt="" />
                <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Chowdhury Ihsan</p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Ok, Thanks.</p>
                </div>
              </div>

              <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                <img src="https://i.ibb.co/r6rkkdp/Thowhid-black-bg.jpg"
                  class="h-12 w-12 border-2 border-white rounded-full" alt="" />
                <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Md. Thowhiduzzaman</p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">We own hidden
                    lake..</p>
                </div>
              </div>

              <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                <img src="https://i.ibb.co/NFphdj4/sakil.jpg"
                  class="h-12 w-12 border-2 border-white rounded-full" alt="" />
                <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0">Sakil shikdar
                  </p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">is is long ipsum
                    avaliable...</p>
                </div>
              </div>

              <div
                class="px-5 py-4   flex items-center   cursor-pointer border-l-4 border-l-transparent hover:bg-slate-100">
                <img src="https://i.ibb.co/Wxr4sgr/najmus-sakib-vai.jpg "
                  class="h-12 w-12 border-2 border-white rounded-full" alt="" />
                <div class="ml-4">
                  <p x-text="user.name" class="text-md font-semibold text-slate-600 m-0 p-0"> Najmus Sakib
                  </p>
                  <p class="text-xs text-slate-400 -mt-0.5 font-semibold" x-text="user.email">Hello</p>
                </div>
              </div>
            </div>

          </div>
          <div class="w-full h-full flex flex-col">
            <div class="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
              <div class="flex items-center">
                <img class="h-10 w-10 overflow-hidden rounded-full"
                  src="https://i.ibb.co/xj6gsFf/ihsan.jpg"
                  alt="" />
                <p class="font-semibold ml-3 text-slate-600">Chowdhury Ihsan</p>
              </div>
              <div class="flex items-center space-x-5">
                <svg xmlns="http://www.w3.org/2000/svg"
                  class="h-9 bg-slate-50 rounded-full stroke-slate-400 p-2" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-slate-400" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>

              </div>
            </div>
            <div class="h-full px-10 py-4">
              {/* <!-- message container --> */}
              <div class="text-center  my-5">
                <hr class="-mb-3"></hr>
                <span class="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Wednesday, Feburary
                  5</span>
              </div>
              {/* <!-- messages --> */}
              <div class="w-full flex flex-start overflow-y-auto">
                <div class="w-1/2">
                  <div class="flex items-center">
                    <img class="h-5 w-5 overflow-hidden rounded-full"
                      src="https://i.ibb.co/xj6gsFf/ihsan.jpg"
                      alt="" />
                    <p class="font-semibold ml-3 text-sm text-slate-600">Chowdhury Ihsan <span
                      class="text-slate-400 text-xs">3:21 PM</span></p>
                  </div>

                  <div class="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                    <p class=" text-sm text-slate-500">
                      Hey all, <br />
                      There are many variation of passages of Lorem ipsum avaliable, but the jority have alternation in some form , by injected humor, or randomise words which don't look even slightly believable.
                    </p>
                  </div>
                </div>
              </div>
              {/* <!-- me --> */}
              <div class="w-full flex justify-end mt-3">
                <div class="w-1/2 ">
                  <div class="flex items-center justify-end">
                    <p class="font-semibold mr-3 text-sm text-slate-600">Me <span
                      class="text-slate-400 text-xs">3:25 PM</span></p>

                    <img class="h-5 w-5 overflow-hidden rounded-full"
                      src="https://i.ibb.co/WthYKKN/rana1.jpg"
                      alt="" />

                  </div>

                  <div class="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                    <p class=" text-sm text-white">
                      Hey, <br />
                      we are own hidden lake forest which is netural lake are generaly found in mountain.
                    </p>
                  </div>
                </div>
              </div>
              <div class="text-center  my-5">
                <hr class="-mb-3"></hr>
                <span class="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">Today, 2:15 AM
                  5</span>
              </div>
              {/* <!-- messages --> */}
              <div class="w-full flex flex-start">
                <div class="w-1/2">
                  <div class="flex items-center">
                    <img class="h-5 w-5 overflow-hidden rounded-full"
                      src="https://i.ibb.co/xj6gsFf/ihsan.jpg"
                      alt="" />
                    <p class="font-semibold ml-3 text-sm text-slate-600">Chowdhury Ihsan <span
                      class="text-slate-400 text-xs">3:21 PM</span></p>
                  </div>

                  <div class="mt-3  bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                    <p class=" text-sm text-slate-500">
                      ok, Thanks
                    </p>
                  </div>
                </div>
              </div>


            </div>
            <div class="  w-full  px-5 py-3">
              <div
                class="h-12 flex justify-between px-3 items-center border border-transparent bg-slate-50 focus-within:border-slate-300 rounded-lg">
                <input type="text" class="w-full px-3 bg-transparent outline-none placeholder:text-slate-400"
                  placeholder="Type your message"></input>
                <div class="flex items-center space-x-4">

                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>

                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 stroke-slate-300" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;