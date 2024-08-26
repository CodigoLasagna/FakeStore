import { useState, useEffect, createContext } from 'react'

export const ShopiContext = createContext();

export const ShopiProvider = ({ children }) => {
	
	const [items, setItems] = useState([])
	const [modalStatus, setModal] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState(null);

	const openModal = (product) => {
		setSelectedProduct(product);
		setModal(true);
	};
	
	const closeModal = () => {
		setModal(false);
		setSelectedProduct(null);
	};
	
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
			selectedProduct,
		}}>
			{children}
		</ShopiContext.Provider>
	)
}

export default ShopiProvider;
