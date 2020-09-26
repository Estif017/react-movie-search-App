import React, { useState } from 'react';
import { SearchMovies } from './SearchMovies';
import { DisplaYconetent } from './DisplaYconetent';

export const FettchingMovie = () => {
	const [query, setQuery] = useState('');
	const [movies, setMovie] = useState([]);
	const getMovies = async (e) => {
		e.preventDefault();
		try {
			const apiKey = 'f5a8c8a9d2252183d14255ac6a0493be';
			const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
			const response = await fetch(url);
			const data = await response.json();
			setMovie(data.results);
			console.log(movies);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div>
			<SearchMovies
				getMovies={getMovies}
				query={query}
				setQuery={(e) => setQuery(e.target.value)}
			/>
			<div className='card-list'>
				{movies
					.filter((movie) => movie.poster_path)
					.map((movie) => (
						//    <MovieCard movie={movie} key={movie.id} />
						<DisplaYconetent movie={movie} key={movie.id} />
					))}
			</div>
		</div>
	);
};
