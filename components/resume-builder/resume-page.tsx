/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import ExperienceSummery from './experience/experience-summery'
import ResumeHeader from './resume-header'
import ResumeSummery from './resume-summery'
import SkillsSection from './skills/skills-section'
import StrengthSection from './strengths/strength-section'

const ResumePage = () => {
    const [padding, setPadding] = useState<number>(36)
    const data = {
        header: [
            {
                name: 'ANONDO BORMON123',
                title: 'Full Stack Developer',
                email: 'dev.abormon28@gmail.com',
                location: 'Dhaka, Bangladesh',
                phone: '+88 01790-841023',
                link: 'github.com/devanondo',
                extra_link: '<b>dev-abormon.vercel.app<br></b>',
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
        ],
        summerySection: [
            {
                name: 'Summery',
                record: 'SummerySection',
                enabled: true,
                text: [
                    {
                        summery: '',
                    },
                ],
            },
        ],
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
                            keyItem: 'jvascript',
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
                    name: 'Full Stackweb developer',
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
                        placeholder: 'Write short description!',
                        text: 'Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love.',
                        italic_description: false,
                        enabled: true,
                    },
                },
            ],
        },
        education: {
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
                        location: 'Dhaka',
                        show_location: true,
                        gpa: '',
                        placeholder_gpa: 'CGPA',
                        gpa_text: '',
                        placeholder_gpa_text: '4.00',
                        gpa_max: '',
                        placeholder_gpa_max: '4.00',
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

    const methods = useForm()

    function onSubmit(values: any) {
        console.log(values)
    }

    useEffect(() => {
        if (Object.keys(data)?.length) {
            methods.reset(data)
        }
    }, [])

    return (
        <div
            style={{
                padding: padding,
            }}
            className={cn(
                ` top-[100px] left-1/2  absolute -translate-x-1/2  w-[940px] border border-zinc-300 min-h-[1330px] bg-gray-100 `
            )}
            id="resume-bulder"
        >
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {/* <ContentProvider> */}

                    <ResumeHeader />
                    {/* </ContentProvider> */}

                    <div className="grid grid-cols-5 gap-x-5">
                        <div className="col-span-3">
                            <ResumeSummery />
                            <ExperienceSummery />
                        </div>
                        <div className="col-span-2">
                            <SkillsSection />

                            <StrengthSection />
                        </div>
                    </div>

                    <Button className="mt-10">Submit</Button>
                </form>
            </FormProvider>
        </div>
    )
}

export default ResumePage
