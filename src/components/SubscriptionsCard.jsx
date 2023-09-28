'use client';

import { Card } from 'flowbite-react';
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
        { props.price}
      </span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul className="my-7 space-y-5">
      <li className="flex space-x-3">
        <BsCheckCircleFill/>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          {props.item1}
        </span>
      </li>
      <li className="flex space-x-3">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          {props.item2}
        </span>
      </li>
      <li className="flex space-x-3">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          {props.item3}
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
          {props.item4}
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
          {props.item5}
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
          {props.item6}
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
          {props.item7}
        </span>
      </li>
    </ul>
    <SubscriptionPage price = {props.price}/>
  </Card>
    
  )
}


