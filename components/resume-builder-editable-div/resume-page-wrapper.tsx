/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Loading from '@/app/(routes)/resume-builder/[userId]/loading'
import { useGetLayoutQuery } from '@/redux/apis/layout.api'
import { useGetResumeQuery } from '@/redux/apis/resume.api'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import ResumePage from './ResumePage'

const ResumePagewrapper = () => {
    const methods = useForm()
    useGetLayoutQuery(undefined)
    const resumeData = useGetResumeQuery(undefined)

    function onSubmit(values: any) {
        console.log(values)
    }

    const setNestedFormValues = (fieldValues: any, prefix = '') => {
        fieldValues = fieldValues ?? {}

        Object.keys(fieldValues).forEach((key) => {
            const fullKey = prefix ? `${prefix}.${key}` : key

            if (
                typeof fieldValues[key] === 'object' &&
                !Array.isArray(fieldValues[key])
            ) {
                // Recursively set nested values for objects
                setNestedFormValues(fieldValues[key], fullKey)
            } else {
                // Set value for non-nested fields
                methods.setValue(fullKey, fieldValues[key])
            }
        })
    }

    useEffect(() => {
        if (resumeData.data) {
            setNestedFormValues(resumeData.data)
            console.log(resumeData.data)
        }
    }, [resumeData.data])

    if (!resumeData.data) {
        return <Loading />
    }

    return (
        <div className="h-full">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <ResumePage />
                </form>
            </FormProvider>
        </div>
    )
}

export default ResumePagewrapper
