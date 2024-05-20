import { useState } from 'react'
import { useUsers } from './hooks/useUsers'
import { Users } from './components/Users'
import { FormUser } from './components/FormUser'
import { MODAL_TITLES } from './consts'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { Modal } from './components/Modal'

function App() {
	const { users, loading, handleAddPatient, handleEditPatient } = useUsers()
	const [openModal, setOpenModal] = useState(false)

	return (
		<div className="min-h-screen mb-10">
			<Header setOpenModal={setOpenModal} />
			<main>
				{loading ? (
					<div className="flex flex-col items-center h-full">
						<Loader />
					</div>
				) : (
					<Users users={users} onEditPatient={handleEditPatient} />
				)}
				{openModal && (
					<Modal
						open={openModal}
						onClose={() => setOpenModal(false)}
						title={MODAL_TITLES.ADD}
					>
						<FormUser actionFunction={handleAddPatient} />
					</Modal>
				)}
			</main>
		</div>
	)
}

export default App
