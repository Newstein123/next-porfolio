import { Button, Datepicker, TextInput } from 'flowbite-react'
import React from 'react'

const Search = () => {
  return (
    <form>
        <div className='flex justify-between'>
            <TextInput 
                placeholder='Enter name'
                className='w-full me-3'
            />
            <TextInput 
                placeholder='Enter email'
                className='w-full me-3'
            />
            <Datepicker
                placeholder='Enter name'
                className='w-full me-3'
            />
            <Button type='submit'> Search </Button>
        </div>
    </form>
  )
}

export default Search
