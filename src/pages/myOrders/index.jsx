import React, { useContext, useState } from 'react';
import { ShopiContext } from '../../components/context';

export default function App() {
	const context = useContext(ShopiContext);
	const [expandedOrderIndex, setExpandedOrderIndex] = useState(null);

	const toggleExpand = (index) => {
		if (expandedOrderIndex === index) {
			setExpandedOrderIndex(null);
		} else {
			setExpandedOrderIndex(index)
		}
	};

	return (
		<div className='p-8'>
			<h1 className='text-3xl mb-6'>My Orders</h1>
			{context.orders.length > 0 ? (
				<div className='space-y-6'>
					{context.orders.map((order, index) => (
						<div 
							key={index} 
							className={`border p-4 rounded-lg shadow-md cursor-pointer transition-all ${
								expandedOrderIndex === index ? 'bg-gray-100' : 'bg-white'
							}`}
							onClick={() => toggleExpand(index)}
						>
							{/* Cabecera de la tarjeta */}
							<div className='flex justify-between items-center'>
								<h2 className='text-xl font-bold'>Order #{index + 1}</h2>
								<span className={`text-gray-600 transition-transform duration-300 ${
									expandedOrderIndex === index ? 'rotate-180' : ''
								}`}>
									&#x25BC; {/* Flecha que rota al expandir */}
								</span>
							</div>
							<p className='text-gray-600'>Date: {order.date}</p>
							<p className='text-gray-600'>Total Products: {order.totalProducts}</p>
							<p className='text-gray-600'>Total Price: ${order.totalPrice.toFixed(2)}</p>

							{/* Contenido expandible */}
							{expandedOrderIndex === index && (
								<ul className='mt-4 space-y-2'>
									{order.products.map((product, i) => (
										<li key={i} className='flex items-center justify-between'>
											<div className='flex items-center'>
												<img 
													className='w-16 h-16 object-cover rounded-lg mr-4' 
													src={product.image} 
													alt={product.title} 
												/>
												<span className='font-medium'>{product.title}</span>
											</div>
											<span>${product.price.toFixed(2)}</span>
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			) : (
				<p className='text-lg'>You have no orders yet.</p>
			)}
		</div>
	);
}
