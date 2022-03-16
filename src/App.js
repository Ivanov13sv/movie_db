
import { NotFound } from './pages/NotFound';

import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Details } from './pages/Details';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/movies/:id' element={<Details />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
