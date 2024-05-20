interface Props {
	setOpenModal: (open: boolean) => void
}

export function Header({ setOpenModal }: Props) {
	return (
		<header className="mb-6 flex flex-row items-center justify-between sticky top-0 p-6 bg-white border-b border-gray-200">
			<h1 className="text-4xl font-extrabold"> Patient Data Management </h1>
			<button
				onClick={() => setOpenModal(true)}
				className="text-white w-fit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>
				Add Patient
			</button>
		</header>
	)
}
