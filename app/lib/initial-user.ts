import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { User } from '../api/(modules)/user/user-model'
import { Resume } from '../api/(modules)/resume/resume-model'
import { Layout } from '../api/(modules)/layout/layout-model'
import { connectToDB } from './dbconfig'

export const initialUser = async () => {
    await connectToDB()
    const user = await currentUser()

    if (!user) {
        return redirectToSignIn({ returnBackUrl: '/' })
    }
    const profile = await User.findOne({ uid: user.id })

    if (profile) {
        return profile
    }

    const newUser = await User.create({
        uid: user.id,
        name: `${user.firstName} ${user.lastName}`,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
    })

    // Initailize the resume
    await Resume.create({ ...resumeFormData, uid: user.id })

    // Initialize the layout
    await Layout.create({ uid: user.id, sections: layoutData })

    return newUser
}

export const resumeFormData = {
    title: 'untitled',
    style: {
        record: 'ResumeStyle',
        layout: 'double',
        colors: ['#000', '#6f7878'],
        background: 'b05',
        fontBody: 'roboto',
        fontHeading: 'bitter',
        fontSize: 'medium',
        isMetaDataDisabled: false,
        marginOption: 1,
        pageMarginOption: 50,
    },
    header: {
        enabled: true,
        name: 'Your Name',
        title: '',
        email: '',
        location: '',
        phone: '',
        link: '',
        extra_link: '',
        extra_field: '',
        show_title: true,
        show_phone: true,
        show_link: true,
        show_email: true,
        show_location: true,
        show_extraLink: true,
        show_extraField: true,
        uppercase_name: true,
        show_photo: true,
        photo_style: 'rect',
        photoUrl: '',
        height: 139,
        column: 12,
    },
    summerySection: {
        name: 'Summery',
        record: 'SummerySection',
        enabled: false,
        height: 24,
        column: 7,

        items: [
            {
                summery: '',
                placeholder: 'Write something about yourself!',
                height: 18,
            },
        ],
    },
    experienceSummary: {
        record: 'ExperienceSection',
        name: 'Experience',
        enabled: true,
        height: 26,
        column: 7,

        items: [
            {
                enabled: true,
                position: '',
                bold_position: true,
                workplace: '',
                location: '',
                height: 139,
                show_location: false,
                date: {
                    from: new Date(),
                    to: new Date(),
                    is_present: true,
                },
                description: {
                    text: '',
                    italic_description: false,
                    enabled: true,
                },
                bulets: {
                    enabled: true,
                    bulet_items: true,
                    italic_items: false,
                    name: 'bulets',
                    items: [
                        {
                            text: '',
                            placeholder:
                                'Whats the one thing that makes you best candidate for this job?',
                        },
                    ],
                },
            },
        ],
    },
    skills: {
        record: 'SkillsSection',
        height: 25,
        name: 'Skills',
        enabled: false,
        column: 12,
        items: [
            {
                height: 60,
                title: '',
                placeholder: 'Language & Libraries',
                show_title: true,
                bold_title: true,
                italic_title: true,
                underline_key: true,
                italic_key: false,
                bold_key: true,
                keys: [
                    {
                        keyItem: 'LEAN Manufactureing',
                    },
                    {
                        keyItem: 'Root Cause Analysis',
                    },
                    {
                        keyItem: 'Scheduling',
                    },
                ],
            },
        ],
    },
    projects: {
        record: 'ProjectSection',
        name: 'Projects',
        height: 25,
        column: 12,
        enabled: false,

        items: [
            {
                name: '',
                height: 92,
                bold_name: true,
                show_link: true,
                link: 'https://',
                link_icon: true,

                extra_link: 'https://',
                show_extra_link: true,

                date: {
                    record: 'DateRange',
                    from: new Date(),
                    to: new Date(),
                    is_present: true,
                    date_icon: true,
                },
                description: {
                    text: '',
                    italic_description: false,
                    enabled: true,
                },

                bulets: {
                    enabled: true,
                    bulet_items: true,
                    italic_items: false,
                    name: 'bulets',
                    items: [
                        {
                            text: 'Describe by points!',
                        },
                    ],
                },
            },
        ],
    },
    strengths: {
        record: 'StrengthSection',
        name: 'Strength',
        height: 25,
        enabled: false,
        column: 12,
        grid: 1,

        items: [
            {
                enabled: true,
                height: 50,
                name: '',
                placeholder: 'Your Unique Talent',
                icon: 'CiMicrochip',
                show_icon: true,
                description: {
                    text: '',
                    placeholder: 'Describe your strength!',
                    italic_description: false,
                    enabled: true,
                },
            },
        ],
    },
    languages: {
        record: 'LanguageSection',
        name: 'Language',
        height: 25,
        enabled: false,
        column: 12,
        grid: 1,

        items: [
            {
                height: 45,
                name: '',
                placeholder: 'Language',
                level: 'Beginner',
                show_label: true,
                score: {
                    count: 0,
                    slide_type: 'circle',
                },
            },
        ],
    },
    educations: {
        record: 'EducationSection',
        name: 'Education',
        height: 26,
        enabled: true,
        column: 12,
        grid: 1,
        items: [
            {
                height: 79,
                enabled: true,
                name: '1',
                placeholder: 'Degree and Field of Study!',
                icon: 'FcGraduationCap',
                show_icon: true,

                institution: {
                    name: '',
                    placeholder: 'School / University',
                    gpa: 'CGPA',
                    placeholder_gpa: 'CGPA',
                    gpa_score: '4.00',
                    placeholder_gpa_score: '4.00',
                    gpa_max: '4.00',
                    placeholder_gpa_max: '4.00',
                    enabled_gpa: true,
                },
                location: '',
                show_location: true,
                show_location_icon: true,
                show__institution: true,
                date: {
                    record: 'DateRange',
                    placeholder: 'Date',
                    from: new Date(),
                    to: new Date(),
                    is_present: true,
                    date_icon: true,
                },

                bulets: {
                    enabled: true,
                    bulet_items: true,
                    italic_items: false,
                    name: 'bulets',
                    items: [
                        {
                            text: '',
                        },
                    ],
                },
            },
            {
                height: 139,
                enabled: true,
                name: '2',
                placeholder: 'Degree and Field of Study!',
                icon: 'FcGraduationCap',
                show_icon: true,

                institution: {
                    name: '',
                    placeholder: 'School / University',
                    gpa: 'CGPA',
                    placeholder_gpa: 'CGPA',
                    gpa_score: '4.00',
                    placeholder_gpa_score: '4.00',
                    gpa_max: '4.00',
                    placeholder_gpa_max: '4.00',
                    enabled_gpa: true,
                },
                location: '',
                show_location: true,
                show_location_icon: true,
                show__institution: true,
                date: {
                    record: 'DateRange',
                    placeholder: 'Date',
                    from: new Date(),
                    to: new Date(),
                    is_present: true,
                    date_icon: true,
                },

                bulets: {
                    enabled: true,
                    bulet_items: true,
                    italic_items: false,
                    name: 'bulets',
                    items: [
                        {
                            text: '',
                        },
                    ],
                },
            },
        ],
    },
    declaration: {
        record: 'DeclarationSection',
        name: 'Application Declaration',
        height: 24,
        enabled: false,
        column: 12,

        items: [
            {
                height: 45,
                description: '',
                name: '',
            },
        ],
    },
    references: {
        record: 'ReferencesSection',
        name: 'References',
        height: 24,
        enabled: false,
        column: 12,
        grid: 1,
        items: [
            {
                height: 50,
                name: '',
                placeholder: 'Referece Name',
                show_email: true,
                show_phone: true,
                show_address: true,
                email: 'acb@example.com',
                phone: '123-456-1234',
                address: 'Los Angeles, LA',
            },
        ],
    },
}

// export const resumeFormData = {
//     style: {
//         record: 'ResumeStyle',
//         layout: 'double',
//         colors: ['#000', '#6f7878'],
//         background: 'b05',
//         fontBody: 'roboto',
//         fontHeading: 'bitter',
//         fontSize: 'medium',
//         isMetaDataDisabled: false,
//         marginOption: 1,
//         pageMarginOption: 50,
//     },
//     header: {
//         enabled: true,
//         name: 'Your Name',
//         title: '',
//         email: '',
//         location: '',
//         phone: '',
//         link: '',
//         extra_link: '',
//         extra_field: '',
//         show_title: true,
//         show_phone: true,
//         show_link: true,
//         show_email: true,
//         show_location: true,
//         show_extraLink: true,
//         show_extraField: true,
//         uppercase_name: true,

//         show_photo: true,
//         photo_style: 'rect',
//         photoUrl: '',
//         height: 139,
//     },
//     summerySection: {
//         name: 'Summery',
//         record: 'SummerySection',
//         enabled: true,
//         items: [
//             {
//                 summery: '',
//                 placeholder: 'Write something about yourself!',
//             },
//         ],
//     },
//     experienceSummary: {
//         record: 'ExperienceSection',
//         name: 'Experience',
//         enabled: true,

//         items: [
//             {
//                 enabled: true,
//                 position: '',
//                 bold_position: true,
//                 workplace: '',
//                 location: '',
//                 show_location: false,

//                 date: {
//                     from: new Date(),
//                     to: new Date(),
//                     is_present: true,
//                 },
//                 description: {
//                     text: '',
//                     italic_description: false,
//                     enabled: true,
//                 },

//                 bulets: {
//                     enabled: true,
//                     bulet_items: true,
//                     italic_items: false,
//                     name: 'bulets',
//                     items: [
//                         {
//                             text: '',
//                             placeholder:
//                                 'Whats the one thing that makes you best candidate for this job?',
//                         },
//                     ],
//                 },
//             },
//         ],
//     },
//     skills: {
//         record: 'SkillsSection',
//         name: 'Skills',
//         enabled: true,
//         items: [
//             {
//                 title: '',
//                 placeholder: 'Language & Libraries',
//                 show_title: true,
//                 bold_title: true,
//                 italic_title: true,
//                 underline_key: true,
//                 italic_key: false,
//                 bold_key: true,
//                 keys: [
//                     {
//                         keyItem: 'LEAN Manufactureing',
//                     },
//                     {
//                         keyItem: 'Root Cause Analysis',
//                     },
//                     {
//                         keyItem: 'Scheduling',
//                     },
//                 ],
//             },
//         ],
//     },
//     projects: {
//         record: 'ProjectSection',
//         name: 'Projects',
//         enabled: false,

//         items: [
//             {
//                 name: '',
//                 bold_name: true,
//                 show_link: true,
//                 link: 'https://',
//                 link_icon: true,

//                 extra_link: 'https://',
//                 show_extra_link: true,

//                 date: {
//                     record: 'DateRange',
//                     from: new Date(),
//                     to: new Date(),
//                     is_present: true,
//                     date_icon: true,
//                 },
//                 description: {
//                     text: '',
//                     italic_description: false,
//                     enabled: true,
//                 },

//                 bulets: {
//                     enabled: true,
//                     bulet_items: true,
//                     italic_items: false,
//                     name: 'bulets',
//                     items: [
//                         {
//                             text: 'Describe by points!',
//                         },
//                     ],
//                 },
//             },
//         ],
//     },
//     strengths: {
//         record: 'StrengthSection',
//         name: 'Strength',
//         enabled: true,

//         items: [
//             {
//                 enabled: true,
//                 name: '',
//                 placeholder: 'Your Unique Talent',
//                 icon: 'CiMicrochip',
//                 show_icon: true,
//                 description: {
//                     placeholder: 'Describe your strength!',
//                     italic_description: false,
//                     enabled: true,
//                 },
//             },
//         ],
//     },
//     languages: {
//         record: 'LanguageSection',
//         name: 'Language',
//         enabled: true,

//         items: [
//             {
//                 name: '',
//                 placeholder: 'Language',
//                 level: 'Beginner',
//                 show_label: true,
//                 score: {
//                     count: 0,
//                     slide_type: 'circle',
//                 },
//             },
//         ],
//     },
//     educations: {
//         record: 'EducationSection',
//         name: 'Education',
//         enabled: true,

//         items: [
//             {
//                 enabled: true,
//                 name: '',
//                 placeholder: 'Degree and Field of Study!',
//                 icon: 'FcGraduationCap',
//                 show_icon: true,

//                 institution: {
//                     name: '',
//                     placeholder: 'School / University',
//                     gpa: 'CGPA',
//                     placeholder_gpa: 'CGPA',
//                     gpa_score: '4.00',
//                     placeholder_gpa_score: '4.00',
//                     gpa_max: '4.00',
//                     placeholder_gpa_max: '4.00',
//                     enabled_gpa: true,
//                 },
//                 location: '',
//                 show_location: true,
//                 show_location_icon: true,
//                 show__institution: true,
//                 date: {
//                     record: 'DateRange',
//                     placeholder: 'Date',
//                     from: new Date(),
//                     to: new Date(),
//                     is_present: true,
//                     date_icon: true,
//                 },

//                 bulets: {
//                     enabled: true,
//                     bulet_items: true,
//                     italic_items: false,
//                     name: 'bulets',
//                     items: [
//                         {
//                             text: '',
//                         },
//                     ],
//                 },
//             },
//         ],
//     },
//     declaration: {
//         record: 'DeclarationSection',
//         name: 'Application Declaration',
//         enabled: false,

//         items: [
//             {
//                 description: '',
//                 name: '',
//             },
//         ],
//     },
//     references: {
//         record: 'ReferencesSection',
//         name: 'References',
//         enabled: false,

//         items: [
//             {
//                 name: '',
//                 placeholder: 'Referece Name',
//                 show_email: true,
//                 show_phone: true,
//                 show_address: true,
//                 email: 'acb@example.com',
//                 phone: '123-456-1234',
//                 address: 'Los Angeles, LA',
//             },
//         ],
//     },
// }
const layoutData = [
    {
        title: 'Group-1',
        column: 7,
        items: [
            {
                title: 'Summery',
                key: 'summerySection',
            },

            {
                title: 'Experience',
                key: 'experienceSummary',
            },
            {
                title: 'Educations',
                key: 'educations',
            },
            {
                title: 'Declaration',
                key: 'declaration',
            },
            {
                title: 'References',
                key: 'references',
            },
            {
                title: 'Projects',
                key: 'projects',
            },
        ],
    },

    {
        title: 'Group-2',
        column: 5,
        items: [
            {
                title: 'Strength',
                key: 'strengths',
            },
            {
                title: 'Skills',
                key: 'skills',
            },
            {
                title: 'Languages',
                key: 'languages',
            },
        ],
    },
]
