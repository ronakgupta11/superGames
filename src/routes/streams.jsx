import React,{useState,useEffect} from 'react'

import { useContractRead } from 'wagmi'
import { useNavigate } from 'react-router-dom'

import { abi, address as contractAddress } from '../constants/constant'
import { useAccount } from 'wagmi'
import { Button } from 'flowbite-react'
import StreamCard from '../components/StreamCard'
function Streams() {
  const navigate = useNavigate()
  const {address} = useAccount()
  const { data:user } = useContractRead({
    address: contractAddress,
    abi: abi,
    functionName: 'getUserFromAddress',
    args:[address]
  })
  const { data:streams, isError, isLoading } = useContractRead({
    address: contractAddress,
    abi: abi,
    functionName: 'getStreams',
  })
  const [status,setStatus] = useState(false)
  const [subscription,setSubscription] = useState(0)

      useEffect(()=>{
        if(!address){
          navigate("/account")
        }
        setSubscription(Number(user?.SubscriptionTier))
        console.log(user)
        if(user?.isSubscriber == true){
            setStatus(true)
        }
      },[user])

      const StreamsRendered = streams?.map((stream)=>{
       
          return(
              <StreamCard Title ={stream.name} img = {stream.image} id={stream.id} />
          )
      })
  return (
    <>
   {(status &&  subscription ==2 )? <div className='p-4 flex flex-wrap space-y-2 flex-1 w-4/5 mx-auto my-16 space-x-2 items-center justify-between'>
{StreamsRendered}
    </div>:<div className='flex flex-1 items-center justify-center flex-col space-y-8'>
      <p className='text-3xl font-bold text-gray-600'>
        Please subscribe To Premium Plan To Watch Streams
        </p>
      <div>
<Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300' onClick={()=>navigate("/pricing")}> Subscribe Now</Button>
      </div>
      </div>}
    </>

  )
}

export default Streams