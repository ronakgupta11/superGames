import React from 'react'
import SubscriptionsCard from '../components/SubscriptionsCard'


function Pricing() {
  return (
    <div className='p-4 flex flex-wrap flex-1 w-4/5 mx-auto my-16 space-x-4 items-center justify-between'>
        <SubscriptionsCard plan = "FREE" price="0" item1={true}/>
        <SubscriptionsCard plan="BASIC"  price = "0.001" item1={true} item2 = {true} item3 ={true} />
        <SubscriptionsCard plan="PREMIUM" item1={true} item2 = {true} item3 ={true} item4 ={true} item5={true} item6={true} item7={true} price = "0.002"/>

    </div>
  )
}

export default Pricing