import { useState, useEffect } from 'react'
import { type User, type UserForm } from '../types.d'
import { fetchUsers } from '../services/users'

export function useUsers() {
	const [users, setUsers] = useState<User[]>([])
	const [loading, setLoading] = useState(true)

	const handleAddPatient = (user: UserForm) => {
		const newPatient = {
			id: crypto.randomUUID(),
			createdAt: new Date(),
			...user,
		}

		// Here should be and API call to add the patient
		// If the API call is successful, the patient should be added to the list
		// If the API call fails, the patient should not be added to the list and an error should be shown to the user
		setUsers([...users, newPatient])
	}

	const handleEditPatient = (user: User) => {
		const newUsers = users.map((currentUser) => {
			if (currentUser.id === user.id) {
				return user
			}
			return currentUser
		})

		// Here should be and API call to edit the patient
		// If the API call is successful, the patient should be edited in the list
		// If the API call fails, the patient should not be edited in the list and an error should be shown to the user
		setUsers(newUsers)
	}

	useEffect(() => {
		setLoading(true)
		fetchUsers()
			.then((users) => {
				setLoading(false)
				setUsers(users)
			})
			.catch((err) => console.error(err))
	}, [])

	return { users, loading, handleAddPatient, handleEditPatient }
}
