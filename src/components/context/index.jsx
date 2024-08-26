import { useState, useEffect, createContext } from 'react'

export const ShopiContext = createContext();

export const ShopiProvider = ({ children }) => {
	
	const [items, setItems] = useState([])
	const [modalStatus, setModal] = useState(false)

	const openModal = () => setModal(true)
	const closeModal = () => setModal(false)
	
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(response => response.json())
			.then(data => setItems(data))
			.catch(error => console.error('Error: ', error));
	}, []);
	
	return (
		<ShopiContext.Provider value={{
			items,
			modalStatus,
			openModal,
			closeModal,
		}}>
			{children}
		</ShopiContext.Provider>
	)
}

export default ShopiProvider;
