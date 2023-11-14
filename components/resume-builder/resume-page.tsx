/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

'use client'

import { resumeFormData } from '@/lib/resume-data'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import EducationItems from './education/education-items'
import ExperienceSummery from './experience/experience-summery'
import ResumeHeader from './header/resume-header'
import SkillsSection from './skills/skills-section'
import StrengthSection from './strengths/strength-section'
import ResumeSummery from './summery/resume-summery'
import { ItemsComponents } from './types/resume-layout-types'

export const itemsComponents: ItemsComponents = {
    header: <ResumeHeader />,
    summerySection: <ResumeSummery />,
    experienceSummary: <ExperienceSummery />,
    skills: <SkillsSection />,
    strength: <StrengthSection />,
    education: <EducationItems />,
}

const ResumePage = () => {
    const { summeryPopoverKey, groupPopoverKey } = useAppSelector(
        (state) => state.popover
    )
    const dispatch = useAppDispatch()
    const refs = useRef<HTMLDivElement>(null)

    const methods = useForm()

    function onSubmit(values: any) {
        console.log(values)
    }

    useEffect(() => {
        if (Object.keys(resumeFormData)?.length) {
            methods.reset(resumeFormData)
        }
    }, [])

    const parentClick = () => {
        dispatch(showPopover(null))
    }

    // refs.current?.childNodes.forEach((child) => {
    //     child.childNodes.forEach((child2) => {
    //         console.log(child2.)
    //     })
    // })

    const { resumeLayout } = useAppSelector((state) => state.layout)

    return (
        <div
            className={cn(
                ` top-[100px] left-1/2 p-12 absolute -translate-x-1/2  w-[940px] border border-zinc-300 h-[1330px] bg-white`,
                summeryPopoverKey && 'bg-[#dddce0]',
                groupPopoverKey && 'bg-[#dddce0]'
            )}
            id="resume-bulder"
            onClick={parentClick}
        >
            <div onClick={(e) => e.stopPropagation()} className="">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <ResumeHeader />
                        <div ref={refs} className="grid grid-cols-12 gap-x-5">
                            {resumeLayout?.map((item, index) => {
                                return (
                                    <div
                                        style={{
                                            gridColumn: `span ${item.column}`,
                                        }}
                                        key={index}
                                    >
                                        {item.items.map((cont, index) => (
                                            <div
                                                datatype={cont.title}
                                                key={index}
                                            >
                                                {itemsComponents[cont.key]}
                                            </div>
                                        ))}
                                    </div>
                                )
                            })}
                        </div>

                        <Button className="mt-10">Submit</Button>
                    </form>
                </FormProvider>
            </div>

            {/* <ContentProvider> */}

            {/* <ResumeHeader /> */}
            {/* </ContentProvider> */}

            {/* <div className="grid grid-cols-5 gap-x-5">
                            <div className="col-span-3">
                                <ResumeSummery />
                                <ExperienceSummery />
                                <EducationItems />
                            </div>
                            <div className="col-span-2">
                                <SkillsSection />

                                <StrengthSection />
                            </div>
                        </div> */}
        </div>
    )
}

export default ResumePage
