import React from 'react'
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';


function GamesCard(props) {
  return (
    <Link to={props.link}>
    <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
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
  </Card>
  </Link>
  )
}

export default GamesCard