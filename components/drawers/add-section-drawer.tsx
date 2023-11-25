'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet'
import { Check, Minus, Plus } from 'lucide-react'
import { useWatchForm } from '../hooks/use-form-watch'
import { useModal } from '../hooks/use-modal-store'
import ProjectsItems from '../resume-builder-editable-div/projects/projects'
import DeclarationSection from '../resume-builder-editable-div/declaration/Declaretion'
import EducationItems from '../resume-builder-editable-div/education/education-items'
import ExperienceSummery from '../resume-builder-editable-div/experience/experience-summery'
import ResumeHeader from '../resume-builder-editable-div/header/resume-header'
import LanguageSection from '../resume-builder-editable-div/languages/language-section'
import ReferencesSection from '../resume-builder-editable-div/references/references'
import SkillsSection from '../resume-builder-editable-div/skills/skills-section'
import StrengthSection from '../resume-builder-editable-div/strengths/strength-section'
import ResumeSummery from '../resume-builder-editable-div/summery/resume-summery'
import { ItemsComponents } from '../resume-builder-editable-div/types/resume-layout-types'
import { Button } from '../ui/button'
import { Card, CardContent, CardTitle } from '../ui/card'
import { useFormContext } from 'react-hook-form'

const ResumeAddSectionDrawer = () => {
    const { isOpen, onClose, type } = useModal()

    const isDrawerOpen = isOpen && type === 'resumeAddSection'
    const handleClose = () => {
        onClose()
    }

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

    const AddRemoveButtons = ({ field }: { field: string }) => {
        const { watchValue: values } = useWatchForm({ name: field })

        const { setValue } = useFormContext()

        const changeAddRemove = (field: string, value: boolean) => {
            const name = `${field}.enabled`
            setValue(name, value)
        }

        return (
            <Card className=" border rounded-md overflow-hidden transition-all duration-300 shadow-md">
                <CardContent className="w-full h-[160px] relative group p-0">
                    <div className="top-0 left-0 w-full h-full bg-black bg-opacity-40 opacity-0 flex items-center justify-center absolute   transition-all duration-300 cursor-pointer invisible group-hover:visible group-hover:opacity-100">
                        {values?.enabled ? (
                            <Button
                                onClick={() => changeAddRemove(field, false)}
                                disabled={field === 'header'}
                            >
                                <Minus /> Remove form Resume
                            </Button>
                        ) : (
                            <Button
                                onClick={() => changeAddRemove(field, true)}
                                disabled={field === 'header'}
                            >
                                <Plus /> Add to resume
                            </Button>
                        )}
                    </div>

                    {values?.enabled && (
                        <div className="w-14 h-14 -top-7 -right-7 bg-emerald-500 absolute z-10 rotate-45 flex items-end justify-center text-white">
                            <Check className="-rotate-45 w-4" strokeWidth={4} />
                        </div>
                    )}
                </CardContent>

                <CardTitle className="w-full bg-emerald-500 text-white text-center py-2 text-lg font-[500] capitalize">
                    {field}
                </CardTitle>
            </Card>
        )
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
                        return <AddRemoveButtons key={key + i} field={key} />
                    })}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ResumeAddSectionDrawer
