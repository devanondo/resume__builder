/* eslint-disable react/display-name */
'use client'

import React, { forwardRef } from 'react'
import { Action, Props } from '../Action/Action'
import { GripHorizontal } from 'lucide-react'

export const Handle = forwardRef<HTMLButtonElement, Props>((props, ref) => {
    return (
        <Action
            ref={ref}
            cursor="grab"
            data-cypress="draggable-handle"
            {...props}
        >
            <GripHorizontal />
        </Action>
    )
})
