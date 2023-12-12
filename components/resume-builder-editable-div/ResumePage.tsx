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
import ResumeHeader from './header/resume-header'
import SkillsSection from './skills/skills-section'
import StrengthSection from './strengths/strength-section'
import ResumeSummery from './summery/resume-summery'

// import { resumeLayout } from '@/lib/resume-datares'
import { saveResume } from '@/redux/slices/resume-slice'
import { useModal } from '../hooks/use-modal-store'
import NavigationSidebar from '../navigation/navigation-sidebar'
import { BuilderModalDraweProvider } from '../provider/builder-modal-drawer-provider'
import DeclarationSection from './declaration/Declaretion'
import EducationItemsUpdate from './education/update/education-items-update'
import ExperienceItemsUpdate from './experience/update/experience-items-update'
import LanguageSection from './languages/language-section'
import Navigation from './navbar/navigation-bar'
import ProjectsItems from './projects/projects'
import ReferencesSection from './references/references'

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

    const dispatch = useAppDispatch()

    const debouncedUpdate = debounce(() => {
        const data = watch()
        dispatch(saveResume(data as any))
    }, 5000)

    useEffect(() => {
        debouncedUpdate()

        return debouncedUpdate.cancel
    }, [watch, debouncedUpdate])

    const parentClick = () => {
        dispatch(showPopover(null))
    }

    const { resumeLayout } = useAppSelector((state) => state.layout)
    const pageMargin = watch('style.pageMarginOption')

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

    const wathcData = watch()

    if (!isMounted) return null

    const componentProvider = (key: string, itemIndex: number[]) => {
        switch (key) {
            case 'educations':
                return <EducationItemsUpdate name={key} itemIndex={itemIndex} />
            case 'experienceSummary':
                return (
                    <ExperienceItemsUpdate name={key} itemIndex={itemIndex} />
                )
            case 'summerySection':
                return <ResumeSummery name={key} itemIndex={itemIndex} />
            case 'strengths':
                return <StrengthSection name={key} itemIndex={itemIndex} />

            case 'projects':
                return <ProjectsItems name={key} itemIndex={itemIndex} />

            case 'languages':
                return <LanguageSection name={key} itemIndex={itemIndex} />

            case 'skills':
                return <SkillsSection name={key} itemIndex={itemIndex} />

            case 'declaration':
                return <DeclarationSection name={key} itemIndex={itemIndex} />

            case 'references':
                return <ReferencesSection name={key} itemIndex={itemIndex} />
        }
    }

    type ResultTypeArr = {
        column: number
        height: number
        itemIndex: number[]
        page: number
        record: string
        sectionIndex: string
    }

    function packItems(data: any) {
        let fullArray: ResultTypeArr[] = []

        const margin = data['style'].pageMarginOption * 2

        const headerHeight = data['header'].height + margin || 0

        let totalHeight = 0
        let currentPage = 0

        resumeLayout?.map((layout) => {
            let column = layout.column

            let result: ResultTypeArr[] = []
            if (column !== 12) {
                totalHeight = 0
                currentPage = 0
            }

            const compareHeight =
                currentPage === 0 ? 1300 - headerHeight : 1300 - margin

            const items = layout.items
            items.forEach((item) => {
                let obj = data[item.key]

                if (!obj.enabled) {
                    return
                }

                let titleHeight = obj.height
                totalHeight += titleHeight
                // console.log(obj)
                let currentItemsIndex = []
                let currentHeight = titleHeight

                for (let i = 0; i < obj.items?.length; i++) {
                    let itemHeight = obj.items[i].height
                    totalHeight += itemHeight
                    currentItemsIndex.push(i)
                    currentHeight += itemHeight

                    if (totalHeight >= compareHeight) {
                        currentItemsIndex.pop()
                        currentHeight -= itemHeight

                        result.push({
                            column: column, // Adjust as needed
                            height: currentHeight,
                            itemIndex: currentItemsIndex,
                            page: currentPage,
                            record: 'LayoutItem', // Adjust as needed
                            sectionIndex: item.key,
                        })

                        // Reset for the new page
                        currentHeight = 0
                        currentItemsIndex = []
                        currentItemsIndex.push(i)
                        currentPage++

                        totalHeight = itemHeight + titleHeight
                        currentHeight = itemHeight + titleHeight

                        if (i === obj.items.length - 1) {
                            // If this is the last item, create a new page for it
                            result.push({
                                column: column, // Adjust as needed
                                height: currentHeight,
                                itemIndex: currentItemsIndex,
                                page: currentPage,
                                record: 'LayoutItem', // Adjust as needed
                                sectionIndex: item.key,
                            })
                            currentHeight = 0
                        }
                    } else if (
                        totalHeight < compareHeight &&
                        i === obj.items.length - 1
                    ) {
                        // If this is the last item and the total height is below the threshold, create a page
                        result.push({
                            column: column, // Adjust as needed
                            height: currentHeight,
                            itemIndex: currentItemsIndex,
                            page: currentPage,
                            record: 'LayoutItem', // Adjust as needed
                            sectionIndex: item.key,
                        })
                    }
                }
            })
            const newResult = result.filter((res) => res.itemIndex.length)
            fullArray.push(...newResult)
        })

        return fullArray
    }

    function getGroupedData(array: ResultTypeArr[]) {
        const order: string[] = [] // To maintain the order of pages
        const groupedData = array.reduce((result: any, item: any) => {
            const pageKey = 'page_' + item.page.toString()
            const columnKey = 'column_' + item.column.toString()

            if (!result[pageKey]) {
                result[pageKey] = {}
                order.push(pageKey)
            }

            if (!result[pageKey][columnKey]) {
                result[pageKey][columnKey] = []
            }

            result[pageKey][columnKey].push(item)
            return result
        }, {})

        // Convert the result to an array maintaining order
        const resultArray = order.map((pageKey) => {
            const columns = Object.keys(groupedData[pageKey]).map(
                (columnKey) => {
                    const comData = {
                        [columnKey]: groupedData[pageKey][columnKey],
                    }
                    return comData
                }
            )
            return { [pageKey]: columns }
        })

        return resultArray
    }

    const exData = packItems(wathcData)
    const groupData = getGroupedData(exData)
    console.log(exData)
    return (
        <>
            <div className="hidden md:!flex h-fit left-4  top-20 w-fit z-30 flex-col fixed inset-y-0">
                <NavigationSidebar onSave={handleButtonClick} />
            </div>

            <div className=" h-full">
                <Navigation />
                <div className="relative flex items-start justify-center py-16">
                    <div>
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="w-full pt-16"
                        >
                            <ContextMenu>
                                <ContextMenuTrigger
                                    onContextMenu={() => {
                                        if (
                                            summeryPopoverKey ||
                                            groupPopoverKey
                                        ) {
                                            parentClick()
                                        }
                                    }}
                                    className="bg-red-100"
                                >
                                    <div
                                        id="resume-builder"
                                        onClick={parentClick}
                                        ref={divRef}
                                    >
                                        <div className="">
                                            {groupData.map((page, i) => {
                                                // page should be start form here This is a single page
                                                return (
                                                    <div
                                                        style={{
                                                            padding: pageMargin,
                                                        }}
                                                        className={cn(
                                                            `w-[940px] border mb-10  h-[1325px] bg-white z-0, resume__builder__pages`,
                                                            summeryPopoverKey &&
                                                                'bg-[#dddce0]',
                                                            groupPopoverKey &&
                                                                'bg-[#dddce0]'
                                                        )}
                                                        key={i}
                                                    >
                                                        {i === 0 && (
                                                            <ResumeHeader />
                                                        )}

                                                        <div
                                                            key={i}
                                                            className="grid grid-cols-12 gap-x-2 "
                                                        >
                                                            {page[
                                                                `page_${i}`
                                                            ]?.map(
                                                                (columns) => {
                                                                    return Object.keys(
                                                                        columns
                                                                    )?.map(
                                                                        (
                                                                            key,
                                                                            i
                                                                        ) => {
                                                                            // separet columns with col-span

                                                                            return (
                                                                                <div
                                                                                    key={
                                                                                        key +
                                                                                        i
                                                                                    }
                                                                                    style={{
                                                                                        gridColumn: `span ${
                                                                                            key.split(
                                                                                                '_'
                                                                                            )[1]
                                                                                        }`,
                                                                                    }}
                                                                                >
                                                                                    {columns[
                                                                                        key
                                                                                    ]?.map(
                                                                                        (
                                                                                            item: any,
                                                                                            i: number
                                                                                        ) => {
                                                                                            return (
                                                                                                <div
                                                                                                    key={
                                                                                                        i +
                                                                                                        item.sectionIndex
                                                                                                    }
                                                                                                >
                                                                                                    {componentProvider(
                                                                                                        item.sectionIndex,
                                                                                                        item.itemIndex
                                                                                                    )}
                                                                                                </div>
                                                                                            )
                                                                                        }
                                                                                    )}
                                                                                </div>
                                                                            )
                                                                        }
                                                                    )
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </ContextMenuTrigger>
                                <ContextMenuContent className="w-64">
                                    <ContextMenuItem inset disabled>
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
                                    <ContextMenuItem
                                        onClick={() => {
                                            window.location.reload()
                                        }}
                                        inset
                                    >
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
                                            <ContextMenuItem
                                                onClick={() => {
                                                    onOpen({
                                                        type: 'resumeAddSection',
                                                    })
                                                }}
                                            >
                                                Add Section
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                                onClick={() => {
                                                    onOpen({
                                                        type: 'changeLayout',
                                                    })
                                                }}
                                            >
                                                Templates
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                                onClick={() => {
                                                    onOpen({
                                                        type: 'openRearrenge',
                                                    })
                                                }}
                                            >
                                                Rearrange
                                            </ContextMenuItem>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem
                                                onClick={() => {
                                                    onOpen({
                                                        type: 'stylesDrawer',
                                                    })
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
                </div>
            </div>

            <BuilderModalDraweProvider />
        </>
    )
}

export default ResumePage
// function packItems(data: any) {
//     let fullArray: ResultTypeArr[] = []

//     const margin = data['style'].pageMarginOption * 2

//     const headerHeight = data['header'].height + margin || 0

//     resumeLayout.map((layout) => {
//         let column = layout.column

//         let result: ResultTypeArr[] = []
//         let totalHeight = 0
//         let currentPage = 0

//         const compareHeight = currentPage === 0 ? 1325 - headerHeight : 1325 - margin

//         const items = layout.items
//         items.forEach((item) => {
//             let obj = data[item.key]

//             let titleHeight = obj.height
//             totalHeight += titleHeight
//             // console.log(obj)
//             let currentItemsIndex = []
//             let currentHeight = titleHeight

//             for (let i = 0; i < obj.items?.length; i++) {
//                 let itemHeight = obj.items[i].height
//                 totalHeight += itemHeight
//                 currentItemsIndex.push(i)
//                 currentHeight += itemHeight

//                 if (totalHeight >= compareHeight) {
//                     currentItemsIndex.pop()
//                     currentHeight -= itemHeight

//                     result.push({
//                         column: column, // Adjust as needed
//                         height: currentHeight,
//                         itemIndex: currentItemsIndex,
//                         page: currentPage,
//                         record: 'LayoutItem', // Adjust as needed
//                         sectionIndex: item.key,
//                     })

//                     // Reset for the new page
//                     currentHeight = 0
//                     currentItemsIndex = []
//                     currentItemsIndex.push(i)
//                     currentPage++

//                     totalHeight = itemHeight + titleHeight
//                     currentHeight = itemHeight + titleHeight

//                     if (i === obj.items.length - 1) {
//                         // If this is the last item, create a new page for it
//                         result.push({
//                             column: column, // Adjust as needed
//                             height: currentHeight,
//                             itemIndex: currentItemsIndex,
//                             page: currentPage,
//                             record: 'LayoutItem', // Adjust as needed
//                             sectionIndex: item.key,
//                         })
//                         currentHeight = 0
//                     }
//                 } else if (totalHeight < compareHeight && i === obj.items.length - 1) {
//                     // If this is the last item and the total height is below the threshold, create a page
//                     result.push({
//                         column: column, // Adjust as needed
//                         height: currentHeight,
//                         itemIndex: currentItemsIndex,
//                         page: currentPage,
//                         record: 'LayoutItem', // Adjust as needed
//                         sectionIndex: item.key,
//                     })
//                 }
//             }
//         })
//         const newResult = result.filter((res) => res.itemIndex.length)
//         fullArray.push(...newResult)
//     })

//     // Group items based on the 'column' property
//     // const groupedData = fullArray.reduce((result, item) => {
//     //     const page = item.page
//     //     const column = item.column

//     //     if (!result[page]) {
//     //         result[page] = []
//     //     }

//     //     if (!result[page][column]) {
//     //         result[page][column] = []
//     //     }

//     //     result[page][column].push(item)
//     //     return result
//     // }, {})

//     // let gropD = []
//     // Object.keys(groupedData).forEach((key) => {
//     //     const obj = groupedData[key]
//     //     console.log(obj)
//     // })

//     // const groupedData = fullArray.reduce((result, item) => {
//     //     const pack = item.pack
//     //     const column = item.column

//     //     if (!result[pack]) {
//     //         result[pack] = []
//     //     }

//     //     const existingColumnGroup = result[pack].find(
//     //         (group) => group[0].column === column
//     //     )

//     //     if (existingColumnGroup) {
//     //         existingColumnGroup.push(item)
//     //     } else {
//     //         result[pack].push([{ column }, item])
//     //     }

//     //     return result
//     // }, {})

//     // console.log(groupedData)

//     return fullArray
// }
