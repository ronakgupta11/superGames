import React from 'react'
import AddMovie from '../components/AddMovie'

function Movies() {
  return (
    <div className='m-4 p-4 flex flex-1 items-start justify-between space-y-4 flex-col'>
        <div>
            <AddMovie/>
        </div>
        <div>
            <div>
                <p className='text-xl font-semibold'> Explore Movies</p>
            </div>
            <div>
                {/* render all movies Here */}

            </div>
        </div>
    </div>
  )
}

export default Movies