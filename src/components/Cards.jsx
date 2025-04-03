import React from 'react'
import Card from './Card'

const Cards = ({users,handleRemoveData}) => {
  return (
    <div className='w-full h-[35vh] overflow-auto flex flex-wrap  border-1 border-zinc-400 border-solid p-4'>
      {users.map((item,index)=>{
              return(
                <Card handleRemoveData={handleRemoveData} user={item} id={index} key={index} /> 
              )  
      })}
 
    </div>
  )
}

export default Cards