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

    // const watchValue = (index: number | null, field: string, sub_field?: string) => {
    //     if(!index ){
    //         return watchingValue?.[field]?.[sub_field]

    //     }
    //     if (sub_field) {
    //         return watchingValue?.[index]?.[field]?.[sub_field]
    //     }
    //     return watchingValue?.[index]?.[field]
    // }

    // const watchValue = (index: number | null, field: string, sub_field?: string) => {
    //     if(!index ){
    //         return watchingValue?.[field]?.[sub_field]

    //     }
    //     if (sub_field) {
    //         return watchingValue?.[index]?.[field]?.[sub_field]
    //     }
    //     return watchingValue?.[index]?.[field]
    // }

    // const watchValue = ([...props]) => {
    //     const string = props.reduce((acc, cur) => {

    //         return acc + '.' + cur
    //     })

    //     console.log(string)
    //     console.log(watchingValue?.[0])

    //     return watchingValue?.[string]
    // }

    return { watchValue }
}
