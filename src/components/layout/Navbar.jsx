import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { ShopiContext } from '../../components/context';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
	const context = useContext(ShopiContext);
	return (
	<nav className="bg-light p-4">
		<div className="flex justify-between w-full">
		<ul className="flex list-none gap-0 p-0 m-0">
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/">Shopi</NavLink>
			</li>
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/all">All</NavLink>
			</li>
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/electronics">Electronics</NavLink>
			</li>
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/furnitures">Fornitures</NavLink>
			</li>
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/toys">Toys</NavLink>
			</li>
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/other">Other</NavLink>
			</li>
		</ul>
		<ul className="flex list-none gap-0 p-0 m-0">
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/myOrder">My order</NavLink>
			</li>
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/myOrders">My orders</NavLink>
			</li>
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/myAccount">My account</NavLink>
			</li>
			<li className="m-0">
			<NavLink
				className={({ isActive }) => isActive 
				? "relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-1 after:bg-blue-500 after:-bottom-1 after:left-0" 
				: "text-gray-800 font-medium p-2.5 rounded transition-colors duration-300"} 
				to="/signIn">Sign In</NavLink>
			</li>
		</ul>
				<ul className="flex list-none gap-0 p-0 m-0">
					<li className="m-0">
						<button
							onClick={context.openCheckout}
							className="relative text-gray-800 font-medium p-2.5 rounded transition-colors duration-300 flex items-center"
						>
							<ShoppingCartIcon className="w-6 h-6 mr-2" />
							({context.cart.length})
						</button>
					</li>
				</ul>
		</div>
	</nav>
	);
}
