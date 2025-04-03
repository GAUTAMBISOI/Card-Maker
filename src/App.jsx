import React, { useState } from 'react'
import Cards from './components/Cards'
import Forms from './components/Forms'

const App = () => {
  const [users,setUsers]=useState([])
  const handleFormSubmitData = (data) =>{
    setUsers([...users,data]);
  }

  const handleRemoveData=(id)=>{
    setUsers((prev)=>{
      return prev.filter((item,index)=>index!==id);
    });
  }
  
  return (
    <div className='h-screen w-full flex items-center bg-zinc-200'>
      <div className=' container mx-auto'>
         <Cards users={users} handleRemoveData={handleRemoveData}/>
        <Forms handleFormSubmitData={handleFormSubmitData}/>
          </div>
    </div>
  )
}

export default App