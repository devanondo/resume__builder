'use client'

import { useWatchForm } from '@/components/hooks/use-form-watch'
import LanguagePopover from '@/components/popover/language-popover'
import { GroupItem } from '@/components/shared/wrapper'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { useFieldArray, useFormContext } from 'react-hook-form'
import Paragraph from '../components/paragraph-section'
import Rating from '../components/rating'
import SectionTitle from '../components/section-title'
import SubHeading from '../components/sub-heading-section'

const LanguageSection = () => {
    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)
    const name = 'languages.items'

    const { fields, append, remove } = useFieldArray({
        name,
        control,
    })

    const { watchValue } = useWatchForm({ name })

    return (
        <GroupItem popoverKey="languages">
            <SectionTitle
                name={'languages.name' as const}
                placeholder="Languages"
            />

            {fields.map((field: any, i) => (
                <GroupItem
                    popoverKey={name + i}
                    key={field.id}
                    className="relative"
                >
                    <div
                        className="w-full"
                        onClick={() => {
                            dispatch(
                                showPopover({
                                    name: name + i,
                                    type: 'group__entry',
                                })
                            )
                        }}
                    >
                        <div className="flex items-center justify-between pr-2">
                            <div className="">
                                <SubHeading
                                    placeholder={field.placeholder}
                                    name={`${name}[${i}].name` as const}
                                    className="pb-0 px-2 leading-5"
                                />

                                <Paragraph
                                    placeholder={'Native'}
                                    name={`${name}[${i}].level` as const}
                                    className="py-0"
                                />
                            </div>

                            <Rating
                                type={watchValue[i]?.score?.type}
                                value={watchValue[i]?.score?.score}
                            />
                        </div>
                    </div>
                    {fields.length - 1 !== i ? (
                        <div className="w-full px-2">
                            <div className="border-b w-full border-dashed"></div>
                        </div>
                    ) : null}

                    {groupPopoverKey === name + i && (
                        <LanguagePopover
                            append={append}
                            fields={fields}
                            index={i}
                            name={name}
                            remove={remove}
                        />
                    )}
                </GroupItem>
            ))}
        </GroupItem>
    )
}

export default LanguageSection
