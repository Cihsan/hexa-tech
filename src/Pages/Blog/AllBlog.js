import React from 'react';
import { Link } from 'react-router-dom';
import ReadMoreReact from 'read-more-react';

const AllBlog = () => {
    const RanaBlog =
        `A spreadsheet is generally designed to hold numerical data and short text strings. In a spreadsheet program, spaces that hold items of data are called spreadsheet cells. These can be renamed to better reflect the data they hold and can be cross-referenced through row numbers and column letters.
         The most common reason to use spreadsheets is to store and organize data, like revenue, payroll and accounting information. Spreadsheets allow the user to make calculations with this data and to produce graphs and charts. It’s easy to manipulate and analyze data and You can integrate spreadsheets with certain tools.
         Spreadsheets are highly customizable, specially if you know how to use its multitude of formulas and functions. You can create any type of document with a spreadsheet, even a calendar.`
        ;

    const EmranBlog = `
    It helps teams plan, assign, track, report, and manage work and brings teams together for
    everything from agile software development and customer support to start-ups and enterprises.
    How to create a new project in Jira Software? 
    
    Terminology
    Roadmap: Team-level roadmaps useful for planning large pieces of work several months in advance at the Epic level within a single project.
    Backlog: A list of issues describing what your team is going to do on a project and a set of
    activities or issues that the team needs to be resolved within a specific iteration.

    Board: A board displays issues from one or more projects, giving you a flexible way of viewing,
    managing, and reporting on work in progress.

    Sprint: It is a fixed time period where teams complete work from their product backlog.`;

    const FahimBlog = `NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites. What’s more, you can practically forget about choosing between a static site and dynamic thanks to Automatic Static Optimization. With this feature, these terms are kind of merged into one because it allows for building a hybrid application with server-side rendered pages as well as statically generated ones. 
    Next.js is a choice of big names like Netflix or Uber as well as smaller companies that are just starting. In other words, no matter what stage you are right now, you can use NextJS, however, sometimes it might be excessive.
    It’s achievable because NextJS gives its users rich possibilities which means a long list of pros. However, like any other technology.`

    const ThowhiduzzamanBlog = `Next.js supports styling with CSS as well as precompiled Scss and Sass, CSS-in-JS, and styled JS Html. In addition, it is built with TypeScript support and smart bundling. The open-source transpiler, Babel is used to transform and compiling code into JavaScript usable by a browser like chrome, firefox, etc.

    Another tech is Socket.IO, which is a library that enables low-latency, bidirectional and event-based communication between a client and a server. This tech basically works from client to server to client. It is built on top of the WebSocket protocol and provides additional guarantees like a fallback to HTTP long-polling or automatic reconnection.
    
    I have faced many other challenges to use this framework for the first time. It’s really another way to set up routes instead of React. Our team also uses different types of technology to complete the task. I think we will comfort at this level soon.
    `

    const ihsanNasifBlog = `
    The bidirectional channel between the Socket.IO server (Node.js) and the Socket.IO client (browser, Node.js, or any programming language) is established with a WebSocket connection whenever possible and will use HTTP long-polling as a fallback, The Socket.IO codebase is split into two distinct layers.
    the low-level plumbing that we call Engine.IO, the engine inside Socket.IO,
    the high-level API: Socket.IO itself,
    
    Engine.IO handles establishing the low-level connection between the server and the client.
    
    The HTTP long-polling transport consists of successive HTTP requests:
    long-running GET requests, for taking data from the server, short-running POST requests, for sending data to the server, Because of the nature of the transport, successive emits may be joined and sent within the same HTTP request.
    `

    const SakilShikdarBlog = `
    Redux is an open-source JavaScript library used to manage application state containers for JavaScript apps, it is a state management tool, But it does not belong to the component state, It is a container where you can store your whole application data, In a simple way we can say that it is a kind of array.
    `

    return (
        <div>
            <div>
                {/* component  */}
                <div class="overflow-x-hidden drop-shadow-md">
                    <div class="px-6 py-8">
                        <div class="container flex justify-between mx-auto">
                            <div class="w-full lg:w-8/12">
                                <div class="flex items-center justify-between">
                                    <h5 class="text-xl font-bold text-gray-700 md:text-2xl">Blog Post</h5>
                                </div>
                                {/* POst  */}
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">Aug 4,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">
                                            What is spreadsheet? What Is the Purpose of Using a Spreadsheet?</Link>
                                            <p class="mt-2 text-gray-600">A spreadsheet is a computer program that can capture, display and manipulate data arranged in rows and columns. Spreadsheets are one of the most popular tools available with personal computers.

                                                <br /><span className='font-bold text-xl'>Advantages of Spreadsheets</span>
                                                <li>1. Spreadsheets require minimal training.</li>
                                                <li>2. Spreadsheets are customizable.</li>
                                                <li>3.Spreadsheets can be more collaborative than other tools.</li>
                                                <li>4. It’s easy to manipulate and analyze data.</li>
                                                <li>5. You can integrate spreadsheets with certain tools.</li>
                                                <li> 6. Spreadsheets are quick and easy to add into a workflow.
                                                </li>
                                                <li>7. You can visualize data (with caveats).</li>
                                                <span className='font-bold text-xl'>Disadvantages of Spreadsheets</span>
                                                <li>1. Spreadsheets are not user-friendly.</li>
                                                <li>2. Spreadsheets are not secure.</li>
                                                <li>3. It’s hard to tell who edited the spreadsheet.</li>
                                                <li>4. Spreadsheets are difficult to scale.</li>
                                                <li>5. Spreadsheets are prone to errors.</li>
                                                <li>6. Reporting is painful.</li>
                                                <li>7. Visualizing data is difficult.</li>
                                            </p>
                        
                                            <ReadMoreReact text={RanaBlog} readMoreText={"Read more...▼"}/>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/WthYKKN/rana1.jpg"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h5 class="font-bold text-gray-700 hover:underline">Md. Rana Hossain</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">Aug 4,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">
                                            What is Jira Software? Why does it need? </Link>
                                            <p class="mt-2 text-gray-600">
                                                We have faced many problems such as planning, tools(Jira/Trello) at the beginning of our
                                                project. I have chosen to solve the problem of Jira Software and explored about it. I have shared
                                                about Jira Software below:<br />
                                                JIRA is a project management tool developed by an Australian based software company known
                                                as Atlassian Corporation Plc.<br /><span className='font-bold text-xl'>How to create a new project in Jira Software?</span>
                                                <li>1. Projects - Create project in the navigation.</li>
                                                <li>2. Choose a category or product.</li>
                                                <li>3.Select a template</li>
                                                <li>4. Choose Use template.</li>
                                                <li>5. Choose a project type: either a company-managed or a team-managed project.</li>
                                                <li> 6. Give your project a name. You can change it by selecting Change template.
                                                </li>
                                                <li>7. Select Create</li>
                                                <span className='font-bold text-xl'>How to create a sprint in Jira Software?</span>
                                                <li>1. Select your Backlog</li>
                                                <li>2. Click create sprint at the top of the backlog section</li>
                                                <li>3. Select Add dates to plan the start and end date of sprin.</li>
                                            </p>
                                    
                                            <ReadMoreReact text={EmranBlog} readMoreText={"Read more...▼"}/>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/DzxVNxR/293929767-755191202236359-2522477008241228207-n.png"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h5 class="font-bold text-gray-700 hover:underline">Md Emran Hossain</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">Aug 4,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600  rounded hover:bg-white ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">
                                            Why use NEXTJS? </Link>
                                            <p class="mt-2 text-gray-600">
                                                Web technologies are growing and changing almost on a monthly basis. Making any decision requires knowing the pros and cons of each option beforehand, and it’s becoming more challenging to make a good choice with confidence.
                                                <br />That's why I,m selected to learn and talk about the Next JS – React-powered javascript framework that helps build a truly outstanding and customized user experience more accessible.
                                                <br /><span className='font-bold text-xl'>NextJS comes with three main advantages:</span>
                                                <li>Better user experience</li>
                                                <li>Above-average performance</li>
                                                <li>Rapid feature development</li>
                                                <span className='font-bold text-xl'>Goals you can achieve with NextJS:</span>
                                                <li>1. Increase in conversion rate and sales</li>
                                                <li>2. Boost of marketing channels</li>
                                                <li>3. Overtake of competition</li>
                                                <li>4. Better user experience</li>
                                                <li>5. Lower maintenance costs</li>
                                                <li>6. Easier business scaling</li>
                                                <li>7. Lower maintenance costs</li>
                                                <li>8. Improve the performance of your website or web app</li>
                                            </p>
                                            
                                            <ReadMoreReact text={FahimBlog} readMoreText={"Read more...▼"}/>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/4dQ9YRC/285660174-1147310632573281-4290096358933552062-n.jpg"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h5 class="font-bold text-gray-700 hover:underline">Shahriar Mosharaf Fahim</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">Aug 4,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">
                                            WHAT IS NEXTJS? What are the most prominent features of Next.js? </Link>
                                            <p class="mt-2 text-gray-600">
                                                Recently I have explored new technology like Next.js. Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. And React is also a JavaScript library that is basically used to build web applications rendered in the client's browser with JavaScript. Developers are recognize several problems with this strategy, however, such as not catering to users who do not have access to JavaScript or have disabled it, potential security issues, significantly extended page loading times, and it can harm the site's overall search engine optimization.
                                                <br /><span className='font-bold text-xl'>Following is a list of the most prominent features of Next.js that excite the developers most:</span>
                                                <li>js provides the by default and easy server rendering.</li>
                                                <li>js supports static exporting.</li>
                                                <li>It seaports automatic code-splitting for faster page loads.</li>
                                                <span className='font-bold text-xl'>Besides this, Next.js also has some awesome features such as:</span>
                                                <li>1. Dynamic styles and themes support</li>
                                                <li>2. Built-in CSS vendor prefixing</li>
                                                <li>3. CSS Preprocessing via Plugins</li>
                                                <li>4. Full CSS support, no tradeoffs in power</li>
                                                <li>5. It provides source maps support</li>
                                            </p>
                                            
                                            <ReadMoreReact text={ThowhiduzzamanBlog} readMoreText={"Read more...▼"}/>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/r6rkkdp/Thowhid-black-bg.jpg"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h5 class="font-bold text-gray-700 hover:underline">Md. Thowhiduzzaman</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">Aug 4,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">
                                            What is Socket Io ? </Link>
                                            <p class="mt-2 text-gray-600">
                                                Socket.IO aims to make realtime apps possible in every browser and mobile device, blurring the differences between the different transport mechanisms. It supports multiple transports, such as WebSockets, Flash sockets, long polling and more, automatically falling back when a transport fails
                                                <br /><span className='font-bold mt-5'>Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.</span>
                                                <img src='https://i.ibb.co/PzSBF50/bidirectional-communication.png' alt="" />
                                                <span>It is built on top of the WebSocket protocol and provides additional guarantees like fallback to HTTP long-polling or automatic reconnection.</span>
                                                <p className='mt-5'>Socket.IO is a library that is an event-driven library for real-time web applications and provides real-time and full-duplex communication between the Client and the Web servers, Generally, it is divided into two parts: a client-side library that runs in the browser, and a server-side library for Node.js.</p>
                                            </p>

                                            <ReadMoreReact text={ihsanNasifBlog} readMoreText={"Read more...▼"}/>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/xj6gsFf/ihsan.jpg"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h5 class="font-bold text-gray-700 hover:underline">Chowdhury Ihsan</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">Aug 4,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-purple-600 rounded hover:bg-white">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">
                                            What is Redux in React js? What are the advantages of using Redux?</Link>
                                            <p class="mt-2 text-gray-600">
                                                Redux in React is the official React binding for Redux which allows the components in React to read data from a Redux Store, and dispatch Actions to the Store for updating the data. The purpose of Redux is to help applications scale well by providing means to manage the state via a unidirectional data flow model.
                                                <br /><span className='font-bold text-xl'> Advantages of using Redux?</span>
                                                <li>Redux provides extremely easy state transfer between the components.</li>
                                                <li>The states are always predictable in Redux and its maintenance is relatively easy.</li>
                                                <li>Debugging and testing code in Redux is simple through logging behaviour and status.</li>
                                                <li>Redux also offers state persistence by storing the application's state to local storage and restoring it after a refresh.</li>
                                                <span className='font-bold text-xl'>Name all the Redux Store methods.</span>
                                                <p>All the Redux Store Methods are as follows:</p>
                                                <li>getState()</li>
                                                <li>subscribe(listener)</li>
                                                <li>dispatch(action)</li>
                                                <li>Full CSS support, no tradeoffs in power</li>
                                                <li>replaceReducer(nextReducer)</li>
                                            </p>
                                            
                                            <ReadMoreReact text={SakilShikdarBlog} readMoreText={"Read more...▼"}/>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/d748BMc/sakil.jpg"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h5 class="font-bold text-gray-700 hover:underline">Sakil shikdar</h5>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* POst  */}
                            </div>
                            <div class="hidden w-4/12 -mx-8 lg:block">
                                <div class="px-8">
                                    <h5 class="mb-4 text-xl font-bold text-gray-700">Authors</h5>
                                    <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                                        <ul class="-mx-4">
                                            <li class="flex items-center"><img
                                                src="https://i.ibb.co/QQMkk1w/web-2-1a.png"
                                                alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full" />
                                                <p><Link to="#" class="mx-1 font-bold text-gray-700 hover:underline">Hexa Tech</Link><span
                                                    class="text-sm font-light text-gray-700">Created 6 Posts</span></p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="px-8 mt-10">
                                    <h5 class="mb-4 text-xl font-bold text-gray-700">Categories</h5>
                                    <div class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <ul>
                                            <li><Link to="#" class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                Tailwind</Link></li>
                                            <li class="mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                React</Link></li>
                                            <li class="mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- DaisyUi</Link>
                                            </li>
                                            <li class="mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                Firebase</Link></li>
                                            <li class="flex items-center mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                Redux</Link></li>
                                            <li class="flex items-center mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                Next.js</Link></li>
                                            <li class="flex items-center mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                JIRA</Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="px-8 mt-10">
                                    <h5 class="mb-4 text-xl font-bold text-gray-700">Recent Post</h5>
                                    <div class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-center"><Link to="#"
                                            class="px-2 py-1 text-sm text-green-100 bg-purple-600 rounded hover:bg-white">React</Link>
                                        </div>
                                        <div class="mt-4"><Link to="#" class="text-lg font-medium text-gray-700 hover:underline">How will you improve the performance of a React Application.</Link></div>
                                        <div class="flex items-center justify-between mt-4">
                                            <div class="flex items-center"><img
                                                src="https://i.ibb.co/FVgsghc/Rana-photo-1.jpg"
                                                alt="avatar" class="object-cover w-8 h-8 rounded-full" /><Link to="#"
                                                    class="mx-3 text-sm text-gray-700 hover:underline">Rana Hossain</Link></div><span
                                                        class="text-sm font-light text-gray-600">Aug 12, 2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;