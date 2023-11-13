
import { Link } from 'react-router-dom'
import ProductData from '../../__mocks__/products.json'
import './Products.css'


export default function Products() {
	return (
		<main className='products'>
			<h1>Products</h1>

			<ul>
				{
					ProductData.map((product) => {
						return (
							<Link to={`/product/${product.id}`}>
								<li className='product' key={product.id}>
									<img src={product.image} alt={product.title}></img>
									<div>
										<strong>{product.title}</strong>
										<p>${product.price}</p>
									</div>
									<button>
										Add to cart
									</button>
								</li>
							</Link>
						)
					}
					)
				}
			</ul>
		</main >
	)
}
