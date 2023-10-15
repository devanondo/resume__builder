/* eslint-disable no-unused-vars */
'use client'

import React from 'react'
import { format } from 'date-fns'

interface MonthYearPickerProps {
    selectedDate: Date
    onDateChange: (date: Date) => void
}

const MonthYearPicker: React.FC<MonthYearPickerProps> = ({
    selectedDate,
    onDateChange,
}) => {
    const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newMonth = parseInt(e.target.value, 10)
        const newDate = new Date(selectedDate)
        newDate.setMonth(newMonth)
        onDateChange(newDate)
    }

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newYear = parseInt(e.target.value, 10)
        const newDate = new Date(selectedDate)
        newDate.setFullYear(newYear)
        onDateChange(newDate)
    }

    return (
        <div>
            <select
                value={selectedDate.getMonth()}
                onChange={handleMonthChange}
            >
                {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i}>
                        {format(
                            new Date(selectedDate.getFullYear(), i, 1),
                            'MMMM'
                        )}
                    </option>
                ))}
            </select>
            <select
                value={selectedDate.getFullYear()}
                onChange={handleYearChange}
            >
                {Array.from({ length: 10 }, (_, i) => (
                    <option key={i} value={selectedDate.getFullYear() + i - 5}>
                        {selectedDate.getFullYear() + i - 5}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default MonthYearPicker
