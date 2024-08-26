import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../home'
import MyAccount from '../myAccount'
import MyOrder from '../myOrder'
import MyOrders from '../myOrders'
import NotFound from '../notFound'
import Signin from '../signin'
import Navbar from '../../components/layout/Navbar'
import Layout from '../../components/layout/Layout'
import { ShopiProvider } from '../../components/context'

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/clothes', element: <Home /> },
		{ path: '/electronics', element: <Home /> },
		{ path: '/*', element: <NotFound /> },
	]);
	return routes;
}

export default function App()
{
	return (
		<ShopiProvider>
			<BrowserRouter>
				<Layout>
					<Navbar/>
				</Layout>
				<AppRoutes/>
			</BrowserRouter>
		</ShopiProvider>
	)
}
