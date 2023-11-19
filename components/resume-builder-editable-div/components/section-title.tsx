'use client'

import {
    FontSizeType,
    getFontSize,
} from '@/components/resume-styles/utils/font-design'
import { useAppSelector } from '@/redux/hooks'
import TextBox from './Editable'

const SectionTitle = ({
    name,
    placeholder,
}: {
    name: string
    placeholder: string
}) => {
    const { layoutStyles } = useAppSelector((state) => state.layout)
    const fontSize = getFontSize(layoutStyles.fontSize as FontSizeType).title
    const color = layoutStyles.primaryColor

    return (
        <>
            <TextBox
                name={name}
                className="px-2 font-bold uppercase rounded focus:bg-transparent"
                style={{
                    fontSize,
                    lineHeight: '26px',
                    color: color as string,
                }}
                placeholder={placeholder}
            />
            <div className="w-full px-2">
                <div
                    style={{
                        borderBottom: `2.5px solid ${color}`,
                    }}
                    className=""
                ></div>
            </div>
        </>
    )
}

export default SectionTitle
