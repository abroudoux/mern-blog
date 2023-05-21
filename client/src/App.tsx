// Imports
// import { Route, Routes } from 'react-router-dom';

// Components
import Header from './components/header/Header';
import Post from './components/posts/Post';
import Footer from './components/footer/Footer';

// Styles
import './App.scss'


export default function App() {

	return (
    	<body>
			{/* <Routes>
				<Route path="/" element={<HelloWorld />} />
			</Routes> */}

			<Header />
			<Post />
			<Post />
			<Post />

			<Footer />
		</body>
  	)

}
