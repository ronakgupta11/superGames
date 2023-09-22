import { ConnectButton } from '@rainbow-me/rainbowkit'
import React,{useEffect, useState} from 'react'
import { useAccount } from 'wagmi'
import { Framework } from '@superfluid-finance/sdk-core'
import { ethers } from 'ethers'

function Account() {
  const [result,setResult] = useState(null)

  useEffect(()=>{
    const reciever = "0xD7D98e76FcD14689F05e7fc19BAC465eC0fF4161"


    async function init(){


    const provider = new ethers.providers.JsonRpcProvider("https://goerli.base.org")
    console.log(provider)

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

    console.log(res);
    return res




  }


  init().then(v=>setResult(v)).catch(e=>console.log(e))


  },[])
  const {address} = useAccount()
  return (
    <div className='flex flex-1 items-center justify-center flex-col space-y-4 m-8'>
      <div>

      {address?`Connected Wallet: ${address}`:<ConnectButton/>}
      </div>
      <div>

      Your Streams
      <div>
      {result?`result:${result?.flowRate}- deposit : ${result?.deposit}`:"NOT INIT"}
      </div>
      </div>

    </div>
  )
}

export default Account