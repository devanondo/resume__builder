import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { User } from '../api/(modules)/user/user-model'
import { Resume } from '../api/(modules)/resume/resume-model'
import { Layout } from '../api/(modules)/layout/layout-model'

export const initialUser = async () => {
    const user = await currentUser()

    if (!user) {
        return redirectToSignIn()
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
    const resume = await Resume.create({ ...resumeFormData, uid: user.id })

    // Initialize the layout
    const layout = await Layout.create({ uid: user.id, sections: layoutData })

    return { newUser, resume, layout }
}

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
        enabled: false,

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
                icon: 'CiMicrochip',
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
                    count: 0,
                    slide_type: 'circle',
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
        enabled: false,

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
        enabled: false,

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
const layoutData = [
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
]
