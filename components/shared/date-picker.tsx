/* eslint-disable no-unused-vars */
'use client'

import React from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

interface PickDateProps extends Omit<ReactDatePickerProps, 'onChange'> {
    year?: boolean
    value: string
    onChange: (
        value: any,
        event?: React.SyntheticEvent<any> | undefined
    ) => void
    className?: string
}

const PickDate: React.FC<PickDateProps> = ({
    year,
    value,
    onChange,
    className,
    ...props
}) => {
    const date = new Date(value) || new Date()

    return (
        <DatePicker
            className={className}
            selected={date}
            dateFormat={year ? 'yyyy' : 'MM/yyyy'}
            onChange={(e) => {
                onChange(moment(e).format())
            }}
            showYearPicker={year}
            showMonthYearPicker={!year}
            {...props}
        />
    )
}

export default PickDate
