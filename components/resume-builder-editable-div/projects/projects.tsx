'use client'

import { GroupItem } from '@/components/shared/wrapper'

import { TypographyInput } from '../components/Typography'
import ProjectItems from './project-items'

const ProjectsItems = () => {
    const name = 'projects.items'

    return (
        <GroupItem popoverKey="projects" className="pb-1">
            <TypographyInput
                placeholder="Projects"
                name={`projects.name` as const}
                type="title"
            />

            <ProjectItems name={name} />
        </GroupItem>
    )
}

export default ProjectsItems
