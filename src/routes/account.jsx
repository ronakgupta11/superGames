import { ConnectButton } from '@rainbow-me/rainbowkit'
import React,{useEffect, useState} from 'react'
import { useAccount } from 'wagmi'
import { Framework } from '@superfluid-finance/sdk-core'
import { ethers } from 'ethers'
import { Button, Spinner } from 'flowbite-react';
import { Card } from 'flowbite-react';
import {GiCancel} from "react-icons/gi"
import { useContractRead } from 'wagmi'
import { abi, address as contractAddress } from '../constants/constant'


function Account() {
  const reciever = contractAddress


  const [result,setResult] = useState(null)
  const [loading,setLoading] = useState(false)
  // const [user,setUser] = useState()
  const {address} = useAccount()

  const { data:user, isError, isLoading } = useContractRead({
    address: contractAddress,
    abi: abi,
    functionName: 'getUserFromAddress',
    args:[address]
  })



  useEffect(()=>{
    setLoading(true)

    const reciever = contractAddress
    async function init(){
    // const provider = new ethers.providers.JsonRpcProvider("https://goerli.base.org")
    const provider = new ethers.providers.Web3Provider(window.ethereum)


    const sf = await Framework.create({
      chainId: 84531, //your chainId here
      provider:provider,
    });
    const ETHx = await sf.loadSuperToken("0x7ffce315b2014546ba461d54eded7aac70df4f53");
    let res = await ETHx.getFlow({
      sender: address,
      receiver: reciever ,
      providerOrSigner: provider
    });

    // console.log(res);
    return res
  }
  init().then(v=>{
    setLoading(false)
    setResult(v)
    // setUser(data)
    // console.log(data)

  }).catch(e=>
      {setLoading(false)
        console.log(e)})
  },[user])


  async function cancelStream(){
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const sf = await Framework.create({
      chainId: 84531, //your chainId here
      provider:provider,
    });
    const ETHx = await sf.loadSuperToken("0x7ffce315b2014546ba461d54eded7aac70df4f53");

    let flowOp = ETHx.deleteFlow({
      sender: address,
      receiver: reciever ,
    });
    
    await flowOp.exec(signer );
  }
  return (
    <>
   {!address ? <div className='flex flex-1 items-center justify-center flex-col space-y-8'>
      <p className='text-3xl font-bold text-gray-600'>
        Please Connect Wallet To Continue
        </p>
      <div>
        <ConnectButton/>
      </div>
      </div>:
    <div>

 { loading ? <div className='text-center'>
   <Spinner  size={"xl"} />
  </div>
  :<div className='flex flex-1 justify-center items-center w-full flex-col space-y-4 m-8'>
      <div className='font-semibold text-xl text-center'>

      {address?`Connected Wallet: ${address}`:<ConnectButton/>}
      </div>
      {user?.isSubscriber ? <div className='font-semibold text-xl text-center text-[#4caf50]'>
        Active Subscriber,
        Subscription Plan: {(Number(user.SubscriptionTier)==1)?"Basic":"Premium"}
      </div>:<div className='font-semibold text-xl text-center text-[#f44336]'>
        Unsubscribed
      </div>}
{ user?.isSubscriber &&  <div className='w-full'>
      <p className='font-medium text-lg text-center'>
        Your Streams
        </p>
      <div className='w-full m-auto'>
      <Card
      className="w-3/5 m-auto"
      
    >
<div className='flex items-center justify-around'>

      <div className='w-3/5 space-y-2'>

      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
       
          To - 0xD7D98e76FcD14689F05e7fc19BAC465eC0fF4161
        
      </h5>
      <div className="flex items-center justify-between font-medium text-gray-700 dark:text-gray-400">
        <p>
         FlowRate - {result?.flowRate} wei/sec
        </p>
        <p>
         Deposit - {result?.flowRate}
        </p>
      </div>
      </div>
      <button onClick={cancelStream}>
      <GiCancel  className='h-8 w-8' color='red'/>
      </button>
  
</div>
    </Card>
      </div>
      </div >}
      <div className='w-full '>
        <p className='font-medium text-lg text-center'>
          Your Earnings
        </p>
        <div className='w-full m-auto'>
      <Card
      className="w-3/5 m-auto"
      
    >
<div className='flex items-center justify-around'>

      

      <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
       
          Amount Available - 0
        
      </h5>
      <Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'> Withdraw</Button>
      
  
</div>
    </Card>
      </div>
        <div>

        </div>
      </div>

    </div>}
    </div>}

    </>

  )
}

export default Account