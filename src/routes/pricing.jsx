import React from 'react'
import SubscriptionsCard from '../components/SubscriptionsCard'


function Pricing() {
  return (
    <div className='p-4 flex flex-wrap flex-1 w-4/5 mx-auto my-16 space-x-4 items-center justify-between'>
        <SubscriptionsCard plan = "Basic" price="0.001"/>
        <SubscriptionsCard plan="Intermediate" price = "0.002"/>
        <SubscriptionsCard plan="Advanced" price = "0.003"/>

    </div>
  )
}

export default Pricing