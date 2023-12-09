import {
    ILayoutItems,
    ILayoutStyles,
    IResumeLayout,
} from '@/components/resume-builder-editable-div/types/resume-layout-types'

// Form Data
export const resumeFormData = {
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
        name: 'ANONDO BORMON',
        title: 'Full Stack Developer',
        email: 'dev.abormon28@gmail.com',
        location: 'Dhaka, Bangladesh',
        phone: '+88 01790-841023',
        link: 'github.com/devanondo',
        extra_link: 'dev-abormon.vercel.app',
        extra_field: 'linkedin.com/in/anondo-bormon',
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
        photoUrl:
            'https://utfs.io/f/362a2295-445c-4511-a8ee-58c83bc37232-5482fr.jpg',
        height: 139,
    },
    summerySection: {
        name: 'Summery',
        record: 'SummerySection',
        enabled: true,
        height: 139,
        items: [
            {
                height: 139,
                summery:
                    'Analytical and precise professional with 2 years of hands-on experience in both frontend web development and backend web development. The full-Stack web developer is proficient in fundamental front-end and server-side languages, with an in-depth understanding of user interface design, data rendering, and backend logic implementation. Eager to tackle web development design challenges to improve user experience. Ability to work independently and in a team environment.',
                placeholder: 'Write something about yourself!',
            },
        ],
    },
    experienceSummary: {
        record: 'ExperienceSection',
        name: 'Experience',
        enabled: true,
        height: 139,
        items: [
            {
                enabled: true,
                position: 'Full Stackweb developer',
                bold_position: true,
                workplace: 'Fiverr',
                location: 'San Fransisco, CA',
                show_location: false,
                height: 139,
                date: {
                    from: new Date(),
                    to: new Date(),
                    is_present: true,
                },
                description: {
                    text: 'Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love.',
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
                            text: 'Bullet description',
                            placeholder:
                                'Whats the one thing that makes you best candidate for this job?',
                        },
                    ],
                },
            },
            {
                enabled: true,
                position: 'Full Stackweb developer',
                bold_position: true,
                workplace: 'Fiverr',
                location: 'San Fransisco, CA',
                show_location: false,
                height: 139,
                date: {
                    from: '',
                    to: '',
                    is_present: true,
                },
                description: {
                    text: 'Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love.',
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
                            text: 'Bullet description',
                            placeholder:
                                'Whats the one thing that makes you best candidate for this job?',
                        },
                    ],
                },
            },
            {
                enabled: true,
                position: 'Full Stackweb developer',
                bold_position: true,
                workplace: 'Fiverr',
                location: 'San Fransisco, CA',
                show_location: false,
                height: 139,
                date: {
                    from: new Date(),
                    to: new Date(),
                    is_present: true,
                },
                description: {
                    text: 'Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love.',
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
                            text: 'Bullet description',
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
        name: 'Skills',
        enabled: true,
        height: 139,
        items: [
            {
                title: 'Language & Libraries',
                placeholder: 'Language & Libraries',
                show_title: true,
                bold_title: true,
                italic_title: true,
                underline_key: true,
                italic_key: false,
                bold_key: true,
                height: 139,
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
                    {
                        keyItem: 'Process Modeling',
                    },
                    {
                        keyItem: 'Design of Experients',
                    },
                ],
            },
        ],
    },
    projects: {
        record: 'ProjectSection',
        name: 'Projects',
        enabled: false,
        height: 139,
        items: [
            {
                name: 'EcrypEcommerce',
                bold_name: true,
                show_link: true,
                link: 'https://',
                link_icon: true,
                height: 139,
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
                    text: 'Program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love.',
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
        enabled: true,
        height: 139,
        items: [
            {
                enabled: true,
                name: 'Team Leadership',
                placeholder: 'Your Unique Talent',
                icon: 'CiMicrochip',
                height: 139,
                show_icon: true,
                description: {
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
        enabled: true,
        height: 139,
        items: [
            {
                name: 'English',
                placeholder: 'Language',
                level: 'Beginner',
                show_label: true,
                score: {
                    score: 3,
                    type: 'circle',
                },
                height: 139,
            },
        ],
    },
    educations: {
        record: 'EducationSection',
        name: 'Education',
        enabled: true,
        height: 139,
        items: [
            {
                enabled: true,
                name: 'BSC in Computer Science Engineering',
                placeholder: 'Degree and Field of Study!',
                icon: 'FcGraduationCap',
                show_icon: true,
                height: 139,
                institution: {
                    name: 'Dhaka International University',
                    placeholder: 'School / University',
                    gpa: 'CGPA',
                    placeholder_gpa: 'CGPA',
                    gpa_score: '4.00',
                    placeholder_gpa_score: '4.00',
                    gpa_max: '4.00',
                    placeholder_gpa_max: '4.00',
                    enabled_gpa: true,
                },
                location: 'Dhaka, Bangladesh',
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
                            text: 'bullet description',
                        },
                        {
                            text: 'bullet description2',
                        },
                    ],
                },
            },
        ],
    },
    declaration: {
        record: 'DeclarationSection',
        name: 'Application Declaration',
        enabled: false,
        height: 139,
        items: [
            {
                description:
                    'Upon reviewing and assessing this resume, I declare and certify that I have accurately and truthfully described myself and my qualifications.',

                name: 'ABormon',
                height: 139,
            },
        ],
    },
    references: {
        record: 'ReferencesSection',
        name: 'References',
        enabled: false,
        height: 139,
        items: [
            {
                name: 'ABormon',
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

// Layout styles sould be come form the DB
export const layoutWithStyles: ILayoutStyles[] = [
    {
        layout: 'double',
        typo: {
            small: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            medium: {
                heading: {
                    fontSize: '30px',
                    lineHeight: '32px',
                    fontWeight: 700,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            large: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            extralarge: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
        },
    },
    {
        layout: 'single',
        typo: {
            small: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            medium: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            large: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            extralarge: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
        },
    },
]

export const colors = [
    {
        colorPallate: 'blackWhite',
        primary: '#000',
        secondary: '#1e90ff',
        paragraph: '#000',
    },
    {
        colorPallate: 'blackWhite',
        primary: '#000',
        secondary: '#6f7878',
        paragraph: '#000',
    },
    {
        colorPallate: 'blackWhite',
        primary: '#124f44',
        secondary: '#3cb371',
        paragraph: '#000',
    },
    {
        colorPallate: 'blackWhite',
        primary: '#8a0202',
        secondary: '#f96b07',
        paragraph: '#000',
    },
    {
        colorPallate: 'blackWhite',
        primary: '#002b7f',
        secondary: '#56acf2',
        paragraph: '#000',
    },
    {
        colorPallate: 'blackWhite',
        primary: '#19273c',
        secondary: '#3c6df0',
        paragraph: '#000',
    },
    {
        colorPallate: 'blackWhite',
        primary: '#501e58',
        secondary: '#951dc4',
        paragraph: '#000',
    },
    {
        colorPallate: 'blackWhite',
        primary: '#19273c',
        secondary: '#c4881c',
        paragraph: '#000',
    },
]

// {
//     height: 100,
//     key: 'key1',
//     items: [{ height: 100 }, { height: 200 }, { height: 200 }],
// },

// {
//     itemsIndex: [2],
//     key: 'key3',
//     pack: 3,
//     totalHeight: 170,
// },

export const resumeLayout: IResumeLayout[] = [
    {
        title: 'Group-1',
        column: 12,
        items: [
            {
                title: 'Summery',
                height: 1,
                key: 'summerySection',
                position: 1,
            },

            {
                title: 'Experience',
                height: 1,
                key: 'experienceSummary',
                position: 3,
            },

            {
                title: 'Experience',
                height: 1,
                key: 'experienceSummary',
                position: 3,
            },
            {
                title: 'Educations',
                height: 1,
                key: 'educations',
                position: 5,
            },

            {
                title: 'Projects',
                height: 1,
                key: 'projects',
                position: 2,
            },
        ],
    },

    {
        title: 'Group-2',
        column: 12,
        items: [
            {
                title: 'Strength',
                height: 1,
                key: 'strengths',
                position: 4,
            },
            {
                title: 'Skills',
                height: 1,
                key: 'skills',
                position: 2,
            },
            {
                title: 'Languages',
                height: 1,
                key: 'languages',
                position: 2,
            },
            {
                title: 'References',
                height: 1,
                key: 'references',
                position: 2,
            },
        ],
    },
    // {
    //     title: 'Group-3',
    //     column: 3,
    //     items: [
    //         {
    //             title: 'Declaration',
    //             height: 1,
    //             key: 'declaration',
    //             position: 2,
    //         },
    //         {
    //             title: 'References',
    //             height: 1,
    //             key: 'references',
    //             position: 2,
    //         },
    //     ],
    // },
]

export const layoutItems: ILayoutItems[] = [
    {
        id: '355as1d51aea1dee1a5d',
        title: 'Rain Maker',
        isActive: true,
        imgUrl: 'https://utfs.io/f/792beefb-c09f-49b9-948f-65af2c19fb19-bcf9ow.png',
        layoutStyle: 'double',
        layout: [
            {
                title: 'Group-1',
                column: 7,
                items: [
                    {
                        title: 'Summery',
                        height: 1,
                        key: 'summerySection',
                        position: 1,
                    },

                    {
                        title: 'Experience',
                        height: 1,
                        key: 'experienceSummary',
                        position: 3,
                    },
                    {
                        title: 'Educations',
                        height: 1,
                        key: 'educations',
                        position: 5,
                    },
                    {
                        title: 'Declaration',
                        height: 1,
                        key: 'declaration',
                        position: 2,
                    },
                    {
                        title: 'References',
                        height: 1,
                        key: 'references',
                        position: 2,
                    },
                    {
                        title: 'Projects',
                        height: 1,
                        key: 'projects',
                        position: 2,
                    },
                ],
            },

            {
                title: 'Group-2',
                column: 5,
                items: [
                    {
                        title: 'Strength',
                        height: 1,
                        key: 'strengths',
                        position: 4,
                    },
                    {
                        title: 'Skills',
                        height: 1,
                        key: 'skills',
                        position: 2,
                    },
                    {
                        title: 'Languages',
                        height: 1,
                        key: 'languages',
                        position: 2,
                    },
                ],
            },
        ],

        typo: {
            small: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            medium: {
                heading: {
                    fontSize: '30px',
                    lineHeight: '32px',
                    fontWeight: 700,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '15px',
                    lineHeight: '18px',
                    fontWeight: 700,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            large: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            extralarge: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
        },
    },
    {
        id: '355as1d51aea1dee1a5c',
        title: 'Steam Roller',
        isActive: false,
        imgUrl: 'https://utfs.io/f/72c1e7e2-83ca-44e4-b1c4-08de229a3924-i987gm.png',
        layoutStyle: 'single',
        layout: [
            {
                title: 'Group-1',
                column: 12,
                items: [
                    {
                        title: 'Summery',
                        height: 1,
                        key: 'summerySection',
                        position: 1,
                    },

                    {
                        title: 'Experience',
                        height: 1,
                        key: 'experienceSummary',
                        position: 3,
                    },
                    {
                        title: 'Educations',
                        height: 1,
                        key: 'educations',
                        position: 5,
                    },
                    {
                        title: 'Declaration',
                        height: 1,
                        key: 'declaration',
                        position: 2,
                    },
                    {
                        title: 'References',
                        height: 1,
                        key: 'references',
                        position: 2,
                    },
                    {
                        title: 'Projects',
                        height: 1,
                        key: 'projects',
                        position: 2,
                    },
                ],
            },

            {
                title: 'Group-2',
                column: 12,
                items: [
                    {
                        title: 'Strength',
                        height: 1,
                        key: 'strengths',
                        position: 4,
                    },
                    {
                        title: 'Skills',
                        height: 1,
                        key: 'skills',
                        position: 2,
                    },
                    {
                        title: 'Languages',
                        height: 1,
                        key: 'languages',
                        position: 2,
                    },
                ],
            },
        ],
        typo: {
            small: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },

                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            medium: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            large: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            extralarge: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
        },
    },

    {
        id: '355as1d51aea1dee1a5e',
        title: 'Narrow Roller',
        isActive: false,
        imgUrl: 'https://utfs.io/f/05afe5a5-6931-4984-bcdc-7bf1e51105bb-1sak5p.png',
        layoutStyle: 'onethird',
        layout: [
            {
                title: 'Group-1',
                column: 8,
                items: [
                    {
                        title: 'Summery',
                        height: 1,
                        key: 'summerySection',
                        position: 1,
                    },

                    {
                        title: 'Experience',
                        height: 1,
                        key: 'experienceSummary',
                        position: 3,
                    },
                    {
                        title: 'Educations',
                        height: 1,
                        key: 'educations',
                        position: 5,
                    },
                    {
                        title: 'Declaration',
                        height: 1,
                        key: 'declaration',
                        position: 2,
                    },
                ],
            },

            {
                title: 'Group-2',
                column: 4,
                items: [
                    {
                        title: 'Skills',
                        height: 1,
                        key: 'skills',
                        position: 2,
                    },
                    {
                        title: 'Projects',
                        height: 1,
                        key: 'projects',
                        position: 2,
                    },
                    {
                        title: 'Strength',
                        height: 1,
                        key: 'strengths',
                        position: 4,
                    },
                    {
                        title: 'Languages',
                        height: 1,
                        key: 'languages',
                        position: 2,
                    },
                ],
            },
        ],
        typo: {
            small: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            medium: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            large: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
            extralarge: {
                heading: {
                    fontSize: '28px',
                    lineHeight: '32px',
                    fontWeight: 500,
                },
                role: {
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                },
                title: {
                    fontSize: '22px',
                    lineHeight: '26px',
                    fontWeight: 600,
                },
                subheading: {
                    fontSize: '18px',
                    lineHeight: '22px',
                    fontWeight: 400,
                },
                subtitle: {
                    fontSize: '16px',
                    lineHeight: '19px',
                    fontWeight: 400,
                },
                paragraph: {
                    fontSize: '14px',
                    lineHeight: '17px',
                    fontWeight: 400,
                },
            },
        },
    },
]

export const layoutStyles: Record<string, unknown> = {
    pageMargin: '50',
    fontFamilly: 'Robboto',
    fontSize: 'medium',
    primaryColor: '#000',
    secondaryColor: '#1e90ff',
    backgroundImage: '',
}

export const lLayout = [
    {
        column: 0,
        height: 100,
        itemIndex: [0],
        page: 0,
        record: 'LayoutItem',
        sectionIndex: 'experienceSection',
    },
    {
        column: 0,
        height: 100,
        itemIndex: [0, 1, 2],
        page: 0,
        record: 'LayoutItem',
        sectionIndex: 'experienceSection',
    },
]

export const testFormData = {
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
