'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import StrengthPopover from '@/components/popover/strength-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { cn } from '@/lib/utils'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { User2 } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import Paragraph from '../components/paragraph-section'
import SectionTitle from '../components/section-title'
import SubTitle from '../components/sub-title-section'

const StrengthSection = () => {
    const name = 'strengths.items'

    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const iconMap = {
        team: <User2 className="w-6 h-6 mt-1" />,
    }
    const { watchValue } = useWatchForm({ name })

    return (
        <GroupItem popoverKey="strengths">
            <SectionTitle name={'strengths.name' as const} />

            <div className="">
                {fields.map((field: any, i) => (
                    <GroupItem
                        popoverKey={name + i}
                        className="relative"
                        key={field.id + i}
                    >
                        <div
                            className="w-full flex"
                            onClick={() => {
                                dispatch(
                                    showPopover({
                                        name: name + i,
                                        type: 'group__entry',
                                    })
                                )
                            }}
                        >
                            {watchValue[i]?.show_icon && (
                                <div className="mr-1">{iconMap['team']}</div>
                            )}
                            <div className="">
                                <SubTitle
                                    name={`${name}[${i}].name` as const}
                                    placeholder={field.placeholder || ''}
                                    className="text-md font-semibold "
                                />

                                {watchValue[i]?.description.enabled && (
                                    <Paragraph
                                        name={
                                            `${name}[${i}].description.text` as const
                                        }
                                        placeholder={
                                            field.description?.placeholder || ''
                                        }
                                        className={cn(
                                            'text-sm -mt-3',
                                            watchValue[i].description
                                                .italic_description && 'italic'
                                        )}
                                    />
                                )}
                            </div>
                        </div>

                        {groupPopoverKey === name + i && (
                            <StrengthPopover
                                append={append}
                                fields={fields}
                                index={i}
                                name={name}
                                remove={remove}
                            />
                        )}
                    </GroupItem>
                ))}
            </div>
        </GroupItem>
    )
}

export default StrengthSection
