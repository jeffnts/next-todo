import { useTranslation } from 'react-i18next'

import { Modal } from 'components'

type Props = {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    isLoading?: boolean
}

export function ChangePasswordModal(props: Props){
    const { isOpen, onClose, onConfirm, isLoading } = props

    const { t } = useTranslation()

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={t('PROFILE.CHANGE_PASSWORD_TITLE')}
        >
            <div className='mt-5'>
                { t('PROFILE.CHANGE_PASSWORD_TEXT')}
            </div>

            <div className='flex justify-end gap-8 mt-6'>
                <button 
                    className={`btn btn-outline ${isLoading && 'disabled'}`}
                    onClick={onConfirm}
                >
                    { t('PROFILE.CHANGE_PASSWORD_BUTTON_CONFIRM') }
                </button>

                <button
                    className={`btn btn-error ${isLoading && 'disabled'}`}
                    onClick={onClose}
                >
                    { t('PROFILE.CHANGE_PASSWORD_BUTTON_CANCEL') }
                </button>
            </div>
        </Modal>
    )
}