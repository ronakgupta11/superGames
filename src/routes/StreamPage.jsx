import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useStream } from '@livepeer/react';
import { Player,Broadcast } from '@livepeer/react';
export async function loader({params}){
    const id = params.streamId
    return {id}
}
function StreamPage() {
    const {id} =  useLoaderData();
    const {data:asset,isError,error} = useStream(id)
    console.log(asset)
  return (
    <div>
        <Player
        title={asset?.name}
        playbackId={asset?.playbackId}
       
        
        />

        
    </div>
  )
}

export default StreamPage