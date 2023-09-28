import React from 'react'
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsPlay} from "react-icons/bs"
function MovieCard(props) {
  return (
    <Link to={props.link}>
    <Card
     
    imgAlt="movie banner"
    imgSrc={props.img}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <p>
        {props.Title}
      </p>
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      <p>
        {props.desc}
      </p>
    </p>
    <div className=' flex items-center  text-gray-600 justify-between m-2'>
      <p>{`${props.owner.slice(0,4)}....${props.owner.slice(-4)}`}</p>
      <p className='flex items-center'><BsPlay className='h-5 w-5'/> {props.plays}</p>
    </div>
  </Card>
  </Link>
  )
}

export default MovieCard