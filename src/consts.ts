export const API_URL =
	'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users' as const

export const MODAL_TITLES = {
	ADD: 'Add User',
	EDIT: 'Edit User',
} as const

export const ERRORS_MESSAGE = {
	name: 'Name must be at least 3 characters long',
	avatar: 'Invalid Avatar URL',
	description: 'Description must be at least 10 characters long',
	website: 'Invalid URL',
	params: {
		description: 'Description must be at least 10 characters long',
	},
} as const
