import { Button, Datepicker, Select, TextInput } from 'flowbite-react'
import React from 'react'

const Search = () => {
  return (
    <form>
        <div className='flex justify-between'>
            <TextInput 
                placeholder='Search Post'
                className='w-full me-3'
            />
            <TextInput 
                placeholder='Enter tag'
                className='w-full me-3'
            />
            <Datepicker
                placeholder='Enter name'
                className='w-full me-3'
            />
            <Select
                className='w-full me-3'
            >
                <option value=""> Select Category </option>
                <option value=""></option>
            </Select>
            <Button type='submit'> Search </Button>
        </div>
    </form>
  )
}

export default Search
