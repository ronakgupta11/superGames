import React from 'react'
import SubscriptionsCard from '../components/SubscriptionsCard'


function Pricing() {
  return (
    <div className='p-4 flex flex-wrap flex-1 w-4/5 mx-auto my-16 space-x-4 items-center justify-between'>
        <SubscriptionsCard/>
        <SubscriptionsCard/>
        <SubscriptionsCard/>

    </div>
  )
}

export default Pricing