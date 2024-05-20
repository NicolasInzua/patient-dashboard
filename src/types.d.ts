import { MODAL_TITLES } from './constants'

export interface User {
	id: string
	createdAt: Date
	name: string
	avatar: string
	description: string
	website: string
	params?: Params
}

interface Params {
	description: string
}

export type UserForm = Omit<User, 'id' | 'createdAt'>
export type UserFormParam = User | UserForm
export type UserFormPartial = Partial<UserForm>

export type ModalTitle = (typeof MODAL_TITLES)[keyof typeof MODAL_TITLES]

export type ValidationRules = {
	[key: string]: (value: string) => boolean
}
