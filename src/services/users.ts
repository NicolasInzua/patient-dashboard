import { type User } from '../types.d'
import { API_URL } from '../consts'

export async function fetchUsers(): Promise<User[]> {
	const response = await fetch(API_URL)
	if (!response.ok) {
		console.error('Error fetching users')
		return []
	}
	const users = (await response.json()) as User[]
	return users
}
