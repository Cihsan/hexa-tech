import React from "react";
import chat from "./img/chat.png";
import group from "./img/group.png";
// import status from "./img/status.png";
import setting from "./img/setting.png";
import addUser from "./img/addUser.png";
import phone from "./img/phone.png";
import addContact from "./img/addContact.png";
import user from "./img/user.png";
import user2 from "./img/user2.png";
import user3 from "./img/user3.png";
import user4 from "./img/user4.png";
import recentChat from "./img/recentChat.png";
// import Responsive from "./Responsive.css";

const Messenger = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="basis-1/20  flex-col space-y-8 icon pt-4">
          <div className="w-12 h-12 border  rounded-lg drop-shadow-lg ">
            <img src={chat} alt="" className=" p-2 " />
          </div>
          <div className="w-12 h-12 border  rounded-lg drop-shadow-lg">
            <img src={group} alt="" className=" p-2 " />
          </div>
          <div className="w-12 h-12 border  rounded-lg drop-shadow-lg">
            <img src={phone} alt="" className=" p-2 " />
          </div>

          <div className="w-12 h-12 border  rounded-lg drop-shadow-lg mb-12">
            <img src={addContact} alt="" className=" p-2 " />
          </div>
          <div className="w-12 h-12 border  rounded-lg drop-shadow-lg">
            <img src={addUser} alt="" className=" p-2 " />
          </div>
          <div className="w-12 h-12 border  rounded-lg drop-shadow-lg">
            <img src={setting} alt="" className="  p-2 " />
          </div>
        </div>
        <div className="basis-1/4   h-full bg-[#FAFBFF] pt-4 recentChat">
          <div className="pl-4 pr-4">
            <div className="flex justify-between">
              <div className="uppercase">chats</div>
              <div className="flex space-x-4">
                <img src={addContact} alt="" className=" w-10 h-10 " />
                <img src={group} alt="" className=" w-10 h-10 " />
              </div>
            </div>
            <div className="mt-4">
              <input
                type="search"
                className="w-full h-12 shadow-xl rounded-xl outline-offset-2 pl-4"
                placeholder="Search Contacts"
              ></input>
            </div>
            <div className="flex flex-wrap justify-between mt-2 space-x-2 space-y-3">
              <div className="flex-col text-center border rounded-lg shadow-xl w-20">
                <div className="rounded p-2 avatar online w-20 h-20">
                  <img src={user} alt="" className=" rounded-lg" />
                </div>
                <p className="p-2 text-center">Scott Albright</p>
              </div>
              <div className="flex-col text-center border rounded-lg shadow-xl w-20">
                <div className="rounded p-2 avatar online w-20 h-20">
                  <img src={user2} alt="" className=" rounded-lg" />
                </div>
                <p className="p-2">Andhokar</p>
              </div>
              <div className="flex-col text-center border rounded-lg shadow-xl w-20">
                <div className="rounded p-2 avatar online w-20 h-20">
                  <img src={user3} alt="" className=" rounded-lg" />
                </div>
                <p className="p-2">Prodip</p>
              </div>
              <div className="flex-col text-center border rounded-lg shadow-xl w-20">
                <div className="rounded p-2 avatar online w-20 h-20">
                  <img src={user4} alt="" className=" rounded-lg" />
                </div>
                <p className="p-2">Tom</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-2xl font-semibold">Recent Chats</h1>
              <img src={recentChat} alt="" className="w-10 h-10" />
            </div>
            <div className="mt-4 space-y-4 ">
              <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
                <div className="pr-2">
                  <img src={user} alt="" className="rounded-full w-12 h-12" />
                </div>
                <div className="pr-2">
                  <h1 className="font-bold">Scott Albright</h1>
                  <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <p>5 mins ago </p>
                </div>
              </div>
              <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
                <div className="pr-2">
                  <img src={user3} alt="" className="rounded-full w-12 h-12" />
                </div>
                <div className="pr-2">
                  <h1 className="font-bold">Prodip</h1>
                  <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <p>2 hrs ago </p>
                </div>
              </div>
              <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
                <div className="pr-2">
                  <img src={user2} alt="" className="rounded-full w-12 h-12" />
                </div>
                <div className="pr-2">
                  <h1 className="font-bold">Andhokar</h1>
                  <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <p>Yesterday </p>
                </div>
              </div>
              <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
                <div className="pr-2">
                  <img src={user4} alt="" className="rounded-full w-12 h-12" />
                </div>
                <div className="pr-2">
                  <h1 className="font-bold">Tom</h1>
                  <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <p>Yesterday </p>
                </div>
              </div>
              <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
                <div className="pr-2">
                  <img src={user} alt="" className="rounded-full w-12 h-12" />
                </div>
                <div className="pr-2">
                  <h1 className="font-bold">Scott Albright</h1>
                  <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <p>Yesterday </p>
                </div>
              </div>
              <div className="flex justify-around  p-2 bg-white hover:bg-[#F1F6FF] shadow-lg rounded-lg">
                <div className="pr-2">
                  <img src={user2} alt="" className="rounded-full w-12 h-12" />
                </div>
                <div className="pr-2">
                  <h1 className="font-bold">Andhokar</h1>
                  <p>Lorem, ipsum dolor Lorem ipsum dolor sit amet.</p>
                </div>
                <div>
                  <p>Yesterday </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2   mt-4 pl-2 pr-2 chat">
          <div className="flex justify-between border shadow-xl p-3  rounded-lg">
            <div className="flex space-x-2">
              <img src={user} alt="" className=" w-12 h-12 " />
              <div>
                <p>Scott Albright</p>
                <p>Online</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <img src={phone} alt="" className=" w-12 h-12" />
              <img src={chat} alt="" className=" w-12 h-12" />
            </div>
          </div>
          <div className="mt-8 flex-col justify-between">
            <div className="flex space-x-4">
              <img src={user} alt="" className=" w-12 h-12 " />
              <p>Something will be written</p>
            </div>
            <div className="mt-96">
              <input
                type="search"
                className="w-full h-12 shadow-xl rounded-3xl pl-4"
                placeholder="Enter Message"
              />
            </div>
          </div>
        </div>
        <div className="basis-1/5   mt-4 pl-2 pr-2  profile">
          <div className="flex justify-between border shadow-xl rounded-xl p-2">
            <h1 className="text-2xl">Profile</h1>
            <p className="border rounded-full p-2">X</p>
          </div>
          <div>
            <div className="flex justify-center items-center bg-[#F1FBFF] rounded-lg shadow-xl">
              <div className="flex-col p-4 ">
                <div className="avatar online w-20 h-20">
                  <img src={user} className="" alt=""/>
                </div>
                <p className="text-center">Scott Albright</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-center text-2xl font-bold">About</p>
              <p className="leading-6 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                reprehenderit ab dolor delectus quia. Sint culpa repellat
                reiciendis optio soluta deleniti corporis, ut pariatur nam
                veritatis accusamus quae distinctio quo. Error dignissimos
                tempora sequi cum ex ad? Necessitatibus aut esse quaerat, ut
                architecto quis nemo laboriosam enim possimus aspernatur
                reprehenderit?
              </p>
              <p className="text-xl font-medium mt-2">Phone</p>
              <p className="text-normal">333 444 555</p>
              <p className="text-xl font-medium mt-2">Nickname</p>
              <p className="text-normal">Alberywo</p>
              <p className="text-xl font-medium mt-2">Email</p>
              <p className="text-normal">alberywo@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
