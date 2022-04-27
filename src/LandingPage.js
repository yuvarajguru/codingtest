import React, { useEffect, useState } from 'react'

export default function LandingPage() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchvalue) => {
		const url = `http://www.omdbapi.com/?s=${searchvalue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

	
        if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
		
	};
    useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

   console.log(movies)
  return (
    <div>
        <h2>LandingPage</h2>
            <div className='container-fluid movie-app'>
            <div className='row d-flex align-items-center mt-4 mb-4'>
                <div className='col col-sm-4'>
                <input 
                    className='form-control'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="search movie"/>
                </div>
            
			</div>
                <div className='row'>
                    {movies.map((item,index) =>(
                    <div className='image-container d-flex justify-content-start m-3'>
                        
                        <img src={item.Poster} alt='movie' height={300} width={300}></img>
                        
                    </div>
                    ))}
                </div>
            </div>
        
    </div>
  )
}
