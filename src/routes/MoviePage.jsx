import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useAsset } from '@livepeer/react';
import { Player } from '@livepeer/react';
export async function loader({params}){
    const id = params.movieId
    return {id}
}
function MoviePage() {
    const {id} =  useLoaderData();
    const {data:asset,isError,error} = useAsset(id)
  return (
    <div>
        <Player
        title={asset?.name}
        playbackId={asset?.playbackId}
        muted
        autoPlay
        showPipButton
        />
        
    </div>
  )
}

export default MoviePage