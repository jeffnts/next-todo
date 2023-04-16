'use client'

import { useTranslation } from 'react-i18next'

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

    const { t } = useTranslation()

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={title || t('MODAL.TITLE')}
        >
            <div className='mt-5'>
                { description || t('MODAL.DESCRIPTION')}
            </div>

            <div className='flex justify-end gap-8 mt-6'>
                <button 
                    className={`btn btn-outline ${isLoading && 'disabled'}`}
                    onClick={onClose}
                >
                    { t('LISTS.CANCEL') }
                </button>

                <button
                    className={`btn btn-error ${isLoading && 'loading'}`}
                    onClick={onConfirm}
                >
                    { t('LISTS.REMOVE') }
                </button>
            </div>
        </Modal>
    )
}