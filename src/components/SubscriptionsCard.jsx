'use client';

import { Card } from 'flowbite-react';
import {BsCheckCircleFill} from "react-icons/bs"
import SubscriptionPage from './SubscriptionPage';
export default function SubcsriptionsCard(props) {
  return (
    <Card>
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      Standard plan
    </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">
        $
      </span>
      <span className="text-5xl font-extrabold tracking-tight">
        49
      </span>
      <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul className="my-7 space-y-5">
      <li className="flex space-x-3">
        <BsCheckCircleFill/>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          2 team members
        </span>
      </li>
      <li className="flex space-x-3">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          20GB Cloud storage
        </span>
      </li>
      <li className="flex space-x-3">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
          Integration help
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
          Sketch Files
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
          API Access
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
          Complete documentation
        </span>
      </li>
      <li className="flex space-x-3 line-through decoration-gray-500">
      <BsCheckCircleFill/>

        <span className="text-base font-normal leading-tight text-gray-500">
          24×7 phone & email support
        </span>
      </li>
    </ul>
    <SubscriptionPage/>
  </Card>
    
  )
}


