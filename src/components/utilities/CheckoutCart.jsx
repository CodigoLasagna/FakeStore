import React, { useContext } from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { ShopiContext } from '../../components/context';

export default function CheckoutList() {
	const context = useContext(ShopiContext);

	if (!context.checkoutStatus) return null;

	if (!context.cart.length) {
		return (
			<aside className="w-[360px] h-[calc(100vh-80px)] top-[68px] flex-col fixed right-0 border-2 border-black rounded-lg bg-white">
				<div className="flex justify-between items-center p-6">
					<h2 className="font-medium text-xl">Carrito de Compras</h2>
					<div className="cursor-pointer">
						<XCircleIcon onClick={context.closeCheckout} className="w-6 h-6" />
					</div>
				</div>
				<p className="p-6 text-center">Tu carrito está vacío.</p>
			</aside>
		);
	}

	return (
		<aside className="w-[360px] h-[calc(100vh-80px)] top-[68px] flex-col fixed right-0 border-2 border-black rounded-lg bg-white">
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">Carrito de Compras</h2>
				<div className="cursor-pointer">
					<XCircleIcon onClick={context.closeCheckout} className="w-6 h-6" />
				</div>
			</div>
			<div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 290px)' }}>
				{context.cart.map((product, index) => (
					<div key={index} className="flex justify-between items-center mb-4">
						<img className="w-20 h-20 object-cover rounded-lg" src={product.image} alt={product.title} />
						<div className="flex-grow ml-4">
							<span className="font-medium text-lg">{product.title}</span>
							<p className="text-sm">${product.price}</p>
						</div>
						<button 
							className="text-red-500 text-sm font-bold hover:text-red-700 transition-colors"
							onClick={() => context.removeFromCart(index)}
						>
							Eliminar
						</button>
					</div>
				))}
			</div>
			{/* Contenedor para el precio total y el botón de finalizar compra */}
			<div className="p-6 border-t border-black">
				<h3 className="font-bold text-lg">Total: ${context.cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</h3>
				<button
					className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
					onClick={() => context.addToOrders()}
					>
					Finalizar Compra
				</button>
			</div>
		</aside>
	);
}
