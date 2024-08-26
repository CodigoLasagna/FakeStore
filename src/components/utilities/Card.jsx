import { useContext } from "react";
import { ShopiContext } from '../../components/context';

export default function Card({ data }) {
	const context = useContext(ShopiContext);

	const handleAddToCart = () => {
		context.addToCart(data);
	};

	return (
		<div className='bg-white cursor-pointer w-59 h-96 rounded-lg border-solid border-4 flex flex-col justify-between p-4'>
			<figure className='relative mb-2 w-full h-2/3' onClick={() => context.openModal(data)}>
				<span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
				<img className='w-full h-full object-cover rounded-lg' src={data.image} alt={data.title} />
			</figure>
			<div className='flex flex-col flex-grow justify-between'>
				<p className='flex justify-between items-center'>
					<span className='text-sm font-light truncate'>{data.title}</span>
					<span className='text-sm font-bold'>${data.price}</span>
				</p>
				<div className="flex justify-center mt-4">
					<button 
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors" 
						onClick={handleAddToCart}
					>
						Agregar al carrito
					</button>
				</div>
			</div>
		</div>
	);
}
