import { useUpdateResumeMutation } from '@/redux/apis/resume.api'
import { useEffect, useState } from 'react'

export const useUpdateResumeData = () => {
    const [updateResume] = useUpdateResumeMutation()

    const [data, setData] = useState()

    useEffect(() => {
        updateResume(data)
    }, [data, updateResume])

    const updateData = (values: any) => {
        setData(values)
    }

    return { updateData }
}
