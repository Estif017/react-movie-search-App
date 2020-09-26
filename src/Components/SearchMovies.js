import React from 'react';

export const SearchMovies = (props) => {
	// const [query, setQuery] = useState('');
	// console.log(props);
	return (
		<form onSubmit={props.getMovies}>
			<input
				type='text'
				value={props.query}
				onChange={props.setQuery}
				placeholder='serch for movies'
			/>
			<button>Search</button>
		</form>
	);
};
