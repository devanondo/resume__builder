/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

'use client'

import { resumeFormData } from '@/lib/resume-data'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
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
import UploadImageModal from '../modals/image-upload'
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '../ui/context-menu'
const ResumePage = () => {
    const { summeryPopoverKey, groupPopoverKey } = useAppSelector(
        (state) => state.popover
    )

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

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
        parentClick()
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

    if (!isMounted) return null
    return (
        <div>
            <div onClick={(e) => e.stopPropagation()} className="w-full pt-16">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <ContextMenu>
                            <ContextMenuTrigger
                                onContextMenu={() => {
                                    if (summeryPopoverKey || groupPopoverKey) {
                                        parentClick()
                                    }
                                }}
                                className="bg-red-100"
                            >
                                <div
                                    className={cn(
                                        ` p-12 w-[940px] border  h-[1325px] bg-white z-0`,
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
                                                    {item.items.map(
                                                        (cont, index) => (
                                                            <div
                                                                datatype={
                                                                    cont.title
                                                                }
                                                                key={index}
                                                            >
                                                                {
                                                                    itemsComponents[
                                                                        cont.key
                                                                    ]
                                                                }
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </ContextMenuTrigger>
                            <ContextMenuContent className="w-64">
                                <ContextMenuItem inset>
                                    Back
                                    <ContextMenuShortcut>
                                        ⌘[
                                    </ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuItem inset disabled>
                                    Forward
                                    <ContextMenuShortcut>
                                        ⌘]
                                    </ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuItem inset>
                                    Reload
                                    <ContextMenuShortcut>
                                        ⌘R
                                    </ContextMenuShortcut>
                                </ContextMenuItem>
                                <ContextMenuSub>
                                    <ContextMenuSubTrigger inset>
                                        More Tools
                                    </ContextMenuSubTrigger>
                                    <ContextMenuSubContent className="w-48">
                                        <ContextMenuItem>
                                            Save Page As...
                                            <ContextMenuShortcut>
                                                ⇧⌘S
                                            </ContextMenuShortcut>
                                        </ContextMenuItem>
                                        <ContextMenuItem>
                                            Create Shortcut...
                                        </ContextMenuItem>
                                        <ContextMenuItem>
                                            Name Window...
                                        </ContextMenuItem>
                                        <ContextMenuSeparator />
                                        <ContextMenuItem>
                                            Developer Tools
                                        </ContextMenuItem>
                                    </ContextMenuSubContent>
                                </ContextMenuSub>
                                <ContextMenuSeparator />
                                <ContextMenuCheckboxItem checked>
                                    Show Bookmarks Bar
                                    <ContextMenuShortcut>
                                        ⌘⇧B
                                    </ContextMenuShortcut>
                                </ContextMenuCheckboxItem>
                                <ContextMenuCheckboxItem
                                    onClick={() => {
                                        handleButtonClick()
                                    }}
                                >
                                    Download
                                </ContextMenuCheckboxItem>
                                <ContextMenuSeparator />
                                <ContextMenuRadioGroup value="pedro">
                                    <ContextMenuLabel inset>
                                        People
                                    </ContextMenuLabel>
                                    <ContextMenuSeparator />
                                    <ContextMenuRadioItem value="pedro">
                                        Pedro Duarte
                                    </ContextMenuRadioItem>
                                    <ContextMenuRadioItem value="colm">
                                        Colm Tuite
                                    </ContextMenuRadioItem>
                                </ContextMenuRadioGroup>
                            </ContextMenuContent>
                        </ContextMenu>
                        <UploadImageModal />
                    </form>
                </FormProvider>
            </div>
        </div>
    )
}

export default ResumePage
