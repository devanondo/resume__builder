/* eslint-disable no-unused-vars */
'use client'

import {
    AnimateLayoutChanges,
    defaultAnimateLayoutChanges,
    rectSortingStrategy,
} from '@dnd-kit/sortable'
import { useState } from 'react'
import { GridContainer } from '../dnd-kit/components/GridContainer'
import { Props } from '../dnd-kit/components/Sortable/Sortable'
import DragNDrop from './Manually/DragNDrop'
import './Style.scss'
import { IResumeLayout } from '../resume-builder/types/resume-layout'

interface DragDropProps {
    items: any
    updatedArray?: (array: any) => void
    dragEnd: (e: any, list: IResumeLayout[]) => void
}

// const items = [
//     {
//         title: 'Header',
//         column: 2,
//     },
//     {
//         title: 'Summery',
//         column: 2,
//     },
//     {
//         title: 'Experience',
//         column: 2,
//     },
//     {
//         title: 'Education',
//         column: 2,
//     },
//     {
//         title: 'Skills',
//         column: 1,
//     },
//     {
//         title: 'Strength',
//         column: 1,
//     },
// ]

export interface IGroup {
    title: string
    items: string[]
}

const DragDrop = ({ items, updatedArray, dragEnd }: DragDropProps) => {
    const props: Partial<Props> = {
        adjustScale: true,
        Container: (props: any) => <GridContainer {...props} columns={2} />,
        strategy: rectSortingStrategy,
        items,
        // items: ['One', 'Two', 'Three', 'Four'],
    }

    const animateLayoutChanges: AnimateLayoutChanges = (args) =>
        defaultAnimateLayoutChanges({ ...args, wasDragging: true })

    const [data, setData] = useState([
        { title: 'group 1', items: ['1', '2', '3'] },
        { title: 'group 2', items: ['4', '5'] },
    ])

    return (
        <div>
            {/* <Sortable
                {...props}
                animateLayoutChanges={animateLayoutChanges}
                measuring={{
                    droppable: { strategy: MeasuringStrategy.Always },
                }}
                wrapperStyle={({ column }) => {
                    if (column === 2) {
                        return {
                            gridRowStart: 'span 2',
                            gridColumnStart: 'span 2',
                        }
                    }

                    return {}
                }}
                removable
                handle
                updatedArray={updatedArray}
                reorderItems={arraySwap}
                getNewIndex={({ id, items, activeIndex, overIndex }) =>
                    arraySwap(items, activeIndex, overIndex).indexOf(id)
                }
            /> */}

            {/* <MultipleContainers /> */}

            <div className="App">
                <header className="App-header">
                    <DragNDrop dragEnd={dragEnd} data={items} />
                </header>
            </div>
        </div>
    )
}

export default DragDrop
