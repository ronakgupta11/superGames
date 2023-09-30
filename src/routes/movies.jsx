import React, { useEffect, useState } from 'react'
import AddMovie from '../components/AddMovie'
import MovieCard from '../components/MovieCard'
import { useContractRead } from 'wagmi'
// import { abi, address } from '../constants/constant'
import { abi, address as contractAddress } from '../constants/constant'
import { useAccount } from 'wagmi'
import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import CreateStream from '../components/CreateStream'
function Movies() {
  const navigate = useNavigate()
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
    const [subscription,setSubscription] = useState(0)
      useEffect(()=>{
        if(!address){
          navigate("/account")

        }

        setSubscription(Number(user?.SubscriptionTier))
        if(user?.isSubscriber == true){
            setStatus(true)

        }
      },[user])


      const FreeMoviesRendered = data?.map((movie)=>{
        if(movie.cat == "free"){
          return(
              <MovieCard Title ={movie.name} img = {movie.imageUri}  desc = {movie.desc} link={`/movies/${movie.movieId}`} owner = {movie.Owner} plays = {Number(movie.plays)}/>
          )}
      })
      const BasicMoviesRendered = data?.map((movie)=>{
        if(movie.cat == "basic"){
          return(
              <MovieCard Title ={movie.name} img = {movie.imageUri}  desc = {movie.desc} link={`/movies/${movie.movieId}`} owner = {movie.Owner} plays = {Number(movie.plays)}/>
          )}
      })
      const PremiumMoviesRendered = data?.map((movie)=>{
        if(movie.cat == "premium"){
          return(
              <MovieCard Title ={movie.name} img = {movie.imageUri}  desc = {movie.desc} link={`/movies/${movie.movieId}`} owner = {movie.Owner} plays = {Number(movie.plays)}/>
          )}
      })

    
  return (
    <>
    {/* {status ? */}
     <div className='m-4 p-4 flex flex-1 items-start justify-between space-y-4 flex-col'>
        {(subscription == 2 ) && <div className='flex items-center justify-between w-full'>
            <AddMovie/>
            <CreateStream/>
        </div>}
{ (subscription == 0||subscription == 1||subscription ==2 )&&       <div>
            <div className='m-2'>
                <p className='text-3xl font-semibold'> Free Movies</p>
            </div>
            <div className='flex flex-wrap items-center justify-center space-x-4 space-y-4'>
                {FreeMoviesRendered}
                
            </div>
        </div>}
      {(subscription ==1||subscription ==2 )&&      <div>
            <div className='m-2'>
                <p className='text-3xl font-semibold'> Basic Movies</p>
            </div>
            <div className='flex flex-wrap items-center justify-center space-x-4 space-y-4'>
                {BasicMoviesRendered}
                
            </div>
        </div>}
        {(subscription ==2) &&<div>
            <div className='m-2'>
                <p className='text-3xl font-semibold'> Premium Movies</p>
            </div>
            <div className='flex flex-wrap items-center justify-center space-x-4 space-y-4'>
                {PremiumMoviesRendered}
                
            </div>
        </div>}
    </div>
{/* //     :<div className='flex flex-1 items-center justify-center flex-col space-y-8'>
//     <p className='text-3xl font-bold text-gray-600'>
//       Please subscribe To explore Movies
//       </p>
//     <div>
// <Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300' onClick={()=>navigate("/pricing")}> Subscribe Now</Button>
//     </div>
//     </div>} */}
    
    </>

  )
}

export default Movies