import React,{useState,useEffect} from 'react'
import GamesCard from '../components/GamesCard'

import { useContractRead } from 'wagmi'
import { useNavigate } from 'react-router-dom'

import { abi, address as contractAddress } from '../constants/constant'
import { useAccount } from 'wagmi'
import { Button } from 'flowbite-react'
function Games() {
  const navigate = useNavigate()
  const {address} = useAccount()
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
   {status? <div className='p-4 flex flex-wrap space-y-2 flex-1 w-4/5 mx-auto my-16 space-x-2 items-center justify-between'>
<GamesCard img = "../assets/logo/bp.jpeg" link="/games/bankpanic" Title="Bank Panic" desc="random bank panic game to shoot the invadors"/>
<GamesCard img = "../assets/logo/cm.jpeg" link="/games/cardmemory" Title="Card Memory Game" desc="check your memory with cards flipping game"/>
    </div>:<div className='flex flex-1 items-center justify-center flex-col space-y-8'>
      <p className='text-3xl font-bold text-gray-600'>
        Please subscribe To Play Games
        </p>
      <div>
<Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300' onClick={()=>navigate("/pricing")}> Subscribe Now</Button>
      </div>
      </div>}
    </>

  )
}

export default Games