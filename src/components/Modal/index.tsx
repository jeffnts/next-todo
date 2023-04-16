type Props = {
    title: string
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export function Modal(props: Props){
    const { 
        title,
        isOpen,
        onClose,
        children } = props

    function handleClose(e: any){
        if(e.target.id === 'modal-wrapper') onClose()
    }
        
    return (
        <div>
            <input checked={isOpen} onChange={()=> {}} type="checkbox" id="modal " className="modal-toggle" />
            <label  
                className="modal cursor-pointer" 
                id='modal-wrapper'
                onClick={handleClose}
            >
                <label className="modal-box relative" htmlFor="">                    
                <label 
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                    onClick={onClose}
                >
                        ✕
                </label>
                    <h3 className="text-lg font-bold">
                        { title }
                    </h3>
                    <div>
                        { children }
                    </div>
                </label>
            </label>
        </div>
    )
}