import React from 'react'

const Card = ({user,handleRemoveData,id}) => {
  return (
  
        <div className='w-60 h-65 bg-zinc-100 rounded-lg flex items-center  flex-col p-2 m-3'>
        <div className='h-20 w-20 rounded-full bg-zinc-300 overflow-hidden'> 
            <img className='h-full w-full object-cover ' src={user.image} alt="" />
            </div>
        <div>
            <h1 className='text-xl font-semibold text-center p-1'>{user.name}</h1>
            <p className='text-sm font-light text-center leading-4 tracking-tight opacity-80'>{user.aboutMe}</p>
        </div>
        <button onClick={()=>handleRemoveData(id)} className='px-5 py-1 rounded-md bg-red-600 mt-4 text-white font-bold'>Remove it</button>
    </div>

  )
}

export default Card