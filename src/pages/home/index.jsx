import React, { useContext } from 'react';
import Card from '../../components/utilities/Card';
import { ShopiContext } from '../../components/context';
import ProductDetail from '../../components/utilities/ProductDetail';
import CheckoutList from '../../components/utilities/CheckoutCart';

export default function App() {
	const context = useContext(ShopiContext)

	return (
		<>
			<div className='flex justify-center my-8'>
				<input 
					type="text"
					placeholder="Buscar productos por título..."
					onChange={(e) => context.setSearchItem(e.target.value)}
					className="w-1/2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
				/>
			</div>

			<div className='grid gap-8 grid-cols-4 w-full max-w-full'>
				{context.filteredItems.map((product, index) => (
					<Card key={index} data={product}>{product.title}</Card>
				))}
			</div>

			<ProductDetail/>
			<CheckoutList/>
		</>
	);
}
