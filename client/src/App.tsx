// React
import { Routes, Route } from 'react-router';

// Layout 
import Layout from './layout/Layout';

// Pages 
import IndexPage from './pages/IndexPage/IndexPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

// Styles
import './App.scss'


export default function App() {

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<IndexPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Route>
		</Routes>
  	)

}
