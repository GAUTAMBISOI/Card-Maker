import React from 'react'
import { useForm } from 'react-hook-form'

const Forms = ({handleFormSubmitData}) => {
  const {register,handleSubmit,reset}=useForm()
  const handleSubmitData=data =>{
    handleFormSubmitData(data)
    reset()
  } 
  return (
    <div className='w-full flex justify-center mt-25'>
      <form className='flex gap-2' onSubmit={handleSubmit(handleSubmitData)}>
        <input {...register('name')} className='px-3 py-1 border-2  rounded-md text-base font-semibold' type="text" placeholder='Name' />
        <input {...register('aboutMe')} className='px-3 py-1 border-2 rounded-md text-base font-semibold' type="text" placeholder='About Me' />
        <input {...register('image')} className='px-3 py-1 border-2 rounded-md text-base font-semibold' type="text" placeholder='Image' />
        <button className='px-12 py-1 rounded-md text-base font-bold bg-blue-600 text-white '>Submit</button>
      </form>

    </div>
  )
}

export default Forms