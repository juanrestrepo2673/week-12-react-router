
import ProductData from '../../__mocks__/products.json'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'


export default function ProductDetail() {

	console.log('product detail')
	const { id } = useParams();
	const product = ProductData.find(product => product.id === Number(id))

	return (
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

	)
}
