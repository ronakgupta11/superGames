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
        console.log(user)
        if(user?.isSubscriber == true){
            setStatus(true)
        }
      },[user])
    
  return (
    <>
    {status ? <div className='m-4 p-4 flex flex-1 items-start justify-between space-y-4 flex-col'>
        <div>
            <AddMovie/>
        </div>
        <div>
            <div className='m-2'>
                <p className='text-3xl font-semibold'> Explore Movies</p>
            </div>
            <div className='flex flex-wrap items-center justify-center space-x-4 space-y-4'>
                {data?.map((movie)=>{
                    return(
                        <MovieCard Title ={movie.name} img = {movie.desc}  desc = {movie.img} link={`/movies/${movie.movieId}`} owner = {movie.Owner} plays = {Number(movie.plays)}/>
                    )
                })}
                
            </div>
        </div>
    </div>:<div>
      Please subscribe To explore Movies</div>}
    
    
    </>

  )
}

export default Movies