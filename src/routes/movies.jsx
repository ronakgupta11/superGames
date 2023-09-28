import React, { useEffect, useState } from 'react'
import AddMovie from '../components/AddMovie'
import MovieCard from '../components/MovieCard'
import { useContractRead } from 'wagmi'
// import { abi, address } from '../constants/constant'
import { abi, address as contractAddress } from '../constants/constant'
import { useAccount } from 'wagmi'

function Movies() {
    const {address} = useAccount()
    const { data, isError, isLoading } = useContractRead({
        address: contractAddress,
        abi: abi,
        functionName: 'getMovies',
      })
      const { data:user } = useContractRead({
        address: contractAddress,
        abi: abi,
        functionName: 'getUserFromAddress',
        args:[address]
      })
    const [status,setStatus] = useState(false)
      useEffect(()=>{
        if(user?.isSubscribed == true){
            setStatus(true)
        }
      },[user])
    
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