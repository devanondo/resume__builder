import {
    ILayoutItems,
    ILayoutStyles,
    IResumeLayout,
} from '@/components/resume-builder/types/resume-layout-types'

// Form Data
export const resumeFormData = {
    template: 'rain_maker',
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
        items: [
            {
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

        items: [
            {
                enabled: true,
                position: 'Full Stackweb developer',
                bold_position: true,
                workplace: '<a href="www.google.com">Fiverr</a>',
                location: 'San Fransisco, CA',
                show_location: false,

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
        ],
    },
    skills: {
        record: 'SkillsSection',
        name: 'Skills',
        enabled: true,
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
        enabled: true,

        items: [
            {
                name: 'EcrypEcommerce',
                bold_name: true,
                show_link: true,
                link: 'https://',
                link_icon: true,

                extra_link: 'https://',
                show_extra_link: true,

                date: {
                    record: 'DateRange',
                    from: '09/2023',
                    to: '09/2023',
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

        items: [
            {
                enabled: true,
                name: 'Team Leadership',
                placeholder: 'Your Unique Talent',
                icon: 'FcApproval',
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
            },
        ],
    },
    educations: {
        record: 'EducationSection',
        name: 'Education',
        enabled: true,

        items: [
            {
                enabled: true,
                name: 'BSC in Computer Science Engineering',
                placeholder: 'Degree and Field of Study!',
                icon: 'FcGraduationCap',
                show_icon: true,

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
                    from: '10/12/2023',
                    to: '',
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
        enabled: true,

        items: [
            {
                description:
                    'Upon reviewing and assessing this resume, I declare and certify that I have accurately and truthfully described myself and my qualifications.',

                name: 'ABormon',
            },
        ],
    },
    references: {
        record: 'ReferencesSection',
        name: 'References',
        enabled: true,

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

export const layoutWithStyles: ILayoutStyles[] = [
    {
        style: 'Gogo Lis',
        fontFamilly: 'Bitter',
        heading: {
            fontSize: '28px',
            lineHeight: '32px',
            fontWeight: 500,
        },
        titleTypo: {
            fontSize: '22px',
            lineHeight: '26px',
            fontWeight: 600,
        },
        subHeading: {
            fontSize: '18px',
            lineHeight: '22px',
            fontWeight: 400,
        },
        subTitle: {
            fontSize: '16px',
            lineHeight: '19px',
            fontWeight: 400,
        },
        paragraph: {
            fontSize: '14px',
            lineHeight: '17px',
            fontWeight: 400,
        },
        colorPallate: 'blackwhite',
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

export const resumeLayout: IResumeLayout[] = [
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
                key: 'education',
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
                key: 'strength',
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
]

export const layoutItems: ILayoutItems[] = [
    {
        id: '355as1d51aea1dee1a5d',
        title: 'Rain Maker',
        isActive: true,
        imgUrl: 'https://i.ibb.co/B3cbpyd/Screenshot-from-2023-11-12-23-29-35.png',

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
                        key: 'education',
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
                        key: 'strength',
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
    },
    {
        id: '355as1d51aea1dee1a5c',
        title: 'Steam Roller',
        isActive: false,
        imgUrl: 'https://i.ibb.co/G7NNbc5/Screenshot-from-2023-11-12-23-30-21.png',

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
                        key: 'education',
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
                        key: 'strength',
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
    },

    {
        id: '355as1d51aea1dee1a5e',
        title: 'Narrow Roller',
        isActive: false,
        imgUrl: 'https://i.ibb.co/G7NNbc5/Screenshot-from-2023-11-12-23-30-21.png',

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
                        key: 'education',
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
                        key: 'strength',
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
