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
                    position: 'Full Stackweb developer',
                    workplace: 'Fiverr',
                    location: 'San Fransisco, CA',

                    description:
                        'Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love. Lauzon is a universal digital loyalty program that offers unique and fun rewards at the places you love.',
                    bulets: {
                        enabled: true,
                        name: 'bulets',
                        styles: 'styles',
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

    function onSubmit(values: any) {}

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

                    <ResumeSummery />
                    <ExperienceSummery />

                    <Button className="mt-10">Submit</Button>
                </form>
            </FormProvider>
        </div>
    )
}

export default ResumePage
