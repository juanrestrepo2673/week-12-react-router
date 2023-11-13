
import { Link, Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<>
			<nav style={{ display: "flex", justifyContent: "space-around", width: "500px" }}>

				<Link to="/">Home</Link>
				<Link to="/products">Products</Link>
				<Link to="/login">Login</Link>
				<Link to="/contact">Contact</Link>

			</nav>
			<Outlet />
		</>
	)
}