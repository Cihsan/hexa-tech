const json = {
    title: "Software developer survey.",
    pages: [
        {
            "title": "What operating system do you use?",
            "popupdescription": "Select the operating system you are currently using.",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "opSystem",
                    "title": "OS",
                    "hasOther": true,
                    "isRequired": true,
                    "popupdescription": "If you do not use any of the listed operating system, please select 'others' and type your operating system name.",
                    "choices": ["Windows", "Linux", "Macintosh OSX"]
                }
            ]
        }, {
            "title": "What language(s) are you currently using?",
            "popupdescription": "Select all programming languages you have been using for the last six months.",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "langs",
                    "title": "Please select from the list",
                    "popupdescription": "Select all programming languages you have been using for the last six months.",
                    "colCount": 4,
                    "isRequired": true,
                    "choices": [
                        "Javascript",
                        "Java",
                        "Python",
                        "CSS",
                        "PHP",
                        "Ruby",
                        "C++",
                        "C",
                        "Shell",
                        "C#",
                        "Objective-C",
                        "R",
                        "VimL",
                        "Go",
                        "Perl",
                        "CoffeeScript",
                        "TeX",
                        "Swift",
                        "Scala",
                        "Emacs Lisp",
                        "Haskell",
                        "Lua",
                        "Clojure",
                        "Matlab",
                        "Arduino",
                        "Makefile",
                        "Groovy",
                        "Puppet",
                        "Rust",
                        "PowerShell"
                    ]
                }
            ]
        }, {
            "title": "Please enter your name and e-mail",
            "popupdescription": "We will not share this information with any third-party organization.",
            "elements": [
                {
                    "type": "text",
                    "name": "name",
                    "title": "Name:",
                    "popupdescription": "Please, type your name as 'Given Name' 'Family Name'."
                }, {
                    "type": "text",
                    "name": "email",
                    "title": "Your e-mail",
                    "popupdescription": "Please, make sure you do not misspell your e-mail."
                }
            ]
        },
        {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "civilwar",
                    "title": "When was the Civil War?",
                    "choices": [
                        "1750-1800",
                        "1800-1850",
                        "1850-1900",
                        "1900-1950",
                        "after 1950"
                    ],
                    "correctAnswer": "1850-1900"
                }
            ]
        }, {
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "libertyordeath",
                    "title": "Who said 'Give me liberty or give me death?'",
                    "choicesOrder": "random",
                    "choices": [
                        "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                    ],
                    "correctAnswer": "Patrick Henry"
                }
            ]
        }, {
            "maxTimeToFinish": 15,
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "magnacarta",
                    "title": "What is the Magna Carta?",
                    "choicesOrder": "random",
                    "choices": [
                        "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                    ],
                    "correctAnswer": "The foundation of the British parliamentary system"
                }
            ]
        }
    ]
};
export default json;



// const json = {
//     "title": "Product/Market Fit Survey Template",
//     "pages": [
//         {
//             "name": "page1",
//             "elements": [
//                 {
//                     "type": "radiogroup",
//                     "name": "customer_role",
//                     "title": "What best describes your role?",
//                     "hasOther": true,
//                     "choices": [
//                         "Engineering Lead",
//                         "Project Manager",
//                         "Software Developer",
//                         "Designer",
//                         "Product Manager",
//                         "CEO / Founder",
//                         "Customer Support"
//                     ],
//                     "otherText": "Other",
//                     "colCount": 3
//                 }, {
//                     "type": "radiogroup",
//                     "name": "start_using",
//                     "title": "How did you start using the product?",
//                     "choices": [
//                         {
//                             "value": "created",
//                             "text": "I created my account"
//                         }, {
//                             "value": "invited",
//                             "text": "I was invited to an account"
//                         }
//                     ]
//                 }, {
//                     "type": "radiogroup",
//                     "name": "product_discovering",
//                     "title": "How did you first discover the product? ",
//                     "hasOther": true,
//                     "choices": [
//                         "Friend or colleague",
//                         "Search engine",
//                         "Facebook",
//                         "Twitter",
//                         "Blog"
//                     ],
//                     "otherText": "Other",
//                     "colCount": 3
//                 }, {
//                     "type": "radiogroup",
//                     "name": "paid_customer",
//                     "title": "Do you currently pay for the product? ",
//                     "isRequired": true,
//                     "choices": ["Yes", "No"]
//                 }
//             ]
//         },
//         {
//             "name": "page2",
//             "elements": [
//                 {
//                     "type": "radiogroup",
//                     "name": "product_fit",
//                     "title": "How would you feel if you could no longer use the product?",
//                     "isRequired": true,
//                     "choices": [
//                         {
//                             "value": "3",
//                             "text": "Very disappointed"
//                         }, {
//                             "value": "2",
//                             "text": "Somewhat disappointed"
//                         }, {
//                             "value": "1",
//                             "text": "Not disappointed"
//                         }
//                     ]
//                 }, {
//                     "type": "comment",
//                     "name": "product_fit_comment",
//                     "visibleIf": "{product_fit} notempty",
//                     "title": "Please help us understand why you selected the answer above"
//                 }
//             ]
//         },
//         {
//             "name": "page3",
//             "elements": [
//                 {
//                     "type": "radiogroup",
//                     "name": "product_alternative",
//                     "title": "What would you use as an alternative if [the product] were no\nlonger available?",
//                     "hasOther": true,
//                     "choices": [
//                         "Alternative 1",
//                         "Alternative 2",
//                         "Alternative 3",
//                         "Alternative 4",
//                         "Alternative 5",
//                         "Alternative 6"
//                     ],
//                     "otherText": "Other (please name)",
//                     "colCount": 3
//                 }, {
//                     "type": "radiogroup",
//                     "name": "product_benefit",
//                     "title": "What is the primary benefit that you have received from the\nproduct?",
//                     "hasOther": true,
//                     "choices": [
//                         "Benefit 1",
//                         "Benefit 2",
//                         "Benefit 3",
//                         "Benefit 4",
//                         "Benefit 5",
//                         "Benefit 6"
//                     ],
//                     "colCount": 3
//                 }, {
//                     "type": "radiogroup",
//                     "name": "product_recommend",
//                     "title": "Have you recommended the product to anyone?",
//                     "choices": ["Yes", "No"]
//                 }
//             ]
//         },
//         {
//             "name": "page4",
//             "elements": [
//                 {
//                     "type": "rating",
//                     "name": "nps_score",
//                     "title": "How likely are you to recommend the product to a friend or\ncolleague? ",
//                     "isRequired": true,
//                     "rateMin": 0,
//                     "rateMax": 10,
//                     "minRateDescription": "Most unlikely",
//                     "maxRateDescription": "Most likely"
//                 }, {
//                     "type": "radiogroup",
//                     "name": "favorite_functionality",
//                     "title": "What's your favorite functionality / add-on for the product?",
//                     "hasOther": true,
//                     "choices": [
//                         "Feature 1",
//                         "Feature 2",
//                         "Feature 3",
//                         "Feature 4",
//                         "Feature 5",
//                         "Feature 6"
//                     ],
//                     "colCount": 3
//                 }, {
//                     "type": "comment",
//                     "name": "product_improvement",
//                     "title": "How could the product be improved to better meet your\nneeds?"
//                 }
//             ]
//         }, {
//             "name": "page5",
//             "elements": [
//                 {
//                     "type": "multipletext",
//                     "name": "contact_customer",
//                     "title": "Want us to follow-up? Leave your name and email here:",
//                     "items": [
//                         {
//                             "name": "Name"
//                         }, {
//                             "name": "E-mail",
//                             "inputType": "email",
//                             "validators": [
//                                 {
//                                     "type": "email"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// };
// export default json;