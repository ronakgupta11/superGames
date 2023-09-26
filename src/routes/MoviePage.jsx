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
    // createdAt
    // : 
    // 1695734210165
    // downloadUrl
    // : 
    // "https://lp-playback.com/hls/2193hy5o8i5sydvv/video"
    // hash
    // : 
    // null
    // id
    // : 
    // "2193dacd-f8af-4216-8048-4384c55fee94"
    // name
    // : 
    // "WhatsApp Video 2023-03-23 at 19.15.28.mp4"
    // playbackId
    // : 
    // "2193hy5o8i5sydvv"
    // playbackUrl
    // : 
    // "https://lp-playback.com/hls/2193hy5o8i5sydvv/index.m3u8"
    // size
    // : 
    // 629006
    // source
    // : 
    // {type: 'directUpload'}
    // status
    // : 
    // {phase: 'ready', updatedAt: 1695734251393}
    // storage
    // : 
    // {ipfs: {…}, status: {…}}
    // userId
    // : 
    // "1b153b62-b9e2-4e30-95f7-a3537cc6c8a7"
    // videoSpec
    // : 
    // {format: 'mp4', bitrate: 1305573, duration: 3.836667}
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