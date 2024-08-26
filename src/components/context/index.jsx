import { useState, useEffect, createContext } from 'react'

export const ShopiContext = createContext();

export const ShopiProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [modalStatus, setModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [cart, setCart] = useState([]);
	const [checkoutStatus, setCheckoutStatus] = useState(false); // Nuevo estado

	const openModal = (product) => {
		setSelectedProduct(product);
		setModal(true);
		setCheckoutStatus(false);
	};

	const closeModal = () => {
		setModal(false);
		setSelectedProduct(null);
	};

	const openCheckout = () => {
		setCheckoutStatus(true);
		setModal(false);
	};

	const closeCheckout = () => {
		setCheckoutStatus(false);
	};

	const addToCart = (product) => {
		setCart((prevCart) => [...prevCart, product]);
	};

	const removeFromCart = (index) => {
		setCart((prevCart) => {
			const newCart = [...prevCart];
			newCart.splice(index, 1);
			return newCart;
		});
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
			cart,
			addToCart,
			removeFromCart,
			checkoutStatus, // Añadido al contexto
			openCheckout,
			closeCheckout
		}}>
			{children}
		</ShopiContext.Provider>
	);
};

export default ShopiProvider;
