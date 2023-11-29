/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useGetResumeQuery } from '@/redux/apis/resume.api'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import NavigationSidebar from '../navigation/navigation-sidebar'
import { BuilderModalDraweProvider } from '../provider/builder-modal-drawer-provider'
import ResumePage from './ResumePage'
import Navigation from './navbar/navigation-bar'

const ResumePagewrapper = () => {
    const methods = useForm()

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
        return <>Loading...</>
    }

    return (
        <div className="h-full">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="hidden md:!flex h-full w-[72px] z-30 flex-col fixed inset-y-0">
                        <NavigationSidebar />
                    </div>

                    <div className="md:pl-[72px] h-full">
                        <Navigation />
                        <div className="relative flex items-start justify-center py-16">
                            <ResumePage />
                        </div>
                    </div>

                    <BuilderModalDraweProvider />
                </form>
            </FormProvider>
        </div>
    )
}

export default ResumePagewrapper
