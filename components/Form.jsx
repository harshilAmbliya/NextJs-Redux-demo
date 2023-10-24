"use client"

import { fetchUserManagment, updateUser } from '@/store/actions/UserActions';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const Form = ({ user }) => {
    const [formData, setFormData] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        setFormData(user && user)
        console.log(user)
    }, [user, dispatch])

    const handleSubmitData = async (e) => {
        e.preventDefault();
        await dispatch(updateUser(formData.id, formData))
        dispatch(fetchUserManagment())
    }


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='py-5'>
            <form action="" className='flex justify-center items-center flex-col gap-3 p-7 border border-gray-800 rounded-md'>
                <h3>Fill the form</h3>
                <div>
                    <label htmlFor="name">Name </label>
                    <input type="text" id='name' name="name" placeholder="Name..." value={formData?.name} className='border border-red-400 rounded-md px-3 py-1 ' onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" id='email' name='email' placeholder="Email... " value={formData?.email} className='border  border-red-400 rounded-md px-3 py-1' onChange={handleChange} />
                </div>
                <div>
                    <button className='px-3 py-1 bg-blue-500 text-white rounded-md' onClick={(e) => handleSubmitData(e)}>Update user</button>
                </div>
            </form>
        </div>
    )
}

export default Form