// 'use client'

// import { resumeFormData, resumeLayout } from '@/lib/resume-data'
// import React from 'react'

// const TestComponent = () => {
//     function packItems(data) {
//         let fullArray = []
//          resumeLayout.map((layout) => {
//             let column = layout.column

//             let result = []
//             let totalHeight = 0
//             let currentPage = 0

//             const items = layout.items
//             items.forEach((item) => {
//                 let obj = data[item.key]

//                 let titleHeight = obj.height
//                 totalHeight += titleHeight
//                 // console.log(obj)
//                 let currentItemsIndex = []
//                 let currentHeight = titleHeight

//                 for (let i = 0; i < obj.items?.length; i++) {
//                     let itemHeight = obj.items[i].height
//                     totalHeight += itemHeight
//                     currentItemsIndex.push(i)
//                     currentHeight += itemHeight

//                     if (totalHeight >= 1000) {
//                         // The current page exceeds the threshold, create a new page
//                         currentItemsIndex.pop()
//                         currentHeight -= itemHeight

//                         result.push({
//                             column: column, // Adjust as needed
//                             height: currentHeight,
//                             itemIndex: currentItemsIndex,
//                             page: currentPage,
//                             record: 'LayoutItem', // Adjust as needed
//                             sectionIndex: obj.key,
//                         })

//                         // Reset for the new page
//                         currentHeight = 0
//                         currentItemsIndex = []
//                         currentItemsIndex.push(i)
//                         currentPage++

//                         totalHeight = itemHeight + titleHeight
//                         currentHeight = itemHeight + titleHeight

//                         if (i === obj.items.length - 1) {
//                             // If this is the last item, create a new page for it
//                             result.push({
//                                 column: column, // Adjust as needed
//                                 height: currentHeight,
//                                 itemIndex: currentItemsIndex,
//                                 page: currentPage,
//                                 record: 'LayoutItem', // Adjust as needed
//                                 sectionIndex: obj.key,
//                             })
//                             currentHeight = 0
//                         }
//                     } else if (
//                         totalHeight < 1000 &&
//                         i === obj.items.length - 1
//                     ) {
//                         // If this is the last item and the total height is below the threshold, create a page
//                         result.push({
//                             column: column, // Adjust as needed
//                             height: currentHeight,
//                             itemIndex: currentItemsIndex,
//                             page: currentPage,
//                             record: 'LayoutItem', // Adjust as needed
//                             sectionIndex: item.key,
//                         })
//                     }
//                 }
//             })
//             const newResult = result.filter((res) => res.itemIndex.length)
//             fullArray.push(...newResult)
//         })
//         console.log(fullArray)

//         // let result = []
//         // let totalHeight = 0
//         // let currentPage = 0

//         // for (const obj of datas) {
//         // Object.keys(data).forEach((key) => {
//         //     const obj = data[key]
//         //     if (key === 'style' || key === 'header') {
//         //         return
//         //     }
//         //     // if (obj.enabled) {
//         //     let titleHeight = obj.height
//         //     totalHeight += titleHeight
//         //     // console.log(obj)
//         //     let currentItemsIndex = []
//         //     let currentHeight = titleHeight

//         //     for (let i = 0; i < obj.items?.length; i++) {
//         //         let itemHeight = obj.items[i].height
//         //         totalHeight += itemHeight
//         //         currentItemsIndex.push(i)
//         //         currentHeight += itemHeight

//         //         if (totalHeight >= 1000) {
//         //             // The current page exceeds the threshold, create a new page
//         //             currentItemsIndex.pop()
//         //             currentHeight -= itemHeight

//         //             result.push({
//         //                 column: 0, // Adjust as needed
//         //                 height: currentHeight,
//         //                 itemIndex: currentItemsIndex,
//         //                 page: currentPage,
//         //                 record: 'LayoutItem', // Adjust as needed
//         //                 sectionIndex: obj.key,
//         //             })

//         //             // Reset for the new page
//         //             currentHeight = 0
//         //             currentItemsIndex = []
//         //             currentItemsIndex.push(i)
//         //             currentPage++

//         //             totalHeight = itemHeight + titleHeight
//         //             currentHeight = itemHeight + titleHeight

//         //             if (i === obj.items.length - 1) {
//         //                 // If this is the last item, create a new page for it
//         //                 result.push({
//         //                     column: 0, // Adjust as needed
//         //                     height: currentHeight,
//         //                     itemIndex: currentItemsIndex,
//         //                     page: currentPage,
//         //                     record: 'LayoutItem', // Adjust as needed
//         //                     sectionIndex: obj.key,
//         //                 })
//         //                 currentHeight = 0
//         //             }
//         //         } else if (totalHeight < 1000 && i === obj.items.length - 1) {
//         //             // If this is the last item and the total height is below the threshold, create a page
//         //             result.push({
//         //                 column: 0, // Adjust as needed
//         //                 height: currentHeight,
//         //                 itemIndex: currentItemsIndex,
//         //                 page: currentPage,
//         //                 record: 'LayoutItem', // Adjust as needed
//         //                 sectionIndex: key,
//         //             })
//         //         }
//         //     }
//         //     // }
//         // })

//         // }

//         // Filter out pages without items
//         // const newResult = result.filter((res) => res.itemIndex.length)

//         // return newResult
//     }

//     const exData = packItems(resumeFormData)
//     // console.log(exData)

//     return <div>TestComponent</div>
// }

// export default TestComponent

'use client'

import React from 'react'

const Test = () => {
    return <div>Test</div>
}

export default Test
