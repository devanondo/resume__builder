/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { resumeFormData } from '@/lib/resume-data'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import NavigationSidebar from '../navigation/navigation-sidebar'
import { BuilderModalDraweProvider } from '../provider/builder-modal-drawer-provider'
import ResumePage from './ResumePage'
import Navigation from './navbar/navigation-bar'

const ResumePagewrapper = () => {
    const methods = useForm()

    function onSubmit(values: any) {
        console.log(values)
    }

    useEffect(() => {
        if (Object.keys(resumeFormData)?.length) {
            methods.reset(resumeFormData)
        }
    }, [])

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
