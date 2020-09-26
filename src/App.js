import React from 'react';
import './App.css';
import { FettchingMovie } from './Components/fettchingMovie';

function App() {
	return (
		<div className='container'>
			<h1 className='title'>React Movie Search</h1>
			<FettchingMovie />
		</div>
	);
}

export default App;
