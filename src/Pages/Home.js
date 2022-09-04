import React from 'react';
import Blog from '../Component/Blog';
import Features from '../Component/Features';
import Footer from '../Component/Footer';
import Herobanner from '../Component/Herobanner';
// import FAQ from '../Component/FAQ';
//import Heroservice from '../Component/Heroservice';
// import Info from '../Component/Info';
// import Message from '../Component/Message';
// import Nav from '../Component/Nav';
// import Summary from '../Component/Summary';
// import Testimonial from '../Component/Testimonial';
// import WorkProcess from '../Component/WorkProcess';

const Home = () => {
    return (
        <div>
            {/* <Nav/> */}
            <Herobanner />
            {/* <Heroservice /> */}
            {/* <Summary /> */}
            {/* <Testimonial /> */}
            
            {/* <Info/> */}
            <Features/>
            <Blog/>
            {/* <Message/> */}
            {/* <WorkProcess/> */}
            <Footer />
        </div>
    );
};

export default Home;