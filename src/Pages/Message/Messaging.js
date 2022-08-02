import React from 'react';

const Messaging = () => {
    return (
        <div>
            <div className='flex flex-row h-screen'>
                <div className='w-16 bg-red-200'>Primary</div>
                <div className='w-64 bg-green-200'>Submenu</div>
                <div className='flex-auto bg-blue-200'></div>
            </div>
        </div>
    );
};

export default Messaging;




//import {createContext, useContext, useEffect, useState} from "react"
// import { unstable_HistoryRouter } from "react-router-dom";

// const ChatContext = createContext()

// const ChatProvider = ({children}) => {
//     const [user, setUser] = useState();

//     const history = unstable_HistoryRouter();

//     useEffect(()=> {
//         const userInfo = JSON.parse(localStorage.getItem("userInfo"));
//         setUser(userInfo);

//         if(!userInfo){
//             history.pushState('/')
//         }
//     }, [history]);

//     return <ChatContext.Provider value = {{user, setUser}}>{children}</ChatContext.Provider>   
// };

// export const ChatState = () => {
//     return useContext(ChatContext);
// };

// export default ChatProvider;