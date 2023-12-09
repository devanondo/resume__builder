import { useFormContext } from 'react-hook-form'
import { RefObject } from 'react'

export const useSetHeight = ({
    divRef,
    name,
}: {
    divRef: RefObject<HTMLDivElement>
    name: string
}) => {
    const { watch, setValue } = useFormContext()

    if (divRef && divRef.current) {
        const divHeight = divRef.current.offsetHeight
        const height = watch(name)

        if (divHeight !== height) {
            setValue(name, divHeight)
        }
    }
}
