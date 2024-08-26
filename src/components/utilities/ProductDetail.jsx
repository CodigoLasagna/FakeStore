import React, { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShopiContext } from '../../components/context';

export default function ProductDetail() {
	const context = useContext(ShopiContext)

	if (!context.modalStatus) return null;
	return (
		<aside className="w-[360px] h-[calc(100vh-80px)] top-[68px] flex-col fixed right-0 border-2 border-black rounded-lg bg-white">
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">Detail</h2>
				<div className="cursor-pointer">
					<XCircleIcon onClick={context.closeModal} className="w-6 h-6" />
				</div>
			</div>
			<figure>
				<img className="w-full h-full rounded-lg" alt="Product"/>
			</figure>
			<p className="flex flex-col p-6">
			</p>
		</aside>
	)
}
