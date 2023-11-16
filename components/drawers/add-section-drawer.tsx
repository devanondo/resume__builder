'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
    addSectionToEditor,
    removeSectionFromEditor,
} from '@/redux/slices/resume-layout-slice'
import { Check, Minus, Plus } from 'lucide-react'
import { useModal } from '../hooks/use-modal-store'
import { Button } from '../ui/button'
import { Card, CardContent, CardTitle } from '../ui/card'
import { ItemsComponents } from '../resume-builder/types/resume-layout-types'
import ResumeHeader from '../resume-builder/header/resume-header'
import ResumeSummery from '../resume-builder/summery/resume-summery'
import ExperienceSummery from '../resume-builder/experience/experience-summery'
import SkillsSection from '../resume-builder/skills/skills-section'
import StrengthSection from '../resume-builder/strengths/strength-section'
import EducationItems from '../resume-builder/education/education-items'

const ResumeAddSectionDrawer = () => {
    const { isOpen, onClose, type } = useModal()

    const { resumeLayout } = useAppSelector((state) => state.layout)
    const dispatch = useAppDispatch()

    const isDrawerOpen = isOpen && type === 'resumeAddSection'
    const handleClose = () => {
        onClose()
    }

    function isExixtSection(key: string) {
        for (const group of resumeLayout) {
            for (const item of group?.items) {
                if (item.key === key) {
                    return true
                }
            }
        }
        return false
    }

    const itemsComponents: ItemsComponents = {
        header: <ResumeHeader />,
        summerySection: <ResumeSummery />,
        experienceSummary: <ExperienceSummery />,
        skills: <SkillsSection />,
        strength: <StrengthSection />,
        education: <EducationItems />,
    }

    return (
        <Sheet open={isDrawerOpen} onOpenChange={handleClose}>
            <SheetContent className="overflow-y-auto" side="left">
                <SheetHeader>
                    <SheetTitle className="text-center text-2xl">
                        Add a new section!
                    </SheetTitle>
                    <SheetDescription className="text-center">
                        Click on a section to add it to your resume!
                    </SheetDescription>
                </SheetHeader>

                <div className=" mt-5 flex flex-col gap-y-2">
                    {Object.keys(itemsComponents).map((key, i: number) => {
                        return (
                            <Card
                                key={key + i}
                                className=" border rounded-md overflow-hidden transition-all duration-300 shadow-md"
                            >
                                <CardContent className="w-full h-[160px] relative group p-0">
                                    <div className="top-0 left-0 w-full h-full bg-black bg-opacity-40 opacity-0 flex items-center justify-center absolute   transition-all duration-300 cursor-pointer invisible group-hover:visible group-hover:opacity-100">
                                        {isExixtSection(key) ? (
                                            <Button
                                                onClick={() => {
                                                    dispatch(
                                                        removeSectionFromEditor(
                                                            { key: key }
                                                        )
                                                    )
                                                }}
                                            >
                                                <Minus /> Remove form Resume
                                            </Button>
                                        ) : (
                                            <Button
                                                onClick={() => {
                                                    dispatch(
                                                        addSectionToEditor({
                                                            group: 'Group-1',
                                                            value: {
                                                                height: 1,
                                                                key: key as keyof ItemsComponents,
                                                                position: 1,
                                                                title: key,
                                                            },
                                                        })
                                                    )
                                                }}
                                                disabled={key === 'header'}
                                            >
                                                <Plus /> Add to resume
                                            </Button>
                                        )}
                                    </div>

                                    {isExixtSection(key) && (
                                        <div className="w-14 h-14 -top-7 -right-7 bg-emerald-500 absolute z-10 rotate-45 flex items-end justify-center text-white">
                                            <Check
                                                className="-rotate-45 w-4"
                                                strokeWidth={4}
                                            />
                                        </div>
                                    )}
                                </CardContent>

                                <CardTitle className="w-full bg-emerald-500 text-white text-center py-2 text-lg font-[500] capitalize">
                                    {key}
                                </CardTitle>
                            </Card>
                        )
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ResumeAddSectionDrawer
