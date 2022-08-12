import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import GoogleDocs from '../GoogleDocs/GoogleDocs';
const LiveChat = () => {
    return (
        <div>
            {/* <h1 className='text-6xl leading-tight text-center pt-20'>Live Chat Here</h1> */}
            <MessengerCustomerChat 
            pageId="108581785271454" 
            appId="2856731547954143" />
            <GoogleDocs></GoogleDocs>
        </div>
    );
};

export default LiveChat;