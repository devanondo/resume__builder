'use client'

import Text from '@/components/shared/Text'
import { useAppDispatch } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { Fragment } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import SkillsKeys from './skills-keys'

const SkillsSection = () => {
    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    // const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields } = useFieldArray({
        name: 'skills.items',
        control,
    })

    const name = 'skills.items'

    return (
        <div>
            <Controller
                name={'skills.name' as const}
                control={control}
                defaultValue=""
                render={({ field: f }) => (
                    <Text
                        className="text-2xl font-bold uppercase rounded -mb-[10px]"
                        {...f}
                    />
                )}
            />
            <div className="relative">
                {fields.map((field, i) => (
                    <Fragment key={field.id}>
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
                            <Controller
                                key={field.id}
                                name={`${name}[${i}].title` as const}
                                control={control}
                                defaultValue=""
                                render={({ field: f }) => (
                                    <Text
                                        className="text-md font-semibold "
                                        {...f}
                                    />
                                )}
                            />

                            <SkillsKeys name={`${name}.${i}.keys`} />
                        </div>

                        {/* {groupPopoverKey === name + i && (
                            <SkillsPopover
                                append={append}
                                fields={fields}
                                index={i}
                                name={name}
                                remove={remove}
                            />
                        )} */}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default SkillsSection
