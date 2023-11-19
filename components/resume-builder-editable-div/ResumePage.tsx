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
import DeclarationSection from './declaration/Declaretion'
import EducationItems from './education/education-items'
import ExperienceSummery from './experience/experience-summery'
import ResumeHeader from './header/resume-header'
import LanguageSection from './languages/language-section'
import ReferencesSection from './references/references'
import SkillsSection from './skills/skills-section'
import StrengthSection from './strengths/strength-section'
import ResumeSummery from './summery/resume-summery'
import { ItemsComponents } from './types/resume-layout-types'

import { useReactToPrint } from 'react-to-print'
const ResumePage = () => {
    const { summeryPopoverKey, groupPopoverKey } = useAppSelector(
        (state) => state.popover
    )

    const itemsComponents: ItemsComponents = {
        header: <ResumeHeader />,
        summerySection: <ResumeSummery />,
        experienceSummary: <ExperienceSummery />,
        skills: <SkillsSection />,
        strength: <StrengthSection />,
        education: <EducationItems />,
        languages: <LanguageSection />,
        declaration: <DeclarationSection />,
        references: <ReferencesSection />,
    }
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

    const { resumeLayout } = useAppSelector((state) => state.layout)

    const divRef = useRef<HTMLDivElement>(null)

    const handleButtonClick = () => {
        handlePrint()
    }

    const handlePrint = useReactToPrint({
        content: () => divRef.current!,
    })

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                parentClick()
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => document.removeEventListener('keydown', handleKeyPress)
    })

    return (
        <div>
            <div onClick={(e) => e.stopPropagation()} className="w-full">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <div className="flex items-center gap-x-5 mb-5">
                            <Button className="">Submit</Button>

                            <Button
                                onClick={() => {
                                    handleButtonClick()
                                }}
                                type="button"
                            >
                                download
                            </Button>
                        </div>

                        <div
                            className={cn(
                                ` p-12 w-[940px] border  h-[1325px] bg-white`,
                                summeryPopoverKey && 'bg-[#dddce0]',
                                groupPopoverKey && 'bg-[#dddce0]'
                            )}
                            id="resume-builder"
                            onClick={parentClick}
                            ref={divRef}
                        >
                            <ResumeHeader />

                            <div
                                ref={refs}
                                onClick={parentClick}
                                className="grid grid-cols-12 gap-x-2"
                            >
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
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

export default ResumePage
