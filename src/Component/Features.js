import React from 'react';
import './Features.css'
import automotions from '../Assets/features/automation.svg'
import calling from '../Assets/features/calling.svg'
import companyManagement from '../Assets/features/company-management.svg'
import contactManagement from '../Assets/features/contact-management.svg'
import dealManagement from '../Assets/features/deal-management.svg'
import emailBroadcast from '../Assets/features/email-broadcast.svg'
import emailsequence from '../Assets/features/email-sequences.svg'
import emailTemplateBuilder from '../Assets/features/email-template-builder.svg'
import forms from '../Assets/features/forms.svg'
import helpDesk from '../Assets/features/help-desk.svg'
import landingPages from '../Assets/features/landing-pages.svg'
import liveChat from '../Assets/features/live-chat.svg'
import milestoneTracking from '../Assets/features/milestone-tracking.svg'
import calender from '../Assets/features/calendar.svg'
import products from '../Assets/features/products.svg'
import proposal from '../Assets/features/proposal.svg'
import pushNotifications from '../Assets/features/push-notifications.svg'
import segmentation from '../Assets/features/segmentation.svg'
import siteMessagine from '../Assets/features/site-messaging.svg'
import smsBroadcast from '../Assets/features/sms-broadcast.svg'
import socialPostScheduling from '../Assets/features/social-posts-scheduling.svg'
import socialSuite from '../Assets/features/social-suite.svg'
import stickyBars from '../Assets/features/sticky-bars.svg'
import taskManagement from '../Assets/features/task-management.svg'
import teamManagement from '../Assets/features/team-management.svg'
import videoTemplates from '../Assets/features/video-templates.svg'
import webAnalytics from '../Assets/features/web-analytics.svg'
import twoLandingPage from '../Assets/features/ab-landing-pages.svg'
import customReporting from '../Assets/features/custom-reporting.svg'
import workflows from '../Assets/features/workflows.svg'


const Features = () => {
    return (
        <div className='my-24 features'>
            <div className='text-center'>
                <h1 className='text-4xl font-semibold mb-5'>Do It All With Hexatech!!</h1>
                <p className='lg:mx-40 text-xl text-slate-400'>Stop paying thousands of dollars to dozens of marketing, sales, and support software. Experience the world's most affordable, unified software. EngageBay's all-in-one CRM software is the most comprehensive solution for your business.</p>
                <p className='text-2xl text-primary'>_______________</p>
            </div>
            <div className='features-container text-slate-700 mx-10 my-16'>
            <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={liveChat} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Live Chat</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={automotions} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Automotions</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={calling} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Calling</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={companyManagement} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Company Management</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={contactManagement} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Contact Management</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={dealManagement} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Deal Management</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={emailBroadcast} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Email Broadcast</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={emailsequence} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Email Sequence</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={emailTemplateBuilder} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Email Template</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={forms} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Forms</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={helpDesk} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Help Desk</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={landingPages} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Landing Pages</h2>
                    </div>
                </div>
                
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={milestoneTracking} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Milestone Tracking</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={calender} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Calender</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={products} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Products</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={proposal} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Proposal</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={pushNotifications} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Push Notifications</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={segmentation} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Segmentation</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={siteMessagine} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Site Messagine</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={smsBroadcast} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">SMS Broadcast</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={socialPostScheduling} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Social Post Scheduling</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={socialSuite} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Social Suite</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={stickyBars} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Sticky Bars</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={taskManagement} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Task Management</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={teamManagement} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Team Management</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={videoTemplates} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Video Templates</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={webAnalytics} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">WebAnalytics</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={twoLandingPage} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">A/B LandingPage</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={customReporting} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Custom Reporting</h2>
                    </div>
                </div>
                <div className="card card-features bg-gray-100">
                    <figure className="px-10 pt-9">
                        <img src={workflows} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="font-semibold">Workflows</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;