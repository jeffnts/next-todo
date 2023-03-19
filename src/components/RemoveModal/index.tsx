import { Modal } from 'components'

type Props = {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    title?: string
    description?: string
    isLoading?: boolean
}

export default function RemoveModal(props: Props){
    const { 
        isOpen, 
        onClose, 
        onConfirm,
        title, 
        description,
        isLoading } = props

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={title || 'Remover Item'}
        >
            <div className='mt-5'>
                { description || 'Tem certeza que deseja remover este item?'}
            </div>

            <div className='flex justify-end gap-8 mt-6'>
                <button 
                    className={`btn btn-outline ${isLoading && 'loading'}`}
                    onClick={onClose}
                >
                    Cancelar
                </button>

                <button
                    className={`btn btn-error ${isLoading && 'loading'}`}
                    onClick={onConfirm}
                >
                    Remover
                </button>
            </div>
        </Modal>
    )
}