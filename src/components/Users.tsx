import { useState } from 'react'
import { type User } from '../types.d'
import { FormUser } from './FormUser'
import { MODAL_TITLES } from '../consts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Modal } from './Modal'

interface Props {
	users: User[]
	onEditPatient: (user: User) => void
}

export function Users({ users, onEditPatient }: Props) {
	const [userToEditId, setUserToEditId] = useState('')

	const isEditing = !!userToEditId

	const hasUsers = users?.length > 0

	if (!hasUsers) {
		return <p>No users found</p>
	}

	return (
		<section className="flex flex-col gap-5 m-auto max-w-screen-2xl">
			<ul className="grid grid-cols-auto-fill-350 w-full gap-4">
				{users.map(({ id, name, avatar, website, description, params }) => (
					<li key={id}>
						<label>
							<input
								className="peer/showLabel absolute scale-0"
								type="checkbox"
							/>
							<span className="block max-h-32 overflow-hidden rounded-lg border border-gray-200 px-4 py-0 shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-full">
								<div className="flex flex-row h-32 justify-between gap-2 items-center">
									<img
										src={avatar}
										className="w-24 h-24 rounded-full shadow-lg"
										alt={`Avatar of ${name}`}
									/>
									<div className="flex flex-col gap-1">
										<h4>{name}</h4>
										<a
											className="text-sm text-blue-600 truncate w-28 h-5"
											href={website}
										>
											{website}
										</a>
									</div>

									<div className="flex justify-end items-center gap-2 px-4 pt-4">
										<button onClick={() => setUserToEditId(id)}>
											<FontAwesomeIcon icon={faPenToSquare} />
										</button>
										<FontAwesomeIcon icon={faChevronDown} />
									</div>
								</div>
								<div className="flex flex-col gap-2 py-3">
									<p className="text-sm text-gray-600 ">
										<strong> Description: </strong>
										{description}
									</p>
									{params && (
										<p className="text-sm text-gray-500">
											<strong> Additional details: </strong>
											{params.description}
										</p>
									)}
								</div>
							</span>
						</label>
					</li>
				))}
			</ul>
			{isEditing && (
				<Modal
					open={isEditing}
					onClose={() => setUserToEditId('')}
					title={MODAL_TITLES.EDIT}
				>
					<FormUser
						initialValues={users.find(({ id }) => id === userToEditId)}
						actionFunction={(user) => onEditPatient(user as User)}
					/>
				</Modal>
			)}
		</section>
	)
}
