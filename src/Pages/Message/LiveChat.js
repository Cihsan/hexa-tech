import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Messaging from './Messaging';
const LiveChat = () => {


    return (
        <div className='p-12'>
            <h1 className='text-6xl leading-tight text-center pt-20'>Live Chat Here</h1>
            <Messaging/>
            <MessengerCustomerChat 
            pageId="108581785271454" 
            appId="2856731547954143" />
        </div>
    );
};

export default LiveChat;