import React from 'react'
import GamesCard from '../components/GamesCard'
// import SubscriptionsCard from '../components/SubscriptionsCard'

function Games() {
  return (
    <div className='p-4 flex flex-wrap space-y-2 flex-1 w-4/5 mx-auto my-16 space-x-2 items-center justify-between'>
<GamesCard img = "https://picsum.photos/150" link="/games/bankpanic" Title="bank Panic" desc="random bank panic game to shoot the invadors"/>
<GamesCard img = "https://picsum.photos/150" Title="bank Panic" desc="random bank panic game to shoot the invadors"/>
<GamesCard img = "https://picsum.photos/150" Title="bank Panic" desc="random bank panic game to shoot the invadors"/>


    </div>
  )
}

export default Games