/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */

'use client'

import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { debounce } from 'lodash'
import { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useReactToPrint } from 'react-to-print'
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from '../ui/context-menu'
import DeclarationSection from './declaration/Declaretion'
import EducationItems from './education/education-items'
import ExperienceSummery from './experience/experience-summery'
import ResumeHeader from './header/resume-header'
import LanguageSection from './languages/language-section'
import ProjectsItems from './projects/projects'
import ReferencesSection from './references/references'
import SkillsSection from './skills/skills-section'
import StrengthSection from './strengths/strength-section'
import ResumeSummery from './summery/resume-summery'
import { ItemsComponents } from './types/resume-layout-types'

import axios from 'axios'
import { toast } from 'sonner'
import { useModal } from '../hooks/use-modal-store'

const ResumePage = () => {
    const { summeryPopoverKey, groupPopoverKey } = useAppSelector(
        (state) => state.popover
    )
    const { onOpen } = useModal()
    const [isMounted, setIsMounted] = useState(false)
    const { watch } = useFormContext()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const itemsComponents: ItemsComponents = {
        header: <ResumeHeader />,
        summerySection: <ResumeSummery />,
        experienceSummary: <ExperienceSummery />,
        skills: <SkillsSection />,
        strengths: <StrengthSection />,
        educations: <EducationItems />,
        languages: <LanguageSection />,
        declaration: <DeclarationSection />,
        references: <ReferencesSection />,
        projects: <ProjectsItems />,
    }
    const dispatch = useAppDispatch()
    const refs = useRef<HTMLDivElement>(null)

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

    const saveToServer = async (values: any) => {
        try {
            await axios.patch('/api/resume', values)
            return 'Saved successfully!'
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                parentClick()
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => document.removeEventListener('keydown', handleKeyPress)
    })

    const debouncedUpdate = debounce(async () => {
        const data = watch()

        try {
            await toast.promise(saveToServer(data), {
                loading: 'Loading...',
                success: (data: any) => {
                    return data
                },
                error: 'Error',
            })
        } catch (error) {
            console.log(error)
        }
    }, 20000)

    useEffect(() => {
        debouncedUpdate()

        return debouncedUpdate.cancel
    }, [watch, debouncedUpdate])

    if (!isMounted) return null

    return (
        <div>
            <div onClick={(e) => e.stopPropagation()} className="w-full pt-16">
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
                                `w-[940px] border  h-[1325px] bg-white z-0`,
                                summeryPopoverKey && 'bg-[#dddce0]',
                                groupPopoverKey && 'bg-[#dddce0]'
                            )}
                            id="resume-builder"
                            onClick={parentClick}
                            ref={divRef}
                            style={{
                                padding: `${watch('style.pageMarginOption')}px`,
                            }}
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
                                            {item.items.map((cont, index) => {
                                                if (
                                                    !watch(
                                                        `${cont.key}.enabled`
                                                    )
                                                )
                                                    return

                                                return (
                                                    <div
                                                        datatype={cont.title}
                                                        key={index}
                                                    >
                                                        {
                                                            itemsComponents[
                                                                cont.key
                                                            ]
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-64">
                        <ContextMenuItem inset disabled>
                            Back
                            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem inset disabled>
                            Forward
                            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuItem
                            onClick={() => {
                                window.location.reload()
                            }}
                            inset
                        >
                            Reload
                            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                        </ContextMenuItem>
                        <ContextMenuSub>
                            <ContextMenuSubTrigger inset>
                                More Tools
                            </ContextMenuSubTrigger>
                            <ContextMenuSubContent className="w-48">
                                <ContextMenuItem
                                    onClick={() => {
                                        onOpen({ type: 'resumeAddSection' })
                                    }}
                                >
                                    Add Section
                                </ContextMenuItem>
                                <ContextMenuItem
                                    onClick={() => {
                                        onOpen({ type: 'changeLayout' })
                                    }}
                                >
                                    Templates
                                </ContextMenuItem>
                                <ContextMenuItem
                                    onClick={() => {
                                        onOpen({ type: 'openRearrenge' })
                                    }}
                                >
                                    Rearrange
                                </ContextMenuItem>
                                <ContextMenuSeparator />
                                <ContextMenuItem
                                    onClick={() => {
                                        onOpen({ type: 'stylesDrawer' })
                                    }}
                                >
                                    Colors & Designs
                                </ContextMenuItem>
                            </ContextMenuSubContent>
                        </ContextMenuSub>
                        <ContextMenuSeparator />

                        <ContextMenuCheckboxItem
                            onClick={() => {
                                handleButtonClick()
                            }}
                        >
                            Download
                        </ContextMenuCheckboxItem>
                        <ContextMenuSeparator />
                        <ContextMenuCheckboxItem
                            onClick={() => {
                                onOpen({ type: 'openRearrenge' })
                            }}
                        >
                            Rearrange
                        </ContextMenuCheckboxItem>
                        <ContextMenuCheckboxItem
                            onClick={() => {
                                onOpen({ type: 'stylesDrawer' })
                            }}
                        >
                            Design & Colors
                        </ContextMenuCheckboxItem>
                    </ContextMenuContent>
                </ContextMenu>
            </div>
        </div>
    )
}

export default ResumePage
