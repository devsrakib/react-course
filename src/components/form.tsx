import React, { useState } from 'react'

export default function Form() {
const [user, setUser] = useState({name: '', email: '', password: ''})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
}

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(user);
        
        console.log('Form submitted')
    }

  return (
    <div className='bg-white p-4 rounded-lg shadow-lg my-4 w-1/2 ml-6'>
        <h1>Registration</h1>

        <form action="" onSubmit={handleSubmit}>
            <div>
                <label className='text-black' htmlFor="name">Name: </label>
                <input onChange={handleChange} required className='bg-white rounded border border-[red] mb-2 text-black px-2' type="text" name="name" id="name" />
            </div>
            <div>
                <label className='text-black' htmlFor="email">Email: </label>
                <input onChange={handleChange} required className='bg-white rounded border border-[red] mb-2 text-black px-2'  type="email" name="email" id="email" />
            </div>
            <div>
                <label className='text-black' htmlFor="email">Password: </label>
                <input onChange={handleChange} required className='bg-white rounded border border-[red] mb-2 text-black px-2'  type="password" name="email" id="email" />
            </div>
            <div>
                <button className='w-[200px] bg-blue-300 rounded h-[40px] hover:bg-red-300 hover:font-bold' type='submit'>submit</button>
            </div>
        </form>
    </div>
  )
}
