import React from 'react';
import './Features.css'
import automotions from '../Assets/features/automation.png'
import calling from '../Assets/features/calling.png'
import companyManagement from '../Assets/features/company-management.png'
import contactManagement from '../Assets/features/contact-management.png'
import dealManagement from '../Assets/features/deal-management.png'
import emailBroadcast from '../Assets/features/email-broadcast.png'
import emailsequence from '../Assets/features/email-sequences.png'
import emailTemplateBuilder from '../Assets/features/email-template-builder.png'
import forms from '../Assets/features/forms.png'
import helpDesk from '../Assets/features/help-desk.png'
import landingPages from '../Assets/features/landing-pages.png'
import liveChat from '../Assets/features/live-chat.png'
import milestoneTracking from '../Assets/features/milestone-tracking.png'
import calender from '../Assets/features/calendar.png'
import products from '../Assets/features/products.png'
import proposal from '../Assets/features/proposal.png'
import pushNotifications from '../Assets/features/push-notifications.png'
import segmentation from '../Assets/features/segmentation.png'
import siteMessagine from '../Assets/features/site-messaging.png'
import smsBroadcast from '../Assets/features/sms-broadcast.png'
import socialPostScheduling from '../Assets/features/social-posts-scheduling.png'
import socialSuite from '../Assets/features/social-suite.png'
import stickyBars from '../Assets/features/sticky-bars.png'
import taskManagement from '../Assets/features/task-management.png'
import teamManagement from '../Assets/features/team-management.png'
import videoTemplates from '../Assets/features/video-templates.png'
import webAnalytics from '../Assets/features/web-analytics.png'
import twoLandingPage from '../Assets/features/ab-landing-pages.png'
import customReporting from '../Assets/features/custom-reporting.png'
import workflows from '../Assets/features/workflows.png'


const Features = () => {
    return (
        <div className='my-24 features'>
            <div className='text-center'>
                <h1 className='text-4xl md:font-semibold sm:font-normal mb-5'>Do It All With Hexatech!!</h1>
                <p className='lg:mx-40 text-xl text-slate-400'>Stop paying thousands of dollars to dozens of marketing, sales, and support software. Experience the world's most affordable, unified software. EngageBay's all-in-one CRM software is the most comprehensive solution for your business.</p>
                <p className='text-2xl text-primary'>_______________</p>
            </div>
            <div className='features-container text-slate-700 mx-10 my-16'>
            <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img  src={liveChat} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Live Chat</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={automotions} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Automotions</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={calling} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Calling</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={companyManagement} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Company Management</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={contactManagement} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Contact Management</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={dealManagement} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Deal Management</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={emailBroadcast} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Email Broadcast</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={emailsequence} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Email Sequence</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={emailTemplateBuilder} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Email Template</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={forms} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Forms</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={helpDesk} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Help Desk</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={landingPages} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Landing Pages</h4>
                    </div>
                </div>
                
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={milestoneTracking} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Milestone Tracking</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={calender} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Calender</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={products} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Products</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={proposal} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Proposal</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={pushNotifications} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Push Notifications</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={segmentation} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Segmentation</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={siteMessagine} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Site Messagine</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={smsBroadcast} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">SMS Broadcast</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={socialPostScheduling} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Social Post Scheduling</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={socialSuite} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Social Suite</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={stickyBars} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Sticky Bars</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={taskManagement} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Task Management</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={teamManagement} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Team Management</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={videoTemplates} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Video Templates</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={webAnalytics} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">WebAnalytics</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={twoLandingPage} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">A/B LandingPage</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={customReporting} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Custom Reporting</h4>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={workflows} alt="Shoes" className="rounded-xl md:w-3/4" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="md:font-semibold sm:font-normal">Workflows</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;