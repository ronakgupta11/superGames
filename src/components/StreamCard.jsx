import React from 'react'
import { Card ,Button} from 'flowbite-react';
import { useStream } from '@livepeer/react';

import { useNavigate } from "react-router-dom";
function StreamCard(props) {
  const navigate = useNavigate();
  console.log(props.id)
  const {data:stream,isError,error} = useStream(props.id)
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
    {stream?.isActive && <div className='rounded-sm text-xs flex items-center font-bold bg-red-400 text-red-700 p-2 w-12 h-3'>
        LIVE

    </div>}


    <Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'  onClick = {()=>navigate(`/streams/${props.id}`)}> Play Stream</Button>
  </Card>

  )
}

export default StreamCard