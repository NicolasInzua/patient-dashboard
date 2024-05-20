import { useState } from 'react'
import {
	type User,
	type UserFormPartial,
	type ValidationRules,
} from '../types.d'
import { ERRORS_MESSAGE } from '../consts'
import { omit } from 'lodash'

const validationRules: ValidationRules = {
	name: (value) => value.length >= 3,
	avatar: (value) =>
		value.startsWith('http') &&
		(value.endsWith('.png') || value.endsWith('.jpg')),
	description: (value) => value.length >= 10,
	website: (value) => value.startsWith('http') && value.endsWith('.com'),
	params: (value: string) => value.length >= 10,
}

export function useForm(initialState: UserFormPartial | User) {
	const [userForm, setUserForm] = useState(initialState)
	const [errors, setErrors] = useState<UserFormPartial>({})

	const isFormInvalid =
		Object.keys(userForm).length === 0 ||
		Object.values(errors).length > 0 ||
		Object.values(userForm).some((val) => val === '')

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target

		validateForm({ name, value })

		setUserForm((prevState) => ({
			...prevState,
			[name]:
				name === 'params' ? { ...prevState.params, description: value } : value,
		}))
	}

	const handleSetErrors = (name: keyof typeof ERRORS_MESSAGE) => {
		setErrors((prevState) => ({
			...prevState,
			[name]: ERRORS_MESSAGE[name],
		}))
	}

	const validateForm = ({ name, value }: { name: string; value: string }) => {
		const isValid = validationRules[name]?.(value)

		if (isValid) {
			const newErrors = omit(errors, name)
			setErrors(newErrors)
		} else {
			handleSetErrors(name as keyof typeof ERRORS_MESSAGE)
		}
	}

	return { userForm, errors, isFormInvalid, handleChange }
}
