import { useContext } from "react"
import { ShopiContext } from '../../components/context';

export default function Card({data}) {
	const context = useContext(ShopiContext)
	return (
		<div className='bg-white cursor w-59 h-80 rounded-lg border-solid border-4' onClick={() => context.openModal(data)}>
			<figure className='relative mb-2 w-full h-4/5'>
			<span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.category.name}</span>
			<img className='w-full h-full object-cover rounded-lg' src={data.image} alt={data.title} />
			</figure>
			<p className='flex justify-between'>
				<span className='text-sm font-light'>{data.title}</span>
				<span className='text-sm font-light'>{data.price}</span>
			</p>
		</div>
	)
}
