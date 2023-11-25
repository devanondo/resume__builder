/* eslint-disable no-unused-vars */
'use client'

import { IResumeLayout } from '../resume-builder-editable-div/types/resume-layout-types'
import DragNDrop from './Manually/DragNDrop'
import './Style.scss'

interface DragDropProps {
    items: any
    dragEnd: (e: any, list: IResumeLayout[]) => void
}

export interface IGroup {
    title: string
    items: string[]
    column: number
}

const DragDrop = ({ items, dragEnd }: DragDropProps) => {
    return (
        <div className="App-header">
            <DragNDrop dragEnd={dragEnd} data={items} />
        </div>
    )
}

export default DragDrop
