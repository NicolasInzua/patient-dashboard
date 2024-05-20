import { useForm } from '../hooks/useForm'
import { type UserFormPartial, type User, type UserFormParam } from '../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'

interface Props {
	initialValues?: User | UserFormPartial
	actionFunction: (user: UserFormParam) => void
}

export function FormUser({ initialValues = {}, actionFunction }: Props) {
	const { userForm, errors, isFormInvalid, handleChange } =
		useForm(initialValues)

	const [showAdditionalInfo, setShowAdditionalInfo] = useState(
		!!userForm.params
	)

	const notify = () =>
		toast.success('User saved successfully!', {
			position: 'top-right',
		})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (isFormInvalid) return
		actionFunction(userForm as UserFormParam)
		notify()
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="flex flex-col text-left gap-2">
				<div>
					<label className="label-form">Name</label>
					<input
						name="name"
						type="text"
						className="input-form"
						placeholder="Enter patient name"
						value={userForm.name || ''}
						onChange={handleChange}
					/>
					<div className="min-h-6">
						{errors.name && (
							<span className=" text-red-500 text-xs italic">
								{errors.name}
							</span>
						)}
					</div>
				</div>

				<div>
					<label className="label-form">Avatar</label>
					<input
						name="avatar"
						type="url"
						className="input-form"
						placeholder="Enter avatar URL"
						value={userForm.avatar || ''}
						onChange={handleChange}
					/>
					<div className="min-h-6">
						{errors.avatar && (
							<span className="text-red-500 text-xs italic">
								{errors.avatar}
							</span>
						)}
					</div>
				</div>

				<div>
					<label className="label-form">Description</label>
					<textarea
						name="description"
						className="input-form h-40"
						placeholder="Enter patient description"
						value={userForm.description || ''}
						onChange={handleChange}
					/>
					<div className="min-h-6">
						{errors.description && (
							<span className="text-red-500 text-xs italic">
								{errors.description}
							</span>
						)}
					</div>
				</div>

				<div>
					<label className="label-form">Website</label>
					<input
						name="website"
						type="url"
						className="input-form"
						placeholder="Enter website URL"
						value={userForm.website || ''}
						onChange={handleChange}
					/>
					<div className="min-h-6">
						{errors.website && (
							<span className="text-red-500 text-xs italic">
								{errors.website}
							</span>
						)}
					</div>
				</div>

				{showAdditionalInfo ? (
					<div>
						<label className="label-form">Additional Information</label>
						<textarea
							name="params"
							className="input-form"
							placeholder="Enter additional information"
							value={userForm.params?.description || ''}
							onChange={handleChange}
						/>
						<div className="min-h-6">
							{errors.params && (
								<span className="text-red-500 text-xs italic">
									{errors.params.description}
								</span>
							)}
						</div>
					</div>
				) : (
					<button
						type="button"
						onClick={() => {
							setShowAdditionalInfo(true)
						}}
						className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
					>
						<FontAwesomeIcon icon={faAdd} className="mr-2" />
						Add Information
					</button>
				)}

				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					disabled={isFormInvalid}
				>
					Save
				</button>
			</form>
			<div className="min-h-6">
				{isFormInvalid && (
					<span className="text-red-500 text-xs italic">
						Please fill all fields correctly
					</span>
				)}
			</div>
			<ToastContainer className="fixed left-full top-0 z-50" />
		</>
	)
}
