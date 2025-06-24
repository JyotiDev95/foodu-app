import React from 'react'

const UserList = (props) => {
    const{des, location} = props
  return (
    <div className='mt-8'>
        <h3 className='text-lg'>Description: {des}</h3>
        <p className='font-bold text-base'>Do you want to Join Live?</p>
        <p>please reach out me on This Location: {location}</p>

    </div>
  )
}

export default UserList