'use client'

import SkillsPopover from '@/components/popover/skills-popover'
import { Input } from '@/components/ui/input'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { showPopover } from '@/redux/slices/pop-slice'
import { Fragment } from 'react'
import { Controller, useFieldArray, useFormContext } from 'react-hook-form'
import SkillsKeys from './skills-keys'

const SkillsSection = () => {
    const { control } = useFormContext()
    const dispatch = useAppDispatch()
    const { groupPopoverKey } = useAppSelector((state) => state.popover)

    const { fields, append, remove } = useFieldArray({
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
                    <Input
                        className="text-3xl font-bold uppercase border-b-[5px] border-black"
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
                                    <Input
                                        className="text-md font-semibold "
                                        {...f}
                                    />
                                )}
                            />

                            <SkillsKeys name={`${name}.${i}.keys`} />
                        </div>

                        {groupPopoverKey === name + i && (
                            <SkillsPopover
                                append={append}
                                fields={fields}
                                index={i}
                                name={name}
                                remove={remove}
                            />
                        )}
                    </Fragment>
                ))}
            </div>
        </div>
    )
}

export default SkillsSection
