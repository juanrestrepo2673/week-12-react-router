import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/layouts/Layout";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";

export const Router = () => {

	const Login = () => <h1>Login</h1>;
	const Contact = () => <h1>Contact</h1>;

	return (
		<React.Fragment>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />}></Route>
						<Route path="login" element={<Login />}></Route>
						<Route path="contact" element={<Contact />}></Route>
						<Route path="products" element={<Products />}></Route>
						<Route path="product/:id" element={<ProductDetail />}></Route>
						<Route path="*" element={<h1>Not Found 404</h1>}></Route>
					</Route>
				</Routes>
			</BrowserRouter >
		</React.Fragment >
	)
}