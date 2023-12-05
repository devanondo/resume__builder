import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

export const useDndData = ({ name }: { name: string }) => {
    const { watch } = useFormContext()
    // const { fields } = useFieldArray({
    //     name,
    //     control,
    // })
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        setData(watch(name))
    }, [watch, name])

    return { data }
}
