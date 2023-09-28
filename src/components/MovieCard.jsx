import React from 'react'
import { Card ,Button} from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsPlay} from "react-icons/bs"
import { useNavigate } from "react-router-dom";
function MovieCard(props) {
  const navigate = useNavigate();
  return (
    // <Link to={props.link}>
    
    <Card
     
    imgAlt="movie banner"
    imgSrc={props.img}
    className=''
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
    <Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'  onClick = {()=>navigate(props.link)}> Play</Button>
  </Card>

  )
}

export default MovieCard