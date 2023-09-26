import React from 'react'
import AddMovie from '../components/AddMovie'
import MovieCard from '../components/MovieCard'
import { useContractRead } from 'wagmi'
import { abi, address } from '../constants/constant'


function Movies() {
    const { data, isError, isLoading } = useContractRead({
        address: address,
        abi: abi,
        functionName: 'getMovies',
      })
    
  return (
    <div className='m-4 p-4 flex flex-1 items-start justify-between space-y-4 flex-col'>
        <div>
            <AddMovie/>
        </div>
        <div>
            <div>
                <p className='text-xl font-semibold'> Explore Movies</p>
            </div>
            <div className='flex flex-wrap items-center justify-center space-x-4 space-y-4'>
                {data.map((movie)=>{
                    return(
                        <MovieCard Title ={movie.name} desc = {movie.desc} link={`/movies/${movie.movieId}`} owner = {movie.Owner} plays = {Number(movie.plays)}/>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Movies