import React from 'react';
import { Link } from 'react-router-dom';
import ReactReadMoreReadLess from "react-read-more-read-less";

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
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
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
                                            <ReactReadMoreReadLess
                                                charLimit={60}
                                                readMoreText={"Read more ▼"}
                                                readLessText={"Read less ▲"}
                                                readMoreClassName="read-more-less--more"
                                                readLessClassName="read-more-less--less"
                                            >
                                                {RanaBlog}
                                            </ReactReadMoreReadLess>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            {/* <Link to="#" class="text-blue-500 hover:underline">Read more</Link> */}
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/FVgsghc/Rana-photo-1.jpg"
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
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
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
                                            <ReactReadMoreReadLess
                                                charLimit={70}
                                                readMoreText={"Read more ▼"}
                                                readLessText={"Read less ▲"}
                                                readMoreClassName="read-more-less--more"
                                                readLessClassName="read-more-less--less"
                                            >
                                                {EmranBlog}
                                            </ReactReadMoreReadLess>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            {/* <Link to="#" class="text-blue-500 hover:underline">Read more</Link> */}
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/FVgsghc/Rana-photo-1.jpg"
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
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
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
                                            <ReactReadMoreReadLess
                                                charLimit={70}
                                                readMoreText={"Read more ▼"}
                                                readLessText={"Read less ▲"}
                                                readMoreClassName="read-more-less--more"
                                                readLessClassName="read-more-less--less"
                                            >
                                                {FahimBlog}
                                            </ReactReadMoreReadLess>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            {/* <Link to="#" class="text-blue-500 hover:underline">Read more</Link> */}
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/FVgsghc/Rana-photo-1.jpg"
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
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">
                                            WHAT IS NEXTJS? </Link>
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
                                            <ReactReadMoreReadLess
                                                charLimit={70}
                                                readMoreText={"Read more ▼"}
                                                readLessText={"Read less ▲"}
                                                readMoreClassName="read-more-less--more"
                                                readLessClassName="read-more-less--less"
                                            >
                                                {FahimBlog}
                                            </ReactReadMoreReadLess>

                                        </div>
                                        <div class="flex justify-end mt-4">
                                            {/* <Link to="#" class="text-blue-500 hover:underline">Read more</Link> */}
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://i.ibb.co/FVgsghc/Rana-photo-1.jpg"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h5 class="font-bold text-gray-700 hover:underline">Md. Rana Hossain</h5>
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
                                            class="px-2 py-1 text-sm text-green-100 bg-accent rounded hover:bg-gray-500">React</Link>
                                        </div>
                                        <div class="mt-4"><Link to="#" class="text-lg font-medium text-gray-700 hover:underline">How will you improve the performance of a React Application.</Link></div>
                                        <div class="flex items-center justify-between mt-4">
                                            <div class="flex items-center"><img
                                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                alt="avatar" class="object-cover w-8 h-8 rounded-full" /><Link to="#"
                                                    class="mx-3 text-sm text-gray-700 hover:underline">Chy IHsan</Link></div><span
                                                        class="text-sm font-light text-gray-600">May 21, 2020</span>
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