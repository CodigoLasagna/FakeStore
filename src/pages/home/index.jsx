import React, { useContext } from 'react';
import Card from '../../components/utilities/Card';
import { ShopiContext } from '../../components/context';
import ProductDetail from '../../components/utilities/ProductDetail';
import CheckoutList from '../../components/utilities/CheckoutCart';

export default function App() {
	const context = useContext(ShopiContext)

	console.log(context.items)
	
	return (
		<>
			<div className='grid gap-8 grid-cols-4 w-full max-w-full'>
				{context.items.map((product, index) => (
					<Card key={index} data={product}>{product.title}</Card>
				))}
			</div>
			<ProductDetail/>
			<CheckoutList/>
		</>
	);
}
