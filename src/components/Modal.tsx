import { type ModalTitle } from '../types.d'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

interface Props {
	open: boolean
	onClose: () => void
	title: ModalTitle
	children: React.ReactNode
}

export function Modal({ open, onClose, children, title }: Props) {
	return (
		<div
			className={`
      fixed inset-0 flex justify-center items-center transition-colors
      ${open ? 'visible bg-black/20' : 'invisible'}`}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`bg-white rounded-xl shadow p-6 transition-all w-full max-w-xl 
        ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
        `}
			>
				<div className="flex items-center justify-between mb-2 p-2 md:p-4 border-b rounded-t">
					<h3 className="text-xl font-semibold text-gray-900 ">{title}</h3>
					<button type="button" onClick={onClose}>
						<FontAwesomeIcon icon={faClose} />
					</button>
				</div>
				{children}
			</div>
		</div>
	)
}
