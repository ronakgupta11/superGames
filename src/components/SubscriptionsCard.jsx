'use client';

import { Button, Card } from 'flowbite-react';
import {BsCheckCircleFill} from "react-icons/bs"
import SubscriptionPage from './SubscriptionPage';
export default function SubcsriptionsCard(props) {
  return (
    <Card>
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      {props.plan}
    </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-2xl font-semibold">
        ETHx
      </span>
      <span className="text-3xl font-extrabold tracking-tight">
        {props.price}
      </span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul className="my-7 space-y-5">
      <li className={props.item1?"flex space-x-3":"flex space-x-3 line-through decoration-gray-500"}>
        <BsCheckCircleFill/>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
        Access To Free Movies
        </span>
      </li>
      <li className= {props.item2?"flex space-x-3":"flex space-x-3 line-through decoration-gray-500"}>
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
        Access to Basic Movies
        </span>
      </li>
      <li className = {props.item3?"flex space-x-3":"flex space-x-3 line-through decoration-gray-500"}>
      <BsCheckCircleFill/>
 
        <span className="text-base font-normal leading-tight text-gray-500">
        Access to Game Play
        </span>
      </li>
      <li className= {props.item4?"flex space-x-3":"flex space-x-3 line-through decoration-gray-500"}>
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
        Access to Premium Movies
        </span>
      </li>
      <li className={props.item5?"flex space-x-3":"flex space-x-3 line-through decoration-gray-500"}>
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
        Access To Streams
        </span>
      </li>
      <li className={props.item6?"flex space-x-3":"flex space-x-3 line-through decoration-gray-500"}>
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
        Add Your Content To Platfrom
        </span>
      </li>
      <li className={props.item7?"flex space-x-3":"flex space-x-3 line-through decoration-gray-500"}>
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
        Create And Broad Live Streams
        </span>
      </li>
    </ul>
    {props.price != "0" && <SubscriptionPage price = {props.price}/>}
    {props.price == "0"&& <Button className='bg-blue-700 enabled:hover:bg-blue-800 focus:ring-blue-300'>FREE</Button>}
  </Card>
    
  )
}


