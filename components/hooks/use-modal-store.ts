import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { openModal } from '@/redux/slices/modal-slice'

export type IModalType = 'changeLayout' | 'openRearrenge' | 'stylesDrawer'

export const useModal = () => {
    const dispatch = useAppDispatch()
    const { type, data, isOpen } = useAppSelector((state) => state.modal)

    const onOpen = ({
        type,
        data,
    }: {
        type: IModalType
        data?: Record<string, unknown>
    }) => {
        dispatch(openModal({ type: type, data: data }))
    }

    const onClose = () => {
        dispatch(openModal({ type: null, data: {} }))
    }
    return { type, data, isOpen, onOpen, onClose }
}
