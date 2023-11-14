import {
    ILayoutItems,
    IResumeLayout,
} from '@/components/resume-builder/types/resume-layout-types'

// Form Data
export const resumeFormData = {
    header: {
        name: 'ANONDO BORMON123',
        title: 'Full Stack Developer',
        email: 'dev.abormon28@gmail.com',
        location: 'Dhaka, Bangladesh',
        phone: '+88 01790-841023',
        link: 'github.com/devanondo',
        extra_link: 'dev-abormon.vercel.app',
        extra_field: 'linkedin.com/in/anondo-bormon',
        show_title: false,
        show_phone: true,
        show_link: true,
        show_email: false,
        show_location: true,
        show_extraLink: true,
        show_extraField: true,
        show_photo: true,
        uppercase_name: true,
        photo_style: 'rect',
        height: 139,
    },
    summerySection: {
        name: 'Summery',
        record: 'SummerySection',
        enabled: true,
        text: [
            {
                summery:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, fuga magnam atque ipsum et vero corrupti odit facere quibusdam impedit similique, asperiores commodi voluptatibus tempore facilis vel nisi porro eaque repudiandae odio nemo consectetur? Ducimus a, provident dolor officiis quia distinctio nihil quasi recusandae neque doloribus deserunt quis natus nesciunt?',
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
                workplace: 'Fiverr',
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
    skills: {
        record: 'SkillsSection',
        name: 'Skills',
        enabled: true,
        items: [
            {
                title: 'Language & Libraries',
                show_title: true,
                bold_title: true,
                italic_title: true,
                underline_key: true,
                italic_key: true,
                bold_key: true,
                keys: [
                    {
                        keyItem: 'javaript',
                    },
                    {
                        keyItem: 'java',
                    },
                    {
                        keyItem: '',
                    },

                    {
                        keyItem: 'javascript',
                    },
                    {
                        keyItem: 'javat',
                    },
                    {
                        keyItem: 'javascript',
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
                enabled: true,
                name: 'EcrypEcommerce',
                bold_name: true,
                link: '',
                link_icon: true,
                date: {
                    record: 'DateRange',
                    from: '',
                    to: '',
                    is_present: true,
                    date_icon: true,
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
    strengths: {
        record: 'StrengthSection',
        name: 'Strength',
        enabled: true,

        items: [
            {
                enabled: true,
                name: 'Team Leadership',
                placeholder: 'Your Unique Talent',
                icon: 'team',
                show_icon: true,
                description: {
                    placeholder: 'Describe your strength!',
                    italic_description: false,
                    enabled: true,
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
}

export const resumeLayout: IResumeLayout[] = [
    {
        title: 'Group-1',
        column: 7,
        items: [
            {
                title: 'Summery',
                column: 1,
                key: 'summerySection',
                position: 1,
            },

            {
                title: 'Experience',
                column: 1,
                key: 'experienceSummary',
                position: 3,
            },
            {
                title: 'Educations',
                column: 1,
                key: 'education',
                position: 5,
            },
        ],
    },

    {
        title: 'Group-2',
        column: 5,
        items: [
            {
                title: 'Strength',
                column: 1,
                key: 'strength',
                position: 4,
            },
            {
                title: 'Skills',
                column: 1,
                key: 'skills',
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
                        column: 1,
                        key: 'summerySection',
                        position: 1,
                    },

                    {
                        title: 'Experience',
                        column: 1,
                        key: 'experienceSummary',
                        position: 3,
                    },
                    {
                        title: 'Educations',
                        column: 1,
                        key: 'education',
                        position: 5,
                    },
                ],
            },

            {
                title: 'Group-2',
                column: 5,
                items: [
                    {
                        title: 'Strength',
                        column: 1,
                        key: 'strength',
                        position: 4,
                    },
                    {
                        title: 'Skills',
                        column: 1,
                        key: 'skills',
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
                        column: 1,
                        key: 'summerySection',
                        position: 1,
                    },

                    {
                        title: 'Experience',
                        column: 1,
                        key: 'experienceSummary',
                        position: 3,
                    },
                    {
                        title: 'Educations',
                        column: 1,
                        key: 'education',
                        position: 5,
                    },
                ],
            },

            {
                title: 'Group-2',
                column: 12,
                items: [
                    {
                        title: 'Strength',
                        column: 1,
                        key: 'strength',
                        position: 4,
                    },
                    {
                        title: 'Skills',
                        column: 1,
                        key: 'skills',
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
    fontSize: 'small',
    primaryColor: '#000',
    secondaryColor: '#1e90ff',
    backgroundImage: '',
}
