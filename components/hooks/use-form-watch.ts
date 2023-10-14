import { useEffect } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'

type WatchFormProps = {
    name: string
}

export const useWatchForm = ({ name }: WatchFormProps) => {
    const { control, watch } = useFormContext()

    useEffect(() => {
        const subscription = watch(() => {})
        return () => subscription.unsubscribe()
    }, [watch])

    const watchValue = useWatch({
        name,
        control,
    })

    return { watchValue }
}
